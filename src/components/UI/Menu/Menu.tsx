import { Link } from "react-router-dom";
import { classNames } from "utils/classNames/classNames";
import cls from "./Menu.module.scss";
import { MenuList } from "types/const/menu";

interface MenuProps {
  className?: string;
  type: 'footer' | 'header';
}

export const Menu = (props: MenuProps) => {
  const { className = '', type } = props;
  const menuElem = MenuList.map(item => (
    <li key={item.elem}><Link to={item.path} className={cls.link}>{item.elem}</Link></li>
  ));
  const mods = {
    [cls[type]]: true,
  }

  return (
    <nav className={classNames(cls.menu, mods, [className])}>
      <ul className={cls.list}>
        {menuElem}
      </ul>
    </nav>
  );
};