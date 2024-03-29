import { useState } from "react";

import volumeImage from "assets/icons/bottle.svg";
import weightImage from "assets/icons/box.svg";
import Arrow from "assets/icons/triangle-black.svg";
import { Button } from "components/UI/Button/Button";
import { CountContainer } from "components/UI/CountContainer/CountContainer";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { addProductToCart, minusProductInCart } from "store/reducers/cartSlice";
import { ICartItem } from "types/cart";
import { IProduct } from "types/products";
import { classNames } from "utils/classNames/classNames";

import cls from "./ProductFull.module.scss";


interface ProductFullProps {
  className?: string;
  product: IProduct;
}

export const ProductFull = (props: ProductFullProps) => {
  const { className = '', product } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items);

  const cartItem = items.find(item => item.id === product.id);

  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [showDescr, setDescrShow] = useState(true);
  const [showProp, setPropShow] = useState(true);

  const imgSrc = require(`../../assets/img/products/${product?.url}`) || '';

  return (
    <>
      {product &&
        <div className={classNames(cls.productFull, {}, [className])} data-testid="productFull">
          <div className={cls.imageFull}>
            <img src={imgSrc} alt="product" />
          </div>
          <div className={cls.body}>
            <div className={cls.available}>{t('product.in_stock')}</div>
            <h1 className={cls.title}><span>{product.brand} </span>{product.title}</h1>
            {!isMobile &&
              <div className="product__size">
                <img src={product.typesize === 'вес' ? weightImage : volumeImage} alt="product" />
                {product.size}
              </div>
            }
            <div className={cls.actions}>
              <div className={cls.price}>{product.price} ₽</div>
              <CountContainer
                className={cls.countContainer}
                value={cartItem?.count || 0}
                plusHandler={() => { dispatch(addProductToCart(product as ICartItem)) }}
                minusHandler={() => { dispatch(minusProductInCart(product as ICartItem)) }}
              />
              <Button
                className={cls.cartBtn}
                text={t('product.add_to_cart')}
                icon='cart'
                width='184px'
                height='59px'
                onClick={() => { dispatch(addProductToCart(product as ICartItem)) }}
              />
              <div className={cls.w100}></div>
              <Button className={cls.subscrBtn} icon='subscr' form="rectangle" color='white' width='77px' height='77px' />
              <div className={cls.delivery}>
                <div>{t('product.delivery1')} <b>10 000 ₸ </b>{t('product.delivery2')}</div>
              </div>
              <Button className={cls.priceList} text={t('buttons.price_list')} icon='download' form="rectangle" color="white" width='186px' height='77px' />
            </div>
            <div className={`product__properties ${cls.propertiesTop}`}>
              <div><span className="product__label">{t('product.manufacturer')}:</span>{product.manufacturer}</div>
              <div><span className="product__label">{t('product.brand')}:</span>{product.brand}</div>
              <div><span className="product__label">{t('product.article')}:</span>460404</div>
              <div><span className="product__label">{t('product.barcode')}:</span>{product.barcode}</div>
            </div>
            <div
              className={`${cls.descriptionTitle} ${showDescr ? cls.show : ''}`}
              onClick={() => setDescrShow(prev => !prev)}
            >
              <h4 >{t('product.descr_title')}</h4>
              <img className={cls.arrow} src={Arrow} alt="" />
            </div>
            <p className={`${cls.description} ${showDescr ? cls.show : ''}`} data-testid="description">
              {product.description}
            </p>
            <div
              className={`${cls.descriptionTitle} ${showProp ? cls.show : ''}`}
              onClick={() => setPropShow(prev => !prev)}
            >
              <h4 >{t('product.charact_title')}</h4>
              <img className={cls.arrow} src={Arrow} alt="" />
            </div>
            <div className={`product__properties ${cls.propertiesBottom}  ${showProp ? cls.show : ''}`} data-testid="properties">
              <div><span className="product__label">{t('product.purpose')}:</span>BioMio</div>
              <div><span className="product__label">{t('product.type')}:</span>BioMio</div>
              <div><span className="product__label">{t('product.manufacturer')}:</span>{product.manufacturer}</div>
              <div><span className="product__label">{t('product.brand')}:</span>{product.brand}</div>
              <div><span className="product__label">{t('product.article')}:</span>460404</div>
              <div><span className="product__label">{t('product.barcode')}:</span>{product.barcode}</div>
              <div><span className="product__label">{t('product.weight')}:</span>{product.size}</div>
              <div><span className="product__label">{t('product.count')}:</span>2</div>
            </div>
            <div className="product__properties">
              <h4 className="product__care-title">{t('product.typecare')}</h4>
              {product.typecare.map(item => <span className="product__care" key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      }
    </>
  );
};