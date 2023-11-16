import { classNames } from "utils/classNames/classNames";
import cls from "./Search.module.scss";
import SearchBtn from 'assets/img/header/search.png'

interface SearchProps {
  className?: string;
  size?: 'big' | 'small';
}

export const Search = (props: SearchProps) => {
  const { className = '', size = 'big' } = props;
  const mods = {
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.search, mods, [className])}>
      <form action="#" className={cls.form}>
        <input type="search" className={cls.input} placeholder="Поиск..." />
        <img src={SearchBtn} className={cls.btn} alt="search" />
      </form>
    </div>
  );
};