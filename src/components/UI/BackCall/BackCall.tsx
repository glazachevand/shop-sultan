import { classNames } from "utils/classNames/classNames";
import cls from "./BackCall.module.scss";
import Call from 'assets/img/header/backCall.png'

interface BackCallProps {
  className?: string;
  isIcon: boolean;
  isText: boolean;
  color: 'dark' | 'white';
}

export const BackCall = (props: BackCallProps) => {
  const { className = '', color, isIcon, isText } = props;
  const mods = {
    [cls[color]]: true,
  }

  return (
    <div className={classNames(cls.backCall, mods, [className])}>
      {isText &&
        (<>
          <a href="tel:+77774900091" className={cls.number}>+7 (777) 490-00-91</a>
          <p className={cls.hour}>время работы: 9:00-20:00</p>
        </>)}
      {isIcon && <a href="#!"><img src={Call} alt="back call" /></a>}
      <a href="#!" className={cls.call}>Заказать звонок</a>
    </div>
  );
};