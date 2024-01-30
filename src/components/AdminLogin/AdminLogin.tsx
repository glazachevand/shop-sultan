import { Button } from "components/UI/Button/Button";
import { Modal } from "components/UI/Modal/Modal";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ChangeEvent, FormEvent, useState } from "react";
import { setAdminAuth } from "store/reducers/userSlice";
import { adminAuth } from "types/const/admin";
import cls from "./AdminLogin.module.scss";

export const AdminLogin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorAuth, setErrorAuth] = useState(false);
  const { isAdmin } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({ isAdmin, login: '', password: '' });

  const onBtnClick = () => {
    if (isAdmin) {
      dispatch(setAdminAuth(false));
      if (localStorage.getItem('auth-token')) {
        localStorage.removeItem('auth-token');
      }
    } else {
      setOpenModal(true);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.login === adminAuth.login && user.password === adminAuth.password) {
      dispatch(setAdminAuth(true));
      const token = '123456qwerty';
      localStorage.setItem('auth-token', token);
      setUser({ isAdmin, login: '', password: '' });
      setOpenModal(false);
      setErrorAuth(false);
    } else {
      setErrorAuth(true);
    }
  }

  return (
    <div className={cls.adminLogin} data-testid="adminLogin">
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
            {errorAuth && <div className={cls.error}>Пароль или логин неверные</div>}
          </form>
        </div>
      </Modal>
    </div>
  );
};