import React from 'react';
import { FC } from 'react';
import cls from './CartPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { BackButton } from 'components/UI/BackButton/BackButton';
import { Button } from 'components/UI/Button/Button';
import { CartList } from 'components/CartList/CartList';
import { useAppSelector } from 'hooks/redux';

export const CartPage: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const totalPrice = useAppSelector(state => state.cart.totalPrice)

  return (
    <div className='_container'>
      {!isMobile ?
        <Breadcrumbs item='Корзина' />
        : <BackButton className="backButton" />}
      <section className={cls.cart}>
        <h1 className={`${cls.title} title1`}>Корзина</h1>
        <CartList />
        <div className={cls.cartBottom}>
          {isMobile ?
            <Button text="Оформить заказ" width="290px" height="80px" />
            : <Button text="Оформить заказ" width="192px" height="59px" />
          }
          <div className={cls.priceTotal}>{totalPrice} ₽</div>
        </div>
      </section>
    </div >
  );
};