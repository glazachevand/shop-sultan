import { useAppSelector } from "hooks/redux";
import { classNames } from "utils/classNames/classNames";
import { CartItem } from "./CartItem/CartItem";
import cls from "./CartList.module.scss";
import { useTranslation } from 'react-i18next';

interface CartListProps {
  className?: string;
}

export const CartList = (props: CartListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const items = useAppSelector(state => state.cart.items);

  return (
    <div className={classNames(cls.cartList, {}, [className])} data-testid="cartList">
      {items.length ?
        items.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))
        : <h2 className="title2">{t('messages.cart_no_items')}  <span>😕</span></h2>}
    </div>
  );
};