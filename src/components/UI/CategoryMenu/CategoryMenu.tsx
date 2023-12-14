import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryMenu.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setFilteredCategories } from "store/reducers/filterSlice";
import { CategoryItem } from "./CategoryItem/CategoryItem";

interface CategoryMenuProps {
  className?: string;
  type: 'top' | 'left' | 'admin';
}

export const CategoryMenu = (props: CategoryMenuProps) => {
  const { className = '', type } = props;

  const mods = {
    [cls[type]]: true,
  }

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.categories);
  const activeCategories = useAppSelector((state) => state.filters.typecare);

  const onChangeCategory = (typecare: string): void => {
    dispatch(setFilteredCategories(typecare));
  };

  return (
    <ul className={classNames(cls.categoryMenu, mods, [className])}>
      {categories?.map((item) => type === 'admin' ?
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
};