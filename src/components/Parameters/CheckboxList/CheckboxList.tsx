import { Checkbox } from "components/UI/Checkbox/Checkbox";
import { classNames } from "utils/classNames/classNames";
import cls from "./CheckboxList.module.scss";

interface CheckboxListProps {
  className?: string;
}

export const CheckboxList = (props: CheckboxListProps) => {
  const { className } = props;
  const manuf: [string, number][] = [['Synergetic', 4], ['BioMio', 2]];

  return (
    <div className={classNames(cls.checkboxList, {}, [className])}>
      {manuf && manuf.map((el, index) =>
        <Checkbox key={el[0]} item={el[0]} count={el[1]} checked={true} />
      )}
    </div>
  );
};