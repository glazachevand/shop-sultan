import { BackButton } from 'components/UI/BackButton/BackButton';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const NotFoundPage: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation();

  return (
    <div className='_container' data-testid='notfound-page'>
      {!isMobile ?
        <Breadcrumbs item={t('messages.page404')} />
        : <BackButton className="backButton" />}
      <section style={{ paddingBottom: 40 }}>
        <h1 className="title1">{t('messages.page_notfound')} <span>😕</span></h1>
      </section >
    </div >
  );
}

export default NotFoundPage;