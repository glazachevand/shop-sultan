
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'types/const/routes';
import cls from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  const location = useLocation();

  return (
    <nav className={cls.breadcrumb}>
      <ul className={cls.breadcrumb__list} data-testid="breadcrumbs-list">
        <li><Link to={ROUTES.CATALOG} className={cls.breadcrumb__link}>Главная</Link></li>
        {location.pathname.includes('catalog') && (<li><div className={cls.breadcrumb__item} >Косметика и гигиена</div></li>)}
        {location.pathname.includes('cart') && (<li><div className={cls.breadcrumb__item} data-testid="breadcrumbs-cart">Корзина</div></li>)}
        {location.pathname.includes('product') && (<li><div className={cls.breadcrumb__item}>Название товара</div></li>)}
        {location.pathname.includes('admin') && (<li><div className={cls.breadcrumb__item}>Администрирование</div></li>)}
      </ul>
    </nav>
  );
}