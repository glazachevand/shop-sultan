import { ReactNode } from "react";
import { classNames } from "utils/classNames/classNames";
import cls from "./Modal.module.scss";
import Close from 'assets/icons/close.svg';
import { Portal } from "../Portal/Portal";

interface ModalProps {
  className?: string;
  isCloseBtn?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  type?: 'burger' | 'order';
  children?: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { className, isCloseBtn = false, isOpen, onClose, type = 'burger', children } = props;
  const mods = {
    [cls.opened]: isOpen,
    [cls[type]]: true,
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])} data-testid="modal">
        <div className={cls.overlay} onClick={onClose}>
          <div
            className={classNames(cls.content, { [cls[type]]: true }, [])}
            onClick={(e) => e.stopPropagation()}
          >
            {isCloseBtn && (
              <button className={cls.closeBtn} type="button" onClick={onClose} data-testid="closeBtn">
                <img src={Close} alt="close" />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};