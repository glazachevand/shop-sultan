import { Link } from "react-router-dom";
import { ICartItem } from "types/cart";
import cls from "./CartItem.module.scss";
import weightImage from "assets/icons/box.svg";
import volumeImage from "assets/icons/bottle.svg";
import { CountContainer } from "components/UI/CountContainer/CountContainer";
import { Button } from "components/UI/Button/Button";
import { useAppDispatch } from "hooks/redux";
import { addProductToCart, minusProductInCart, removeProductInCart } from "store/reducers/cartSlice";

interface CartItemProps {
  cartItem: ICartItem;
}

export const CartItem = (props: CartItemProps) => {
  const { cartItem } = props;
  const imgSrc = require(`../../../assets/img/products/${cartItem.url}`);
  const dispatch = useAppDispatch();

  return (
    <div className={cls.cartItem} data-testId="cartItem">
      <div className={cls.product}>
        <Link to={`/product/${cartItem.id}`} className={cls.productImg} >
          <img src={imgSrc} alt="product" />
        </Link >
        <div className={cls.content}>
          <div className="product__size">
            <img src={cartItem.typesize === 'вес' ? weightImage : volumeImage} alt="product" />
            {cartItem.size}
          </div>
          <Link to={`/product/${cartItem.id}`} className={cls.productTitle}><h2><span>{cartItem.brand}</span> {cartItem.title}</h2></Link >
          <p className={cls.description}>{cartItem.description}</p>
        </div>
      </div>
      <div className={cls.actions}>
        <div className={cls.countLine}></div>
        <CountContainer
          value={cartItem.count}
          plusHandler={() => { dispatch(addProductToCart(cartItem)) }}
          minusHandler={() => { dispatch(minusProductInCart(cartItem)) }} />
        <div className={cls.countLine}></div>
        <div className={cls.priceItem} >{cartItem.price * cartItem.count} ₽</div>
        <div className={cls.countLine}></div>
        <Button
          className={cls.removeBtn}
          icon="remove"
          form="circ"
          width="59px"
          height="59px"
          onClick={() => { dispatch(removeProductInCart(cartItem)) }}
        />
      </div>
    </div>
  );
};