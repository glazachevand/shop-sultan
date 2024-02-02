import { Link } from "react-router-dom";
import { classNames } from "utils/classNames/classNames";
import cls from "./Menu.module.scss";
import { MenuList } from "types/const/menu";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  className?: string;
  variant: 'footer' | 'header';
  onClose?: Dispatch<SetStateAction<boolean>>;
}

export const Menu = (props: MenuProps) => {
  const { className = '', variant, onClose } = props;
  const menuElem = MenuList.map(item => (
    <li key={item.elem}><Link to={item.path} className={cls.link}>{item.elem}</Link></li>
  ));
  const mods = {
    [cls[variant]]: true,
  }

  return (
    <nav className={classNames(cls.menu, mods, [className])} data-testid="menu">
      <ul className={cls.list} onClick={() => { if (onClose) { onClose(false) } }}>
        {menuElem}
      </ul>
    </nav>
  );
};