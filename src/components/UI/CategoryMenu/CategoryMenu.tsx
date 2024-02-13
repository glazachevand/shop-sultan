import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryMenu.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setFilteredCategories } from "store/reducers/filterSlice";
import { CategoryItem } from "./CategoryItem/CategoryItem";
import React from "react";

interface CategoryMenuProps {
  className?: string;
  variant: 'top' | 'left' | 'admin';
}

export const CategoryMenu = React.memo((props: CategoryMenuProps) => {
  const { className = '', variant } = props;

  const mods = {
    [cls[variant]]: true,
  }

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.categories);
  const activeCategories = useAppSelector((state) => state.filters.typecare);

  const onChangeCategory = (typecare: string): void => {
    dispatch(setFilteredCategories(typecare));
  };

  return (
    <ul className={classNames(cls.categoryMenu, mods, [className])} data-testid="categoryMenu">
      {categories?.map((item) => variant === 'admin' ?
        <CategoryItem key={item.id} category={item} />
        :
        <li
          className={activeCategories.includes(item.title) ? `${cls.item} ${cls.active}` : `${cls.item}`}
          key={item.id}
          onClick={() => onChangeCategory(item.title)} >
          {item.title}
        </li>
      )}
    </ul>
  )
});