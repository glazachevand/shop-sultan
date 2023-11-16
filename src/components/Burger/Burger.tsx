import { useState } from "react";
import { classNames } from "utils/classNames/classNames";
import cls from "./Burger.module.scss";

interface BurgerProps {
  className?: string;
}

export const Burger = (props: BurgerProps) => {
  const { className } = props;
  const [open, setOpen] = useState(false);

  const onBurgerClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={classNames(cls.burger, {}, [className])}>
      <div className={cls.button} onClick={onBurgerClick}>
        <div className={!open ? cls.navIcon : cls.navIconActive}>
          <span></span>
        </div>
      </div>
      {open && (<div>BurgerMenu</div>)}
    </div>
  )
}
