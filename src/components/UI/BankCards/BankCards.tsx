import Mastercard from 'assets/img/footer/mastercard.png';
import Visa from 'assets/img/footer/visa.png';
import { classNames } from "utils/classNames/classNames";

import cls from "./BankCards.module.scss";

interface BankCardsProps {
  className?: string;
}

export const BankCards = (props: BankCardsProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.bankCards, {}, [className])}>
      <div className={cls.card}><img src={Visa} alt="visa" /></div>
      <div className={cls.card}><img src={Mastercard} alt="mastercard" /></div>
    </div>
  );
};