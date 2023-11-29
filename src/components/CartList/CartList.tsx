import { CartItemType } from "types/cart";
import { classNames } from "utils/classNames/classNames";
import { CartItem } from "./CartItem/CartItem";
import cls from "./CartList.module.scss";

interface CartListProps {
  className?: string;
}

const items = [
  {
    id: 1,
    title: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
    url: 'product1.webp',
    brand: 'BioMio',
    description: 'Экологичное гипоаллергенное туалетное мыло',
    typesize: 'вес',
    size: '1020 г',
    price: 100,
    count: 4,
  },
  {
    id: 2,
    title: 'Шампунь beauty-full volume плотность и объем',
    url: 'product2.webp',
    brand: 'Tresemme',
    description: 'Головокружительный объем от самых корней? Попробуй и убедись сама. ',
    typesize: 'объем',
    size: '650 мл',
    price: 200,
    count: 3,
  },
];


export const CartList = (props: CartListProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.cartList, {}, [className])}>
      {items.length ?
        items.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))
        : <h2 className="title2">в корзине ничего нет  <span>😕</span></h2>}
    </div>
  );
};