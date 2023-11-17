import { useState, useCallback } from "react";
import { Modal } from "components/UI/Modal/Modal";
import { classNames } from "utils/classNames/classNames";
import cls from "./Burger.module.scss";

interface BurgerProps {
  className?: string;
}

export const Burger = (props: BurgerProps) => {
  const { className } = props;
  const [open, setOpen] = useState(false);

  const onBurgerClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.burger, {}, [className])}>
      <div className={cls.button} onClick={onBurgerClick}>
        <div className={!open ? cls.navIcon : cls.navIconActive}>
          <span></span>
        </div>
      </div>
      <Modal isOpen={open} onClose={onBurgerClick}>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quaerat aut quidem blanditiis cum. Inventore nisi cumque veritatis eaque aspernatur hic laudantium repellendus nam blanditiis? Autem nisi aspernatur itaque dignissimos unde, aliquid, consequuntur repudiandae voluptate explicabo quia accusantium similique asperiores atque inventore soluta rerum voluptatum magni provident sed. Distinctio ipsa tempore voluptatem quam provident sunt ad vel earum consectetur sapiente corrupti ipsam incidunt, magni maxime id. Ipsam nesciunt qui facilis voluptas deleniti possimus accusantium ab, alias commodi eius inventore adipisci illo, repellat at quia fugiat! Nihil harum esse, minus quas fugiat recusandae soluta exercitationem sed officia dicta nam aliquam magnam.</div>
      </Modal>
    </div>
  )
}
