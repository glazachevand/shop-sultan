import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryMenu.module.scss";
import data from '../../../data/data.json';

interface CategoryMenuProps {
  className?: string;
}

export const CategoryMenu = (props: CategoryMenuProps) => {
  const { className = '' } = props;
  const activeIndex = data.categories.findIndex(item => item === 'Уход за ногами');

  const onChangeCategory = (idx: number): void => {
    //setCategory(categories[idx] ? categories[idx] : 'Все');
  };

  return (
    <div className={classNames(cls.categoryMenu, {}, [className])}>
      {data.categories.length && data.categories.map((item, index) => (
        <li className={activeIndex === index ? `${cls.item} active` : `${cls.item}`} key={String(item)} onClick={() => onChangeCategory(index)} >{item}</li>
      ))}
    </div>
  );
};