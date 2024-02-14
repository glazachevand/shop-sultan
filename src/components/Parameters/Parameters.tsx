import { ChangeEvent, useEffect, useRef, useState } from "react";

import Arrow from "assets/icons/triangle-black.svg";
import { Button } from "components/UI/Button/Button";
import { CheckboxList } from "components/UI/CheckboxList/CheckboxList";
import { Search } from "components/UI/Search/Search";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { clearParameters, setParameters } from "store/reducers/filterSlice";
import { manufactureCount } from "types/const/manufacture";
import { classNames } from "utils/classNames/classNames";

import cls from "./Parameters.module.scss";
interface ParametersProps {
  className?: string;
}

export const Parameters = (props: ParametersProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const dispatch = useAppDispatch();
  const { manufacturers: filteredManuf } = useAppSelector((state) => state.filters);
  const { minPrice, maxPrice, manufactures: manuf } = useAppSelector((state) => state.products);
  // выбранные производители
  const [checkedManuf, setCheckedManuf] = useState<string[]>(filteredManuf);
  const [showManuf, setShowManuf] = useState<[string, number][]>(manuf);
  // поиск по производителям
  const [searchManuf, setSearchManuf] = useState('');
  // был ли сделан поиск
  const isSearch = useRef(false);
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  // показать параметры на мобильных экранах
  const [showParam, setParamShow] = useState(true);
  // показать всех производителей при клике на кнопку Показать все
  const [showAll, setShowAll] = useState(false);

  const onClickShowParam = () => {
    setParamShow(prev => !prev);
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const find = checkedManuf.find(item => item === e.target.value);
    if (find) {
      setCheckedManuf(state => state.filter(item => item !== find))
    } else {
      setCheckedManuf(state => { return [...state, e.target.value] })
    }
  };

  const onSubmitHandler = () => {
    dispatch(setParameters({ priceMin: min, priceMax: max, manufacturers: checkedManuf }));
  }

  const onClickClear = () => {
    setCheckedManuf([]);
    dispatch(clearParameters());
    setSearchManuf('');
  }

  useEffect(() => {
    setMin(minPrice);
    setMax(maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (searchManuf) {
      setShowManuf([...manuf].filter(item => item[0].toLowerCase().includes(searchManuf.toLowerCase())));
      isSearch.current = true;
    } else if (isSearch.current) {
      setShowAll(true);
      setShowManuf(manuf);
    }
  }, [searchManuf]);

  useEffect(() => {
    if (!showAll) {
      setShowManuf(manuf.slice(0, manufactureCount));
    } else {
      setShowManuf(manuf);
    }
  }, [showAll, manuf]);

  return (
    <div className={classNames(cls.parameters, {}, [className])}>
      <div className={cls.titleRow}>
        <h2 className={cls.title}>{t('parameters.title')}</h2>
        {isMobile && (
          showParam ?
            <Button icon="up" form="circ" color="mustard" width="32px" height="32px" onClick={onClickShowParam} />
            : <Button icon="down" form="circ" color="mustard" width="32px" height="32px" onClick={onClickShowParam} />
        )}
      </div>
      {showParam &&
        <form action="#" method="GET" name="parametersForm">
          <div className={cls.content}>
            <div>
              <div className={cls.price}>{t('parameters.price')} ₽</div>
              <div className={cls.inputs}>
                <input type="number" name="priceRangeMin" value={min} onChange={(e) => setMin(Number(e.target.value))} className={cls.input} placeholder="10" />
                -
                <input type="number" name="priceRangeMax" value={max} onChange={(e) => setMax(Number(e.target.value))} className={cls.input} placeholder="10000" />
              </div>
            </div>
            <div className={cls.manufacturer}>
              <h3 className={cls.manufacturerTitle}>{t('parameters.manufacturer')}</h3>
              <Search variant="param" value={searchManuf} setValue={setSearchManuf} />
              <CheckboxList manufShow={showManuf} change={onChangeHandler} checkedManuf={checkedManuf} />
              {!searchManuf && manuf.length > manufactureCount && (
                <div className={`${cls.showAll} ${showAll ? cls.show : ''}`} onClick={() => setShowAll(prev => !prev)}>
                  <div>{showAll ? t('parameters.hide') : t('parameters.show_all')}</div>
                  <img className={cls.arrow} src={Arrow} alt="" />
                </div>
              )}
            </div>
            <div className={cls.actions}>
              {isMobile ?
                <Button text={t('buttons.show')} width="216px" height="59px" onClick={onSubmitHandler} />
                : <Button text={t('buttons.show')} width="169px" height="59px" onClick={onSubmitHandler} />
              }
              <Button icon="remove" form="circ" width="59px" height="59px" onClick={onClickClear} title={t('parameters.clear')} />
            </div>
          </div>
        </form>}
    </div>
  );
};