import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "utils/classNames/classNames";
import cls from "./Button.module.scss";
import CatalogIcon from 'assets/icons/catalog-square-white.svg';
import DownloadIcon from 'assets/icons/download-white.svg';
import CartIcon from 'assets/icons/cart-white.svg';
import RemoveIcon from 'assets/icons/remove.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  icon?: 'catalog' | 'download' | 'cart' | 'remove' | 'none';
  form?: 'circ' | 'rectangle' | 'oval';
  color?: 'yellow' | 'white' | 'ping' | 'mustard';
  children?: ReactNode | ReactNode[];
}

export const Button = (props: ButtonProps) => {
  const { children, className = '', text = '', icon = 'none', form = 'oval', color = 'yellow', ...otherProps } = props;
  const mods = {
    [cls[form]]: true,
    [cls[color]]: true,
  }

  return (
    <button type="button" className={classNames(cls.button, mods, [className])}  {...otherProps}>
      {text && (
        <div>{text}</div>
      )}
      {icon === 'catalog' && (<img src={CatalogIcon} alt="catalog" />)}
      {icon === 'download' && (<img src={DownloadIcon} alt="catalog" />)}
      {icon === 'cart' && (<img src={CartIcon} alt="catalog" />)}
      {icon === 'remove' && (<img src={RemoveIcon} alt="catalog" />)}
      {children}
    </button >
  );
};