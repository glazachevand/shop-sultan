/* eslint-disable i18next/no-literal-string */
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  }

  return (
    <div className={cls.langSwitcher}>
      <button
        className={i18n.language === 'ru' ? cls.active : ''}
        type="button"
        onClick={() => changeLanguage('ru')}
        title={t('header.ru')}
      >
        ru
      </button>
      &nbsp;|&nbsp;
      <button
        className={i18n.language === 'en' ? cls.active : ''}
        type="button"
        onClick={() => changeLanguage('en')}
        title={t('header.en')}
      >
        en
      </button>
    </div>
  );
};