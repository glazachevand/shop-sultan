import { Button } from "components/UI/Button/Button";
import { Modal } from "components/UI/Modal/Modal";
import { useAppSelector } from "hooks/redux";
import { ChangeEvent, FormEvent, useState } from "react";
import { IUserState } from "types/user";
import { classNames } from "utils/classNames/classNames";
import cls from "./AdminLogin.module.scss";

export const AdminLogin = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isAdmin, login, password } = useAppSelector(state => state.user);
  const [user, setUser] = useState<IUserState>({ isAdmin, login, password });

  const onBtnClick = () => {
    setOpenModal((prev) => !prev);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenModal(false);
  }

  return (
    <div className={cls.adminLogin}>
      {isAdmin ?
        <Button icon="adminLogout" form="circ" color="white" width="32px" height="32px" title="Выйти" onClick={onBtnClick} />
        : <Button icon="adminLogin" form="circ" color="white" width="32px" height="32px" title="Войти как администратор" onClick={onBtnClick} />
      }
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} variant='order' isCloseBtn={true}>
        <div className={cls.adminModal} >
          <form action="#" name='loginform' onSubmit={onSubmitHandler}>
            <h2 className={cls.title}>Авторизация</h2>
            <div className={cls.label}>Введите логин администратора</div>
            <input className={cls.input} name="login" type="text" value={user?.login} onChange={onChangeHandler} required title="login" />
            <div className={cls.label}>Введите пароль</div>
            <input className={cls.input} name="password" type="text" value={user?.password} onChange={onChangeHandler} required title="password" />
            <Button className={cls.submit} type="submit" text="Войти" width="200px" height="59px" />
          </form>
        </div>
      </Modal>
    </div>
  );
};