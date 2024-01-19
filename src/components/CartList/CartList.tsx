import { useAppSelector } from "hooks/redux";
import { classNames } from "utils/classNames/classNames";
import { CartItem } from "./CartItem/CartItem";
import cls from "./CartList.module.scss";

interface CartListProps {
  className?: string;
}

export const CartList = (props: CartListProps) => {
  const { className } = props;
  const items = useAppSelector(state => state.cart.items);

  return (
    <div className={classNames(cls.cartList, {}, [className])} data-testid="cartList">
      {items.length ?
        items.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))
        : <h2 className="title2">в корзине ничего нет  <span>😕</span></h2>}
    </div>
  );
};