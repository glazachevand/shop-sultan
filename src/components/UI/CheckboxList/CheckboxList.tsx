import { Checkbox } from "components/UI/Checkbox/Checkbox";
import { classNames } from "utils/classNames/classNames";
import cls from "./CheckboxList.module.scss";
import { manufactureCount } from "types/const/manufacture";

interface CheckboxListProps {
  className?: string;
  show: boolean;
}

export const CheckboxList = (props: CheckboxListProps) => {
  const { className, show } = props;
  const manuf: [string, number][] = [['Synergetic', 4], ['BioMio', 2], ['Sesderma ', 3], ['Tresemme ', 1]];
  const manufShow: [string, number][] = show ? [...manuf] : manuf.slice(0, manufactureCount)

  return (
    <div className={classNames(cls.checkboxList, {}, [className])}>
      {manufShow && manufShow.map((el, index) =>
        <Checkbox key={el[0]} item={el[0]} count={el[1]} checked={true} />
      )}
    </div>
  );
};