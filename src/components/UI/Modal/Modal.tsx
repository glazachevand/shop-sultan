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
  children?: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { className, isCloseBtn = false, isOpen, onClose, children } = props;
  const mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={onClose}>
          <div
            className={cls.content}
            onClick={(e) => e.stopPropagation()}
          >
            {isCloseBtn && (
              <button className={cls.closeBtn} type="button" onClick={onClose}>
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