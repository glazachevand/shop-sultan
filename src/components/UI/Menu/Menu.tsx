import { Dispatch, SetStateAction } from "react";

import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { MenuList } from "types/const/menu";
import { classNames } from "utils/classNames/classNames";

import cls from "./Menu.module.scss";

interface MenuProps {
  className?: string;
  variant: 'footer' | 'header';
  onClose?: Dispatch<SetStateAction<boolean>>;
}

export const Menu = (props: MenuProps) => {
  const { className = '', variant, onClose } = props;
  const { i18n } = useTranslation();
  const menuElem = MenuList.map(item => (
    <li key={item.elem}>
      <Link to={item.path} className={cls.link}>
        {i18n.language == 'ru' ? item.elem : item.enElem}
      </Link>
    </li>
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