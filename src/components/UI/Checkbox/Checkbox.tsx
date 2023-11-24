import React from "react";
import { classNames } from "utils/classNames/classNames";
import cls from "./Checkbox.module.scss";

interface CheckboxProps {
  className?: string;
  item: string;
  count?: number;
  checked: boolean;
  onChange?: () => void;
}

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

};

export const Checkbox = (props: CheckboxProps) => {
  const { className, item, count, checked, onChange } = props;
  return (
    <label className={classNames(cls.checkbox, {}, [className])} data-testid="checkbox">
      {item}
      <span className={cls.count}> ({count})</span>
      <input className={cls.input} type="checkbox" value={item} name={item} checked={checked} onChange={onChangeHandler} />
      <span className={`${cls.checkmark} ${checked ? cls.active : ''}`}></span>
    </label>
  );
};