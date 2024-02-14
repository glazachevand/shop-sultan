import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { CategoryGlobalMenuList } from "types/const/categoryGlobal";
import { classNames } from "utils/classNames/classNames";

import cls from "./CategoryGlobalMenu.module.scss";

interface CategoryGlobalMenuProps {
  className?: string;
  variant: 'footer';
}

export const CategoryGlobalMenu = (props: CategoryGlobalMenuProps) => {
  const { className = '', variant } = props;
  const { i18n } = useTranslation();
  const CategoryGlobalMenuElem = CategoryGlobalMenuList.map(item => (
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
    <nav className={classNames(cls.CategoryGlobalMenu, mods, [className])} data-testid="categoryGlobalMenu">
      <ul className={cls.list}>
        {CategoryGlobalMenuElem}
      </ul>
    </nav>
  );
};