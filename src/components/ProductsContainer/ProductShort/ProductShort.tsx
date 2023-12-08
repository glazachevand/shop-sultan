import { Link } from 'react-router-dom';
import cls from "./ProductShort.module.scss";
import { Button } from "components/UI/Button/Button";
import weightImage from "assets/icons/box.svg";
import volumeImage from "assets/icons/bottle.svg";
import { IProduct } from 'types/products';
import { useState } from 'react';
import { useAppDispatch } from 'hooks/redux';
import { addProductToCart } from 'store/reducers/cartSlice';
import { ICartItem } from 'types/cart';

interface ProductShorttProps {
  product: IProduct;
}

export const ProductShort = (props: ProductShorttProps) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  const imgSrc = require(`assets/img/products/${product.url}`);

  return (
    <div className={cls.productShort}>
      {product.popular && <Button className={cls.popular} text='Популярное' form='rectangle-green' color='green' width="96px" height="25px" />}

      <div className={cls.body}>
        {imgSrc &&
          <Link to={`/product/${product.id}`} rel="noreferrer">
            <img src={imgSrc} alt="product" className={cls.imageSmall} />
          </Link>}
        <div className="product__size">
          <img src={product.typesize === 'вес' ? weightImage : volumeImage} alt="product" />
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
      <div className="product__priceRow">
        <div className={cls.price}>{product.price} ₽</div>
        <Button
          text='В КОРЗИНУ'
          icon='cart'
          form='cartSmall'
          width='153px'
          height='45px'
          onClick={() => { dispatch(addProductToCart(product as ICartItem)) }}
        />
      </div>

    </div >
  );
};