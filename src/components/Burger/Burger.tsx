import { useState, useCallback } from "react";
import { Modal } from "components/UI/Modal/Modal";
import cls from "./Burger.module.scss";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

export const Burger = () => {
  const [open, setOpen] = useState(false);

  const onBurgerClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={cls.burger} data-testid="burger">
      <div className={cls.button} onClick={onBurgerClick} data-testid="burgerButton">
        <div className={!open ? cls.navIcon : cls.navIconActive} data-testid="burgerBtn">
          <span></span>
        </div>
      </div>
      <Modal isOpen={open} onClose={onBurgerClick}>
        <BurgerMenu />
      </Modal>
    </div>
  )
}
