import { classNames } from "utils/classNames/classNames";
import { Button } from "../Button/Button";
import cls from "./CountContainer.module.scss";

interface CountContainerProps {
  className?: string;
  id?: number;
}

export const CountContainer = (props: CountContainerProps) => {
  const { className = '', id = 0 } = props;
  return (
    <div className={classNames(cls.countContainer, {}, [className])}>
      <Button text="+" form="minus" color="pink-gradient" width="34px" height="auto" />
      <div className={cls.count}>{id}</div>
      <Button text="-" form="minus" color="pink-gradient" width="auto" height="auto" />
    </div>
  );
};
