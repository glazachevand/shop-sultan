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
import { AdminLogin } from 'components/AdminLogin/AdminLogin';
import { LangSwitcher } from 'components/UI/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

export const HeaderMobail = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      <div className={cls.rowMobail}>
        <div className={`${cls.topContainerMobail} _container`}>
          <Burger />
          <Link to="/" className={cls.logo}><img src={Logo} alt="logo" /></Link>
          <div className={cls.cartLogin}>
            <LangSwitcher />
            <AdminLogin />
            <CartBtn isText={false} className={cls.cartBtn} />
          </div>
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
                <p>{t('header.catalog')}</p>
              </Link>
              <div className={cls.search} onClick={() => setShowSearch(true)}>
                <img src={SearchIcon} alt="search" />
                <p>{t('header.search')}</p>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
};