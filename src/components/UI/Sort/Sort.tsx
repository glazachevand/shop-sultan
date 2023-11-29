import { classNames } from "utils/classNames/classNames";
import cls from "./Sort.module.scss";
import Arrow from "assets/icons/triangle-black.svg";

interface SortProps {
  className?: string;
}

export const Sort = (props: SortProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.sort, {}, [className])}>
      <div className={cls.label} >Сортировка:</div>
      <div className={cls.choice}>Название</div>
      <img className={cls.arrow} src={Arrow} alt="" />
    </div>
  );
};