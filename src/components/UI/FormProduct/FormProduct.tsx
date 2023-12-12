import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useCreateProductMutation, useUpdateProductMutation } from "services/products.api";
import { setProductsCount } from "store/reducers/productsSlice";
import { IProduct } from "types/products";
import { classNames } from "utils/classNames/classNames";
import { Button } from "../Button/Button";
import cls from "./FormProduct.module.scss";

interface FormProductProps {
  className?: string;
  product?: IProduct;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const FormProduct = (props: FormProductProps) => {
  const { className, product, onClose } = props;
  const dispatch = useAppDispatch();
  const allCategories = useAppSelector((state) => state.products.categories);
  const lastId = useAppSelector((state) => state.products.productsCount);

  const productItem: IProduct = {
    id: product?.id || lastId + 1 || 1,
    title: product?.title || '',
    url: product?.url || 'product1.webp',
    barcode: product?.barcode || 6684049097549,
    manufacturer: product?.manufacturer || '',
    brand: product?.brand || '',
    description: product?.description || '',
    typesize: product?.typesize || 'вес',
    size: product?.size || '',
    typecare: product?.typecare || [],
    price: product?.price || 0
  }

  const [item, setItem] = useState<IProduct>(productItem);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setItem((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const onChangeNumberHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setItem((state) => ({ ...state, [e.target.name]: Number(e.target.value) }));
  }

  const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setItem((state) => {
      let arr = state?.typecare;
      if (state.typecare?.includes(e.target.value)) {
        arr = arr.filter(item => item !== e.target.value);
      } else if (e.target.value) {
        arr.push(e.target.value);
      }
      return { ...state, typecare: arr };
    });
  }

  const [addProduct, { error: addError, data: createProducts, }] = useCreateProductMutation();
  const [updateProduct, { error: updateError }] = useUpdateProductMutation();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      updateProduct(item).then(() => {

      });
    } else {
      addProduct(item).then(() => {
        dispatch(setProductsCount(lastId + 1));
        setItem(productItem);
      });
    }
    onClose(false);
  };

  return (
    <div className={classNames(cls.formProduct, {}, [className])}>
      <form action="#" name='productform' onSubmit={onSubmitHandler}>
        <h2 className={cls.title}>Редактирование / добавление товара</h2>

        <div className={cls.label}>Название</div>
        <input className={cls.input} name="title" type="text" value={item?.title} onChange={onChangeHandler} required />

        <div className={cls.label}>Фото</div>
        <input className={cls.input} name="url" type="text" value={item ? item.url : 'product14.webp'} onChange={onChangeHandler} required />

        <div className={cls.label}>Бренд</div>
        <input className={cls.input} name="brand" type="text" value={item?.brand} onChange={onChangeHandler} required />

        <div className={cls.label}>Штрихкод</div>
        <input className={cls.input} name="barcode" type="text" value={item?.barcode} onChange={onChangeHandler} required />

        <div className={cls.label}>Производитель</div>
        <input className={cls.input} name="manufacturer" type="text" value={item?.manufacturer} onChange={onChangeHandler} required />

        <div className={cls.label}>Описание</div>
        <textarea className={cls.input} name="description" value={item?.description} onChange={onChangeHandler} required></textarea>

        <div className={cls.label}>Тип размера</div>
        <label htmlFor="weight">Вес</label>
        <input className={cls.radio} type="radio" name="typesize" value="вес" id='weight'
          checked={item?.typesize === 'вес' ? true : false} onChange={onChangeHandler} />
        <label htmlFor="volume">Объем</label>

        <input className={cls.radio} type="radio" name="typesize" value="объем" id='volume'
          checked={item?.typesize === 'вес' ? false : true} onChange={onChangeHandler} />

        <div className={cls.label}>Размер</div>
        <input className={cls.input} name="size" type="text" value={item?.size} onChange={onChangeHandler} required />

        <select className={cls.select} name="typecare" multiple onChange={onChangeSelectHandler}
          value={item?.typecare} >
          <option className={cls.options} disabled>Тип ухода</option>
          {allCategories.length && allCategories.map(category => category !== 'Все' && (
            <option className={cls.options} value={category} key={category}>{category}</option>
          ))}
        </select>

        <div className={cls.label}>Цена</div>
        <input className={cls.input} name="price" type="text" value={item?.price} onChange={onChangeNumberHandler} required />

        <Button type="submit" text="Сохранить" width="200px" height="59px" />
      </form>
    </div>
  );
};