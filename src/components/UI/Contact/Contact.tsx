import { classNames } from "utils/classNames/classNames";
import cls from "./Contact.module.scss";
import IconLocation from "assets/icons/location.svg";
import IconEmail from "assets/icons/mail.svg";
import IconSales from "assets/icons/phone.svg";
import { useTranslation } from 'react-i18next';

interface ContactProps {
  className?: string;
  variant: 'location' | 'email' | 'sales';
  color: 'dark' | 'white';
  isIcon?: boolean;
}

export const Contact = (props: ContactProps) => {
  const { t } = useTranslation();

  const { className = '', variant, color, isIcon = false } = props;
  const mods = {
    [cls[color]]: true,
  }

  return (
    <div className={classNames(cls.contact, mods, [className])} data-testid="contact">
      {variant === 'location' &&
        (<a href="#!">
          {isIcon && (<img src={IconLocation} alt="location" />)}
          <div>
            г. Кокчетав, ул. Ж. Ташенова 129Б
            <p>({t('market')})</p>
          </div>
        </a>)}
      {variant === 'email' &&
        (<a href="mailto:opt.sultan@mail.ru">
          {isIcon && (<img src={IconEmail} alt="email" />)}
          <div>
            opt.sultan@mail.ru
            <p>На связи в любое время</p>
          </div>
        </a>)}
      {variant === 'sales' &&
        (<a href="tel:+77774900091">
          {isIcon && (<img src={IconSales} alt="sales department" />)}
          <div>
            <div>
              Отдел продаж
              <p>+7 (777) 490-00-91</p>
            </div>
            <p className={cls.hour}>время работы: 9:00-20:00</p>
          </div>
        </a>)}
    </div>
  );
};
