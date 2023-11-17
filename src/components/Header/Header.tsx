import { Link } from 'react-router-dom';
import { Contact } from "components/UI/Contact/Contact";
import { Menu } from "components/UI/Menu/Menu";
import Logo from 'assets/img/header/logo.png';
import Call from 'assets/img/header/call.png';
import CatalogIcon from 'assets/icons/catalog-square-black.svg';
import SearchIcon from 'assets/icons/search-black.svg';
import cls from "./Header.module.scss";
import { BackCall } from 'components/UI/BackCall/BackCall';
import { Search } from 'components/UI/Search/Search';
import { CartBtn } from 'components/UI/CartBtn/CartBtn';
import { Button } from 'components/UI/Button/Button';
import { Burger } from 'components/Burger/Burger';

export const Header = () => {

  return (
    <header className={cls.header} id="header">
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
            <Button text='Каталог' icon='catalog' className={cls.catalogBtn} />
          </Link>
          <Search size='big' />
          <BackCall color='dark' isIcon={false} isText={true} className={cls.backCall} aligh='right' />
          <div className={cls.callImg}><img src={Call} alt="call" /></div>
          <Link to="#!">
            <Button text='Прайс-лист' icon='download' className={cls.priceList} />
          </Link>
          <CartBtn isText={true} className={cls.cartBtn} />
        </div>
      </div>
      <div className={cls.rowMobail}>
        <div className={`${cls.topContainerMobail} _container`}>
          <Burger />
          <Link to="/catalog" className={cls.logo}><img src={Logo} alt="logo" /></Link>
          <CartBtn isText={false} className={cls.cartBtn} />
        </div>
      </div>
      <div className={cls.rowMobail}>
        <div className={`${cls.botttomContainerMobail} _container`}>
          <Link to="/catalog" className={cls.catalog}>
            <img src={CatalogIcon} alt="catalog" />
            <p>Каталог</p>
          </Link>
          <div className={cls.search}>
            <img src={SearchIcon} alt="search" />
            <p>Поиск</p>
          </div>
        </div>
      </div>
    </header>
  );
};