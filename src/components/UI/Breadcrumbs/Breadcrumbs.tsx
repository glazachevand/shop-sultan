
import { Link } from 'react-router-dom';
import { ROUTES } from 'types/const/routes';
import cls from "./Breadcrumbs.module.scss";
import { useTranslation } from 'react-i18next';

interface BreadcrumbsProps {
  item: string;
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { item } = props;
  const { t } = useTranslation();

  return (
    <nav className={cls.breadcrumb}>
      <ul className={cls.breadcrumb__list} data-testid="breadcrumbs-list">
        <li><Link to={ROUTES.CATALOG} className={cls.breadcrumb__link}>{t('catalog.home')}</Link></li>
        <li><div className={cls.breadcrumb__item} >{item}</div></li>
      </ul>
    </nav>
  );
}