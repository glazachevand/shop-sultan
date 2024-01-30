import { Link } from 'react-router-dom';
import { Contact } from "components/UI/Contact/Contact";
import { Menu } from "components/UI/Menu/Menu";
import Logo from 'assets/img/header/logo.png';
import Call from 'assets/img/header/call.png';
import cls from "./HeaderDesktop.module.scss";
import { BackCall } from 'components/UI/BackCall/BackCall';
import { Search } from 'components/UI/Search/Search';
import { CartBtn } from 'components/UI/CartBtn/CartBtn';
import { Button } from 'components/UI/Button/Button';
import { AdminLogin } from 'components/AdminLogin/AdminLogin';

export const HeaderDesktop = () => {

  return (
    <div>
      <div className={cls.row}>
        <div className={`${cls.topContainer} _container`}>
          <Contact variant='location' color='dark' isIcon={true} />
          <Contact variant='email' color='dark' isIcon={true} />
          <Menu className={cls.menu} variant='header' />
          <AdminLogin />
        </div>
      </div>
      <div className={cls.row}>
        <div className={`${cls.botttomContainer} _container`}>
          <Link to="/" className={cls.logo}><img src={Logo} alt="logo" /></Link>
          <Link to="/">
            <Button text='Каталог' icon='catalog' width='192px' height='59px' />
          </Link>
          <Search variant='header' />
          <BackCall color='dark' isIcon={false} isText={true} className={cls.backCall} aligh='right' />
          <div className={cls.callImg}><img src={Call} alt="call" /></div>
          <Link to="#!">
            <Button text='Прайс-лист' icon='download' width='200px' height='59px' />
          </Link>
          <CartBtn isText={true} className={cls.cartBtn} />
        </div>
      </div>
    </div>
  )
}