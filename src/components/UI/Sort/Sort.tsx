import { classNames } from "utils/classNames/classNames";
import cls from "./Sort.module.scss";
import Arrow from "assets/icons/triangle-black.svg";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { SortList } from "types/const/sort";
import { setSort } from "store/reducers/filterSlice";
import { SortType } from "types/filters";

interface SortProps {
  className?: string;
}

export const Sort = (props: SortProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const sort = useAppSelector(state => state.filters.sort);
  const [choice, setChoice] = useState('');

  useEffect(() => {
    const find = SortList.find(item => item.value === sort.join('_'));
    if (find) {
      setChoice(find.title);
    }
  }, [sort]);

  const onChangeSort = (elem: SortType) => {
    setOpen(false);
    dispatch(setSort(elem));
  }

  return (
    <div className={classNames(cls.sort, {}, [className])}>
      <div
        className={`${cls.titleRow} ${open ? cls.open : ''}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <div className={cls.label} >Сортировка:</div>
        <div className={cls.choice}>{choice}</div>
        <img className={cls.arrow} src={Arrow} alt="" />
      </div>
      <div className={`${cls.popup} ${open ? cls.open : ''}`}>
        {choice && SortList.map(item => (
          <div className={cls.popupItem} key={item.value}>
            <input
              type="radio"
              name="sort"
              id={item.value}
              value={item.value}
              defaultChecked={item.title === choice}
              onChange={() => onChangeSort(item.sortProperties)}
            />
            <label htmlFor={item.value}>{item.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};