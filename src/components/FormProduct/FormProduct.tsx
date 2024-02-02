import { Button } from "components/UI/Button/Button";
import { Checkbox } from "components/UI/Checkbox/Checkbox";
import { useAppSelector } from "hooks/redux";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { useCreateProductMutation, useGetProductsQuery, useUpdateProductMutation } from "services/products.api";
import { IProduct } from "types/products";
import { classNames } from "utils/classNames/classNames";
import cls from "./FormProduct.module.scss";

interface FormProductProps {
  className?: string;
  product?: IProduct;
  onClose?: Dispatch<SetStateAction<boolean>>;
}

export const FormProduct = (props: FormProductProps) => {
  const { className, product, onClose } = props;
  const categories = useAppSelector((state) => state.products.categories);
  const { data: products } = useGetProductsQuery({});

  const productItem: IProduct = {
    id: product?.id || 1,
    title: product?.title || '',
    url: product?.url || 'product1.webp',
    barcode: product?.barcode || 6684049097549,
    manufacturer: product?.manufacturer || '',
    brand: product?.brand || '',
    description: product?.description || '',
    typesize: product?.typesize || 'вес',
    size: product?.size || '',
    typecare: product?.typecare || [],
    price: product?.price || 10
  }

  const [item, setItem] = useState<IProduct>(productItem);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setItem((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const onChangeNumberHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setItem((state) => ({ ...state, [e.target.name]: Number(e.target.value) }));
  }

  const onCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const find = item.typecare.find(item => item === e.target.value);
    if (find) {
      setItem(state => { return { ...state, typecare: state.typecare.filter(item => item !== find) } })
    } else {
      setItem(state => { return { ...state, typecare: [...state.typecare, e.target.value] } })
    }
  };

  const [addProduct, { isLoading: isLoadingAdd, isError: isErrorAdd }] = useCreateProductMutation();
  const [updateProduct, { isLoading: isLoadingUpdate, isError: isErrorUpdate }] = useUpdateProductMutation();

  const onSubmitHandler = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (product) {
      try {
        await updateProduct(item).unwrap();
        if (onClose) {
          onClose(false)
        }
      } catch (error) {
        console.log('Ошибка при сохранении записи: ', error);
      }
    } else {
      item.id = products?.length ? (products[products.length - 1].id + 1) : 1;

      try {
        await addProduct(item).unwrap();
        if (onClose) {
          onClose(false)
        }
        //setItem(productItem);
      } catch (error) {
        console.log('Ошибка при создании записи: ', error);
      }
    }
  };

  return (
    <div className={classNames(cls.formProduct, {}, [className])} data-testid="formProduct">
      <form action="#" name='productform'>
        <h2 className={cls.title}>Редактирование / добавление товара</h2>

        <div className={cls.label}>Название</div>
        <input className={cls.input} name="title" type="text" value={item?.title} onChange={onChangeHandler} required title="title" />

        <div className={cls.label}>Фото</div>
        <input className={cls.input} name="url" type="text" value={item ? item.url : 'product14.webp'} onChange={onChangeHandler} required title="image" />

        <div className={cls.label}>Бренд</div>
        <input className={cls.input} name="brand" type="text" value={item?.brand} onChange={onChangeHandler} required title="brend" />

        <div className={cls.label}>Штрихкод</div>
        <input className={cls.input} name="barcode" type="text" value={item?.barcode} onChange={onChangeHandler} required title="barcode" />

        <div className={cls.label}>Производитель</div>
        <input className={cls.input} name="manufacturer" type="text" value={item?.manufacturer} onChange={onChangeHandler} required title="manufacturer" />

        <div className={cls.label}>Описание</div>
        <textarea className={cls.input} name="description" value={item?.description} onChange={onChangeHandler} title="description"></textarea>

        <div className={cls.label}>Тип размера</div>
        <label htmlFor={`weight${item.id}`}>Вес</label>
        <input className={cls.radio} type="radio" name="typesize" value="вес" id={`weight${item.id}`}
          checked={item?.typesize === 'вес' ? true : false} onChange={onChangeHandler} />
        <label htmlFor={`volume${item.id}`}>Объем</label>

        <input className={cls.radio} type="radio" name="typesize" value="объем" id={`volume${item.id}`}
          checked={item?.typesize === 'вес' ? false : true} onChange={onChangeHandler} />

        <div className={cls.label}>Размер</div>
        <input className={cls.input} name="size" type="text" value={item?.size} onChange={onChangeHandler} required title="size" />

        <div className={cls.label}>Тип ухода</div>
        <ul>
          {categories.length && categories.map(category => (
            <Checkbox item={category.title} key={category.id} checked={item.typecare.includes(category.title)} change={onCheckHandler} />
          ))}
        </ul>

        <div className={cls.label}>Цена</div>
        <input className={cls.input} name="price" type="number" value={item?.price} onChange={onChangeNumberHandler} required title="price" />

        {isErrorAdd && <div className={cls.error}>Ошибка при создании записи</div>}
        {isErrorUpdate && <div className={cls.error}>Ошибка при сохранении записи</div>}
        <Button className={cls.submit} type="submit" width="200px" height="59px" onClick={onSubmitHandler}>
          {(isLoadingAdd || isLoadingUpdate) && <span className={cls.spinner}></span>}
          <div>Сохранить</div>
        </Button>
      </form>
    </div>
  );
};