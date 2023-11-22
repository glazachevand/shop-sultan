
import { Link } from 'react-router-dom';
import { ROUTES } from 'types/const/routes';
import cls from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  item: string;
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { item } = props;

  return (
    <nav className={cls.breadcrumb}>
      <ul className={cls.breadcrumb__list} data-testid="breadcrumbs-list">
        <li><Link to={ROUTES.HOME} className={cls.breadcrumb__link}>Главная</Link></li>
        <li><div className={cls.breadcrumb__item} >{item}</div></li>
      </ul>
    </nav>
  );
}