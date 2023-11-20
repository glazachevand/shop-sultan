import { Link } from "react-router-dom";
import { CategoryMenu } from "components/UI/CategoryMenu/CategoryMenu";
import cls from "./Footer.module.scss";
import Logo from 'assets/img/footer/logo_footer.png';
import { Menu } from "components/UI/Menu/Menu";
import { Button } from "components/UI/Button/Button";
import { Contact } from "components/UI/Contact/Contact";
import { BackCall } from "components/UI/BackCall/BackCall";
import { Socials } from "components/UI/Socials/Socials";
import { BankCards } from "components/UI/BankCards/BankCards";
import { Subscription } from "components/UI/Subscription/Subscription";

export const Footer = () => {

  return (
    <footer className={cls.footer}>
      <div className="_container">
        <div className={cls.container}>
          <div className={cls.logoCol}>
            <Link to="/catalog" className={cls.logo}><img src={Logo} alt="logo" /></Link>
            <p className={cls.description}>
              Компания &laquo;Султан&raquo;&nbsp;&mdash; снабжаем розничные магазины товарами
              &laquo;под ключ&raquo; в&nbsp;Кокчетаве и&nbsp;Акмолинской области
            </p>
            <Subscription />
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
            <div className={cls.priceListCol}>
              <h3 className={cls.priceListTitle}>Скачать прайс-лист:</h3>
              <Button text='Прайс-лист' icon='download' className={cls.priceList} />
              <Socials />
            </div>
            <div>
              <h3 className={cls.contactsTitle}>Контакты:</h3>
              <div className={cls.contactsCol}>
                <BackCall isIcon={false} isText={true} color='white' />
                <Contact type='email' color='white' />
                <BankCards />
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};
