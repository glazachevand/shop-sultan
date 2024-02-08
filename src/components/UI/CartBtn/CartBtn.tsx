import { Link } from 'react-router-dom';
import { ROUTES } from 'types/const/routes';
import { classNames } from "utils/classNames/classNames";
import cls from "./CartBtn.module.scss";
import Cart from 'assets/icons/cart-black.svg';
import { useAppSelector } from 'hooks/redux';
import { useTranslation } from 'react-i18next';

interface CartBtnProps {
  className?: string;
  isText?: boolean;
}

export const CartBtn = (props: CartBtnProps) => {
  const { className = '', isText = false } = props;
  const { t } = useTranslation();
  const { totalPrice, totalCounts } = useAppSelector(state => state.cart);

  return (
    <Link to={ROUTES.CART} className={classNames(cls.cartBtn, {}, [className])}>
      <div className={cls.cart} data-testid='cartBtn'>
        <img src={Cart} className={cls.cartIcon} alt='cart' />
        <div className={cls.cartCount}>{totalCounts}</div>
      </div>
      {isText && (
        <div className={cls.cartText}>
          <div>{t('header.cart')}</div>
          <div className={cls.cartPrice}>{totalPrice} ₸</div>
        </div>
      )}
    </Link>
  );
};