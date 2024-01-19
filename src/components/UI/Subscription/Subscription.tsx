import { classNames } from "utils/classNames/classNames";
import cls from "./Subscription.module.scss";
import SubIcon from 'assets/icons/subscription.svg';

interface SubscriptionProps {
  className?: string;
}

export const Subscription = (props: SubscriptionProps) => {
  const { className } = props;
  return (
    <form action="#" className={classNames(cls.subscription, {}, [className])} data-testid="subscription">
      <label htmlFor="subscription" className={cls.label}>
        Подпишись на скидки и акции
      </label>
      <input id="subscription" type="text" className={cls.input} placeholder="Введите ваш E-mail" />
      <img src={SubIcon} className={cls.btn} alt="subscription" />
    </form>
  );
};