import { classNames } from "utils/classNames/classNames";
import { Button } from "../Button/Button";
import cls from "./CountContainer.module.scss";

interface CountContainerProps {
  className?: string;
  value?: number;
  plusHandler: () => void;
  minusHandler: () => void;
}

export const CountContainer = (props: CountContainerProps) => {
  const { className = '', value = 0, plusHandler, minusHandler } = props;
  return (
    <div className={classNames(cls.countContainer, {}, [className])}>
      <Button
        text="-"
        form="minus"
        color="pink-gradient"
        width="auto"
        height="auto"
        onClick={minusHandler}
        disabled={value <= 1}
      />
      <div className={cls.count}>{value}</div>
      <Button
        text="+"
        form="minus"
        color="pink-gradient"
        width="34px"
        height="auto"
        onClick={plusHandler}
      />
    </div>
  );
};
