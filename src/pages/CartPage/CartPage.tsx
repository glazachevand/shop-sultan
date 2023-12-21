import React, { useCallback, useState } from 'react';
import { FC } from 'react';
import cls from './CartPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { BackButton } from 'components/UI/BackButton/BackButton';
import { Button } from 'components/UI/Button/Button';
import { CartList } from 'components/CartList/CartList';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { clearCart } from 'store/reducers/cartSlice';
import { Modal } from 'components/UI/Modal/Modal';

const CartPage: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const { totalPrice, totalCounts } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const onCloseModalClick = useCallback(() => {
    dispatch(clearCart());
    setOpenModal((prev) => !prev);
  }, []);

  const orderSubmit = useCallback(() => {
    setOpenModal(true);
  }, []);

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
            <Button text="Оформить заказ" width="290px" height="80px" onClick={orderSubmit} disabled={totalCounts === 0} />
            : <Button text="Оформить заказ" width="192px" height="59px" onClick={orderSubmit} disabled={totalCounts === 0} />
          }
          <div className={cls.priceTotal}>{totalPrice} ₽</div>
          <Modal isOpen={openModal} onClose={onCloseModalClick} type='order' isCloseBtn={true}>
            <div className={cls.orderModal}>
              <Button icon="orderOK" form="circ" width="59px" height="59px" />
              <h2 className={`${cls.title} title1`}>Спасибо за заказ</h2>
              <p >Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
          </Modal>
        </div>
      </section>
    </div >
  );
};

export default CartPage;