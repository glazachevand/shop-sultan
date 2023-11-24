import cls from "./Header.module.scss";
import { useMediaQuery } from 'react-responsive';
import { HeaderMobail } from './HeaderMobail/HeaderMobail';
import { HeaderDesktop } from './HeaderDecktop/HeaderDesktop';

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <header className={cls.header} id="header" data-testid="header">
      {isMobile ? <HeaderMobail /> : <HeaderDesktop />}
    </header>
  );
};