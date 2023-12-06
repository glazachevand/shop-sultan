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
import { useState } from 'react';

export const HeaderDesktop = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <div className={cls.row}>
        <div className={`${cls.topContainer} _container`}>
          <Contact type='location' color='dark' isIcon={true} />
          <Contact type='email' color='dark' isIcon={true} />
          <Menu className={cls.menu} type='header' />
        </div>
      </div>
      <div className={cls.row}>
        <div className={`${cls.botttomContainer} _container`}>
          <Link to="/catalog" className={cls.logo}><img src={Logo} alt="logo" /></Link>
          <Link to="/catalog">
            <Button text='Каталог' icon='catalog' width='192px' height='59px' />
          </Link>
          <Search type='header' value={searchValue} setValue={setSearchValue} />
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