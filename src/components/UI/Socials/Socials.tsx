import { classNames } from "utils/classNames/classNames";
import cls from "./Socials.module.scss";
import Whatsapp from 'assets/icons/whatsapp.svg';
import Telegram from 'assets/icons/telegram.svg';
import { useTranslation } from 'react-i18next';

interface SocialsProps {
  className?: string;
}

export const Socials = (props: SocialsProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.socials, {}, [className])}>
      <h4>{t('footer.messangers_title')} :</h4>
      <div className={cls.container}>
        <a href="#!" className={classNames(cls.whatsapp, {}, [cls.item])}  >
          <img src={Whatsapp} alt="whatsapp" />
        </a>
        <a href="#!" className={classNames(cls.telegram, {}, [cls.item])}>
          <img src={Telegram} alt="telegram" />
        </a>
      </div>
    </div>
  );
};