import { classNames } from "utils/classNames/classNames";
import cls from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  className?: string;
}

export const BurgerMenu = (props: BurgerMenuProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.burgerMenu, {}, [className])}>
    </div>
  );
};