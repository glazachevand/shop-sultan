import { classNames } from "utils/classNames/classNames";
import cls from "./Sort.module.scss";
import Arrow from "assets/icons/triangle-black.svg";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { SortList } from "types/const/sort";
import { setSort } from "store/reducers/filterSlice";
import { SortType } from "types/filters";
import { useTranslation } from 'react-i18next';

interface SortProps {
  className?: string;
}

export const Sort = React.memo((props: SortProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const sort = useAppSelector(state => state.filters.sort);
  const [choice, setChoice] = useState('');

  useEffect(() => {
    const find = SortList.find(item => item.value === sort.join('_'));
    if (find) {
      setChoice(i18n.language == 'ru' ? find.title : find.enTitle);
    }
  }, [sort, i18n.language]);

  const onChangeSort = (elem: SortType) => {
    setOpen(false);
    dispatch(setSort(elem));
  }

  return (
    <div className={classNames(cls.sort, {}, [className])} data-testid="sort">
      <div
        className={`${cls.titleRow} ${open ? cls.open : ''}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <div className={cls.label} >{t('catalog.sort_title')}:</div>
        <div className={cls.choice}>{choice}</div>
        <img className={cls.arrow} src={Arrow} alt="" />
      </div>
      <div className={`${cls.popup} ${open ? cls.open : ''}`} data-testid="popup">
        {choice && SortList.map(item => (
          <div className={cls.popupItem} key={item.value}>
            <input
              type="radio"
              name="sort"
              id={item.value}
              value={item.value}
              defaultChecked={i18n.language == 'ru' ? item.title === choice : item.enTitle === choice}
              onChange={() => onChangeSort(item.sortProperties)}
            />
            <label htmlFor={item.value}>{i18n.language == 'ru' ? item.title : item.enTitle}</label>
          </div>
        ))}
      </div>
    </div>
  );
});