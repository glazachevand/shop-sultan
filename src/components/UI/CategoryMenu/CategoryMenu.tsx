import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryMenu.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setFilteredCategories } from "store/reducers/filterSlice";

interface CategoryMenuProps {
  className?: string;
  type: 'top' | 'left';
}

export const CategoryMenu = (props: CategoryMenuProps) => {
  const { className = '', type } = props;
  const mods = {
    [cls[type]]: true,
  }

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.categories);
  const activeCategories = useAppSelector((state) => state.filters.categories);

  const onChangeCategory = (item: string): void => {
    dispatch(setFilteredCategories(item));
  };

  return (

    <ul className={classNames(cls.categoryMenu, mods, [className])}>
      {categories?.map((item) => (
        <li
          className={activeCategories.includes(item) ? `${cls.item} ${cls.active}` : `${cls.item}`}
          key={String(item)}
          onClick={() => onChangeCategory(item)} >
          {item}</li>
      ))}
    </ul>
  );
};