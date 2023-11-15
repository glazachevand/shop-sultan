import { Link } from 'react-router-dom';
import { Contact } from "components/UI/Contact/Contact";
import { Menu } from "components/UI/Menu/Menu";
import Logo from 'assets/img/header/logo.png'
import cls from "./Header.module.scss";
import { BackCall } from 'components/UI/BackCall/BackCall';

export const Header = () => {

  return (
    <header className={cls.header}>
      <div className={cls.row}>
        <div className={`${cls.topContainer} _container`}>
          <Contact type='location' color='dark' isIcon={true} />
          <Contact type='email' color='dark' isIcon={true} />
          <Menu className={cls.menu} type='header' />
        </div>
      </div>
      <div className={cls.row}>
        <div className={`${cls.botttomContainer} _container`}>
          <Link to="/catalog" className={cls.logo}><img src={Logo} alt="logo" /></Link>
          <BackCall color='dark' isIcon={false} isText={true} />
        </div>
      </div>
      <div className={cls.rowMobail}>

      </div>
      <div className={cls.rowMobail}>

      </div>

    </header>
  );
};