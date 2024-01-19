import { Checkbox } from "components/UI/Checkbox/Checkbox";
import { classNames } from "utils/classNames/classNames";
import cls from "./CheckboxList.module.scss";
import { ChangeEventHandler } from "react";

interface CheckboxListProps {
  className?: string;
  manufShow: [string, number][];
  checkedManuf: string[];
  change: ChangeEventHandler<HTMLInputElement>;
}

export const CheckboxList = (props: CheckboxListProps) => {
  const { className, manufShow, checkedManuf, change } = props;

  return (
    <div className={classNames(cls.checkboxList, {}, [className])} data-testid="checkboxList">
      {manufShow && manufShow.map((elem) =>
        <Checkbox
          key={elem[0]}
          item={elem[0]}
          count={elem[1]}
          checked={checkedManuf.includes(elem[0])}
          change={change}
        />
      )}
    </div>
  );
};