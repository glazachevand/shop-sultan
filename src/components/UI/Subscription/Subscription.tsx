import SubIcon from 'assets/icons/subscription.svg';
import { useTranslation } from 'react-i18next';
import { classNames } from "utils/classNames/classNames";

import cls from "./Subscription.module.scss";

interface SubscriptionProps {
  className?: string;
}

export const Subscription = (props: SubscriptionProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <form action="#" className={classNames(cls.subscription, {}, [className])} data-testid="subscription">
      <label htmlFor="subscription" className={cls.label}>
        {t('subscr.subscr_title')}
      </label>
      <input id="subscription" type="text" className={cls.input} placeholder={t('subscr.placeholder')} />
      <img src={SubIcon} className={cls.btn} alt="subscription" />
    </form>
  );
};