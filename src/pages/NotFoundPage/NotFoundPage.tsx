import { BackButton } from 'components/UI/BackButton/BackButton';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

export const NotFoundPage: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className='_container'>
      {!isMobile ?
        <Breadcrumbs item='Страница 404' />
        : <BackButton className="backButton" />}
      <section style={{ paddingBottom: 40 }}>
        <h1 className="title1">Страница не найдена <span>😕</span></h1>
      </section >
    </div >
  );
};