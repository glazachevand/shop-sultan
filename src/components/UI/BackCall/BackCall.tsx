import { classNames } from "utils/classNames/classNames";
import cls from "./BackCall.module.scss";
import Call from 'assets/img/header/backCall.png';
import { useTranslation } from 'react-i18next';

interface BackCallProps {
  className?: string;
  isIcon: boolean;
  isText: boolean;
  color: 'dark' | 'white';
  aligh?: 'right' | 'left';
}

export const BackCall = (props: BackCallProps) => {
  const { className = '', color, isIcon, isText, aligh = 'left' } = props;
  const { t } = useTranslation();
  const mods = {
    [cls[color]]: true,
    [cls[aligh]]: true,
  }

  return (
    <div className={classNames(cls.backCall, mods, [className])} data-testid="backcall">
      {isText &&
        (<>
          <a href="tel:+77774900091" className={cls.number}>+7 (777) 490-00-91</a>
          <p className={cls.hour}>{t('header.working_hours')}: 9:00-20:00</p>
        </>)}
      {isIcon && <a href="#!"><img src={Call} alt="back call" /></a>}
      <a href="#!" className={cls.call}>{t('header.back_call')}</a>
    </div>
  );
};