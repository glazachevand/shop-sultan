import { Link } from 'react-router-dom';
import Logo from 'assets/img/header/logo.png';
import CatalogIcon from 'assets/icons/catalog-square-black.svg';
import SearchIcon from 'assets/icons/search-black.svg';
import cls from "./HeaderMobail.module.scss";
import { CartBtn } from 'components/UI/CartBtn/CartBtn';
import { Burger } from 'components/Burger/Burger';

export const HeaderMobail = () => {

  return (
    <div>
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
    </div>
  )
};