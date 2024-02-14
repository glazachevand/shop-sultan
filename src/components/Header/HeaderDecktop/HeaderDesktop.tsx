import Call from 'assets/img/header/call.png';
import Logo from 'assets/img/header/logo.png';
import { AdminLogin } from 'components/AdminLogin/AdminLogin';
import { BackCall } from 'components/UI/BackCall/BackCall';
import { Button } from 'components/UI/Button/Button';
import { CartBtn } from 'components/UI/CartBtn/CartBtn';
import { Contact } from "components/UI/Contact/Contact";
import { LangSwitcher } from 'components/UI/LangSwitcher/LangSwitcher';
import { Menu } from "components/UI/Menu/Menu";
import { Search } from 'components/UI/Search/Search';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import cls from "./HeaderDesktop.module.scss";

export const HeaderDesktop = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={cls.row}>
        <div className={`${cls.topContainer} _container`}>
          <Contact variant='location' color='dark' isIcon={true} />
          <Contact variant='email' color='dark' isIcon={true} />
          <Menu className={cls.menu} variant='header' />
          <div className={cls.langLogin}>
            <LangSwitcher />
            <AdminLogin />
          </div>
        </div>
      </div>
      <div className={cls.row}>
        <div className={`${cls.botttomContainer} _container`}>
          <Link to="/" className={cls.logo}><img src={Logo} alt="logo" /></Link>
          <Link to="/">
            <Button text={t('buttons.catalog')} icon='catalog' width='192px' height='59px' />
          </Link>
          <Search variant='header' />
          <BackCall color='dark' isIcon={false} isText={true} className={cls.backCall} aligh='right' />
          <div className={cls.callImg}><img src={Call} alt="call" /></div>
          <Link to="#!">
            <Button text={t('buttons.price_list')} icon='download' width='200px' height='59px' />
          </Link>
          <CartBtn isText={true} className={cls.cartBtn} />
        </div>
      </div>
    </div>
  )
}