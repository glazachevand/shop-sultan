import { Link } from "react-router-dom";
import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryGlobalMenu.module.scss";
import { CategoryGlobalMenuList } from "types/const/categoryGlobal";

interface CategoryGlobalMenuProps {
  className?: string;
  variant: 'footer';
}

export const CategoryGlobalMenu = (props: CategoryGlobalMenuProps) => {
  const { className = '', variant } = props;
  const CategoryGlobalMenuElem = CategoryGlobalMenuList.map(item => (
    <li key={item.elem}><Link to={item.path} className={cls.link}>{item.elem}</Link></li>
  ));
  const mods = {
    [cls[variant]]: true,
  }

  return (
    <nav className={classNames(cls.CategoryGlobalMenu, mods, [className])} data-testid="categoryGlobalMenu">
      <ul className={cls.list}>
        {CategoryGlobalMenuElem}
      </ul>
    </nav>
  );
};