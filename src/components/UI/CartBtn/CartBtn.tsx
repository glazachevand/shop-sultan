import { Link } from 'react-router-dom';
import { ROUTES } from 'types/const/routes';
import { classNames } from "utils/classNames/classNames";
import cls from "./CartBtn.module.scss";
import Cart from 'assets/icons/cart-black.svg';

interface CartBtnProps {
  className?: string;
  isText?: boolean;
}

export const CartBtn = (props: CartBtnProps) => {
  const { className = '', isText = false } = props;

  return (
    <Link to={ROUTES.CART} className={classNames(cls.cartBtn, {}, [className])}>
      <div className={cls.cart}>
        <img src={Cart} className={cls.cartIcon} alt='cart' />
        <div className={cls.cartCount}>5</div>
      </div>
      {isText && (
        <div className={cls.cartText}>
          <div>Корзина</div>
          <div className={cls.cartPrice}>12478 ₸</div>
        </div>
      )}
    </Link>
  );
};