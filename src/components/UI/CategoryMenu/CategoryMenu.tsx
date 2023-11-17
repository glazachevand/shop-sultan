import { Link } from "react-router-dom";
import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryMenu.module.scss";
import { CategoryMenuList } from "types/const/categoryGlobal";

interface CategoryMenuProps {
  className?: string;
  type: 'footer';
}

export const CategoryMenu = (props: CategoryMenuProps) => {
  const { className = '', type } = props;
  const categoryMenuElem = CategoryMenuList.map(item => (
    <li key={item.elem}><Link to={item.path} className={cls.link}>{item.elem}</Link></li>
  ));
  const mods = {
    [cls[type]]: true,
  }

  return (
    <nav className={classNames(cls.categoryMenu, mods, [className])}>
      <ul className={cls.list}>
        {categoryMenuElem}
      </ul>
    </nav>
  );
};