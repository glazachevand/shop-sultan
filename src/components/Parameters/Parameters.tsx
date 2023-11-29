import { Button } from "components/UI/Button/Button";
import { classNames } from "utils/classNames/classNames";
import cls from "./Parameters.module.scss";
import { useMediaQuery } from 'react-responsive';
import { useState } from "react";
import { Search } from "components/UI/Search/Search";
import { CheckboxList } from "components/UI/CheckboxList/CheckboxList";
import Arrow from "assets/icons/triangle-black.svg";

interface ParametersProps {
  className?: string;
}

export const Parameters = (props: ParametersProps) => {
  const { className } = props;
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const priceMin = 0;
  const priceMax = 10000;
  const [showParam, setParamShow] = useState(true);
  const [showAll, setAllShow] = useState(false);
  const [min, setMin] = useState(priceMin);
  const [max, setMax] = useState(priceMax);

  const onClickShowParam = () => {
    setParamShow(prev => !prev);
  }

  return (
    <div className={classNames(cls.parameters, {}, [className])}>
      <div className={cls.titleRow}>
        <h2 className={cls.title}>ПОДБОР ПО ПАРАМЕТРАМ</h2>
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
              <div className={cls.price}>Цена ₽</div>
              <div className={cls.inputs}>
                <input type="text" name="priceRangeMin" value={min} onChange={(e) => setMin(Number(e.target.value))} className={cls.input} placeholder="10" />
                -
                <input type="text" name="priceRangeMax" value={max} onChange={(e) => setMax(Number(e.target.value))} className={cls.input} placeholder="10000" />
              </div>
            </div>
            <div className={cls.manufacturer}>
              <h3 className={cls.manufacturerTitle}>Производитель</h3>
              <Search size="small" />
              <CheckboxList show={showAll} />
              <div className={`${cls.showAll} ${showAll ? cls.show : ''}`} onClick={() => setAllShow(prev => !prev)}>
                <div>Показать все</div>
                <img className={cls.arrow} src={Arrow} alt="" />
              </div>
            </div>
            <div className={cls.actions}>
              {isMobile ?
                <Button text="Показать" width="216px" height="59px" />
                : <Button text="Показать" width="169px" height="59px" />
              }
              <Button icon="remove" form="circ" width="59px" height="59px" />
            </div>
          </div>
        </form>}
    </div>
  );
};