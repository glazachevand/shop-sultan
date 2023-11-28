import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "utils/classNames/classNames";
import cls from "./Button.module.scss";
import CatalogIcon from 'assets/icons/catalog-square-white.svg';
import DownloadIcon from 'assets/icons/download-white.svg';
import DownloadBlackIcon from 'assets/icons/download-black.svg';
import CartIcon from 'assets/icons/cart-white.svg';
import RemoveIcon from 'assets/icons/remove.svg';
import BackIcon from 'assets/icons/back.svg';
import SubscrIcon from 'assets/icons/subscr.svg';
import DownIcon from 'assets/icons/arrow-black-down.svg';
import UpIcon from 'assets/icons/arrow-black-up.svg';
import OrderIcon from 'assets/icons/order-btn.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  icon?: 'catalog' | 'download' | 'cart' | 'remove' | 'back' | 'subscr' | 'down' | 'up' | 'orderOK' | 'none';
  form?: 'circ' | 'rectangle' | 'rectangle-green' | 'oval' | 'minus' | 'plus' | 'price' | 'pagination' | 'cartSmall';
  color?: 'yellow' | 'white' | 'ping' | 'mustard' | 'green' | 'pink-gradient';
  width?: string;
  height?: string;
  children?: ReactNode | ReactNode[];
}

export const Button = (props: ButtonProps) => {
  const { children, className = '', text = '', icon = 'none', form = 'oval',
    color = 'yellow', width = '290px', height = '70px', ...otherProps } = props;
  const mods = {
    [cls[form]]: true,
    [cls[color]]: true,
  }

  return (
    <button type="button" className={classNames(cls.button, mods, [className])} style={{ width: `${width}`, height: `${height}` }}  {...otherProps}>
      {text && (
        <div>{text}</div>
      )}
      {icon === 'catalog' && (<img src={CatalogIcon} alt="catalog" />)}
      {icon === 'download' && color === 'yellow' && (<img src={DownloadIcon} alt="price list" />)}
      {icon === 'download' && color === 'white' && (<img src={DownloadBlackIcon} alt="price list" />)}
      {icon === 'cart' && (<img src={CartIcon} alt="cart" />)}
      {icon === 'remove' && (<img src={RemoveIcon} alt="remove" />)}
      {icon === 'back' && (<img src={BackIcon} alt="back" />)}
      {icon === 'subscr' && (<img src={SubscrIcon} alt="subscription" />)}
      {icon === 'down' && (<img src={DownIcon} alt="" />)}
      {icon === 'up' && (<img src={UpIcon} alt="" />)}
      {icon === 'orderOK' && (<img src={OrderIcon} alt="OK" />)}
      {children}
    </button >
  );
};