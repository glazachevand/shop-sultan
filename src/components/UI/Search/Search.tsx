import { classNames } from "utils/classNames/classNames";
import cls from "./Search.module.scss";
import SearchBtn from 'assets/img/header/search.png';
import RemoveBtn from 'assets/icons/close.svg';
import { Dispatch, SetStateAction } from "react";

interface SearchProps {
  className?: string;
  type?: 'header' | 'param';
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Search = (props: SearchProps) => {
  const { className = '', type = 'header', value, setValue } = props;
  const mods = {
    [cls[type]]: true,
  };

  return (
    <div className={classNames(cls.search, mods, [className])} data-testid="search">
      <div className={cls.form}>
        <input
          type="search"
          className={cls.input}
          placeholder="Поиск..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value ?
          <img src={RemoveBtn} alt="clear" className={cls.btn} onClick={() => setValue('')} />
          : <img src={SearchBtn} alt="search" className={cls.btn} />
        }
      </div>
    </div>
  );
};