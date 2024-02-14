import { useMediaQuery } from 'react-responsive';

import cls from "./Header.module.scss";
import { HeaderDesktop } from './HeaderDecktop/HeaderDesktop';
import { HeaderMobail } from './HeaderMobail/HeaderMobail';

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <header className={cls.header} id="header" data-testid="header">
      {isMobile ? <HeaderMobail /> : <HeaderDesktop />}
    </header>
  );
};