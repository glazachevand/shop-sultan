import { ChangeEvent, MouseEvent, useState } from "react";

import { Button } from "components/UI/Button/Button";
import { Modal } from "components/UI/Modal/Modal";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useTranslation } from 'react-i18next';
import { setAdminAuth } from "store/reducers/userSlice";
import { adminAuth } from "types/const/admin";

import cls from "./AdminLogin.module.scss";


export const AdminLogin = () => {
  const { t } = useTranslation();
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
    } else if (localStorage.getItem('auth-token')) {
      dispatch(setAdminAuth(true));
    } else {
      setOpenModal(true);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const onSubmitHandler = (e: MouseEvent<HTMLElement>) => {
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
        <Button icon="adminLogout" form="circ" color="white" width="32px" height="32px" title={t('buttons.out')} onClick={onBtnClick} />
        : <Button icon="adminLogin" form="circ" color="white" width="32px" height="32px" title={t('buttons.login_in')} onClick={onBtnClick} />
      }
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} variant='order' isCloseBtn={true}>
        <div className={cls.adminModal} >
          <form action="#" name='loginform' >
            <h2 className={cls.title}>{t('admin.authorization')}</h2>
            <div className={cls.label}>{t('admin.login_label')}</div>
            <input className={cls.input} name="login" type="text" value={user?.login} onChange={onChangeHandler} required title="login" />
            <div className={cls.label}>{t('admin.password_label')}</div>
            <input className={cls.input} name="password" type="password" value={user?.password} onChange={onChangeHandler} required title="password" />
            <Button className={cls.submit} type="submit" text={t('buttons.come_in')} width="200px" height="59px" onClick={onSubmitHandler} />
            {errorAuth && <div className={cls.error}>{t('messages.err0r_login')}</div>}
          </form>
        </div>
      </Modal>
    </div>
  );
};