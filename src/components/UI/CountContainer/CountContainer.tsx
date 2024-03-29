import { classNames } from "utils/classNames/classNames";

import cls from "./CountContainer.module.scss";
import { Button } from "../Button/Button";

interface CountContainerProps {
  className?: string;
  value?: number;
  plusHandler: () => void;
  minusHandler: () => void;
}

export const CountContainer = (props: CountContainerProps) => {
  const { className = '', value = 0, plusHandler, minusHandler } = props;
  return (
    <div className={classNames(cls.countContainer, {}, [className])} data-testid="countContainer">
      <Button
        text="-"
        form="minus"
        color="pink-gradient"
        width="auto"
        height="auto"
        onClick={minusHandler}
        disabled={value <= 1}
        data-testid="minus"
      />
      <div className={cls.count}>{value}</div>
      <Button
        text="+"
        form="minus"
        color="pink-gradient"
        width="34px"
        height="auto"
        onClick={plusHandler}
        data-testid="plus" />
    </div>
  );
};
