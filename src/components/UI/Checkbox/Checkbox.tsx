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

export const Checkbox = (props: CheckboxProps) => {
  const { className, item, count, checked, onChange } = props;
  return (
    <label className={classNames(cls.checkbox, {}, [className])} data-testid="checkbox">
      <input className={cls.input} type="checkbox" value={item} name={item}
        checked={checked} onChange={onChange} />{item}
      <span className={cls.count}> ({count})</span>
    </label>
  );
};