import { classNames } from "utils/classNames/classNames";
import cls from "./Contact.module.scss";
import IconLocation from "assets/icons/location.svg";
import IconEmail from "assets/icons/mail.svg";
import IconSales from "assets/icons/phone.svg";

interface ContactProps {
  className?: string;
  type: 'location' | 'email' | 'sales';
  color: 'dark' | 'white';
  isIcon?: boolean;
}

export const Contact = (props: ContactProps) => {
  const { className = '', type, color, isIcon = false } = props;
  const mods = {
    [cls[color]]: true,
  }

  return (
    <div className={classNames(cls.contact, mods, [className])}>
      {type === 'location' &&
        (<a href="#!">
          {isIcon && (<img src={IconLocation} alt="location" />)}
          <div>
            г. Кокчетав, ул. Ж. Ташенова 129Б
            <p>(Рынок Восточный)</p>
          </div>
        </a>)}
      {type === 'email' &&
        (<a href="mailto:opt.sultan@mail.ru">
          {isIcon && (<img src={IconEmail} alt="email" />)}
          <div>
            opt.sultan@mail.ru
            <p>На связи в любое время</p>
          </div>
        </a>)}
      {type === 'sales' &&
        (<a href="tel:+77774900091">
          {isIcon && (<img src={IconSales} alt="sales department" />)}
          <div>
            Отдел продаж
            <p>+7 (777) 490-00-91</p>
          </div>
          <p>время работы: 9:00-20:00</p>
        </a>)}
    </div>
  );
};
