import { Link } from "react-router-dom";
import { classNames } from "utils/classNames/classNames";
import { CategoryMenu } from "components/UI/CategoryMenu/CategoryMenu";
import cls from "./Footer.module.scss";
import Logo from 'assets/img/footer/logo_footer.png';
import { Menu } from "components/UI/Menu/Menu";
import { Button } from "components/UI/Button/Button";
import { Contact } from "components/UI/Contact/Contact";
import { BackCall } from "components/UI/BackCall/BackCall";

export const Footer = () => {

  return (
    <footer className={cls.footer}>
      <div className={classNames(cls.container, {}, ['_container'])}>
        <div className={cls.logoCol}>
          <Link to="/catalog" className={cls.logo}><img src={Logo} alt="logo" /></Link>
          <p className={cls.description}>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
          </p>
        </div>
        <div className={cls.contentCol}>
          <div>
            <h3>Меню сайта:</h3>
            <Menu type='footer' />
          </div>
          <div>
            <h3>Категории:</h3>
            <CategoryMenu type='footer' />
          </div>
          <div>
            <h3>Скачать прайс-лист:</h3>
            <Button text='Прайс-лист' icon='download' className={cls.priceList} />
          </div>
          <div>
            <h3>Контакты:</h3>
            <div className={cls.contactsCol}>
              <BackCall isIcon={false} isText={true} color='white' />
              <Contact type='email' color='white' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};