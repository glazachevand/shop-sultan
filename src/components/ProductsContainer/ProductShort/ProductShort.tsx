import { Link } from 'react-router-dom';
import cls from "./ProductShort.module.scss";
import { Button } from "components/UI/Button/Button";
import weightImage from "assets/icons/box.svg";
import volumeImage from "assets/icons/bottle.svg";
import { IProduct } from 'types/products';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { addProductToCart } from 'store/reducers/cartSlice';
import { ICartItem } from 'types/cart';
import { Modal } from 'components/UI/Modal/Modal';
import { FormProduct } from 'components/FormProduct/FormProduct';
import { useState } from 'react';
import { useDeleteProductMutation } from 'services/products.api';

interface ProductShorttProps {
  product: IProduct;
}

export const ProductShort = (props: ProductShorttProps) => {
  const { product } = props;
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const imgSrc = require(`../../../assets/img/products/${product.url}`);
  const isAdmin = useAppSelector(state => state.user.isAdmin);

  const [deleteProduct, { error }] = useDeleteProductMutation();

  const onDeleteHandler = () => {
    deleteProduct(product.id);
  };

  return (
    <div className={cls.productShort} data-testid="productShort">
      {product.popular && <Button className={cls.popular} text='Популярное' form='rectangle-green' color='green' width="96px" height="25px" />}

      <div className={cls.body}>
        {imgSrc &&
          <Link to={`/product/${product.id}`} rel="noreferrer">
            <img src={imgSrc} alt="product" className={cls.imageSmall} />
          </Link>}
        <div className="product__size">
          <img src={product.typesize === 'вес' ? weightImage : volumeImage} alt="typesize" />
          {product.size}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className={cls.title}><span>{product.brand} </span>{product.title}</h3>
        </Link>
        <div className="product__properties">
          <div><span className="product__label">Штрихкод:</span>{product.barcode}</div>
          <div><span className="product__label">Производитель:</span>{product.manufacturer}</div>
          <div><span className="product__label">Бренд:</span>{product.brand}</div>
        </div>
        <div className="product__properties">
          <h4 className="product__care-title">Тип ухода</h4>
          {product.typecare.map(item => <span className="product__care" key={item}>{item}</span>)}
        </div>
      </div>
      <div className={`${cls.priceRow} ${isAdmin ? cls.isAdmin : ''}`}>
        <div className={cls.price}>{product.price}&nbsp;₽</div>
        {isAdmin ? (
          <>
            <Button
              text='Редактировать'
              width='140px'
              height='45px'
              onClick={() => setOpenModal(true)}
              data-testid="editBtn"
            />
            <Button
              icon="remove"
              form="circ"
              width="45px"
              height="45px"
              onClick={onDeleteHandler}
              data-testid="removeBtn"
            />
            <Modal isOpen={openModal} onClose={() => setOpenModal((prev) => !prev)} type='order' isCloseBtn={true}>
              <div className="formModal">
                <FormProduct onClose={setOpenModal} product={product} />
              </div>
            </Modal>
          </>
        ) : (
          <Button
            text='В КОРЗИНУ'
            icon='cart'
            form='cartSmall'
            width='153px'
            height='45px'
            onClick={() => { dispatch(addProductToCart(product as ICartItem)) }}
            data-testid="cartBtn"
          />
        )}
      </div>

    </div >
  );
};