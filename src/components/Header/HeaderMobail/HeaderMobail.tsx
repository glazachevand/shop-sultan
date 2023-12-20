import { Link } from 'react-router-dom';
import Logo from 'assets/img/header/logo.png';
import CatalogIcon from 'assets/icons/catalog-square-black.svg';
import SearchIcon from 'assets/icons/search-black.svg';
import cls from "./HeaderMobail.module.scss";
import { CartBtn } from 'components/UI/CartBtn/CartBtn';
import { Burger } from 'components/Burger/Burger';
import { useState } from 'react';
import { Search } from 'components/UI/Search/Search';
import RemoveBtn from 'assets/icons/close.svg';

export const HeaderMobail = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <div className={cls.rowMobail}>
        <div className={`${cls.topContainerMobail} _container`}>
          <Burger />
          <Link to="/" className={cls.logo}><img src={Logo} alt="logo" /></Link>
          <CartBtn isText={false} className={cls.cartBtn} />
        </div>
      </div>
      <div className={cls.rowMobail}>
        <div className={`${cls.bottomContainerMobail} ${showSearch ? cls.big : ''} _container`}>
          {showSearch ?
            <div className={cls.searchRow}>
              <Search />
              <img
                src={RemoveBtn}
                className={cls.removeBtn}
                alt="remove search"
                onClick={() => setShowSearch(false)}
              />
            </div>
            : <>
              <Link to="/" className={cls.catalog}>
                <img src={CatalogIcon} alt="catalog" />
                <p>Каталог</p>
              </Link>
              <div className={cls.search} onClick={() => setShowSearch(true)}>
                <img src={SearchIcon} alt="search" />
                <p>Поиск</p>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
};