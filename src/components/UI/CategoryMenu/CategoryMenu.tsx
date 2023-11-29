import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryMenu.module.scss";
import data from '../../../data/data.json';

interface CategoryMenuProps {
  className?: string;
  type: 'top' | 'left';
}

export const CategoryMenu = (props: CategoryMenuProps) => {
  const { className = '', type } = props;
  //const activeIndex = data.categories.findIndex(item => item === 'Уход за ногами');
  const activeIndex = 0;
  const mods = {
    [cls[type]]: true,
  }

  const onChangeCategory = (idx: number): void => {
    //setCategory(categories[idx] ? categories[idx] : 'Все');
  };

  return (
    <ul className={classNames(cls.categoryMenu, mods, [className])}>
      {data.categories.length && data.categories.map((item, index) => (
        <li className={activeIndex === index ? `${cls.item} ${cls.active}` : `${cls.item}`} key={String(item)} onClick={() => onChangeCategory(index)} >{item}</li>
      ))}
    </ul>
  );
};