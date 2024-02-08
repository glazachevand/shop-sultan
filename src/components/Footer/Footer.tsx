import { Link } from "react-router-dom";
import { CategoryGlobalMenu } from "components/UI/CategoryGlobalMenu/CategoryGlobalMenu";
import cls from "./Footer.module.scss";
import Logo from 'assets/img/footer/logo_footer.png';
import { Menu } from "components/UI/Menu/Menu";
import { Button } from "components/UI/Button/Button";
import { Contact } from "components/UI/Contact/Contact";
import { BackCall } from "components/UI/BackCall/BackCall";
import { Socials } from "components/UI/Socials/Socials";
import { BankCards } from "components/UI/BankCards/BankCards";
import { Subscription } from "components/UI/Subscription/Subscription";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={cls.footer} data-testid='footer'>
      <div className="_container">
        <div className={cls.container}>
          <div className={cls.logoCol}>
            <Link to="/" className={cls.logo}><img src={Logo} alt="logo" /></Link>
            <p className={cls.description}>{t('footer.comp_descr')}</p>
            <Subscription />
          </div>
          <div className={cls.contentCol}>
            <div>
              <h3>{t('footer.menu_title')}:</h3>
              <Menu variant='footer' />
            </div>
            <div>
              <h3>{t('footer.categories_title')}:</h3>
              <CategoryGlobalMenu variant='footer' />
            </div>
            <div className={cls.priceListCol}>
              <h3 className={cls.priceListTitle}>{t('footer.download_price_list')}:</h3>
              <Button text={t('buttons.price_list')} icon='download' className={cls.priceList} />
              <Socials />
            </div>
            <div>
              <h3 className={cls.contactsTitle}>{t('footer.contacts_title')}:</h3>
              <div className={cls.contactsCol}>
                <BackCall isIcon={false} isText={true} color='white' />
                <Contact variant='email' color='white' />
                <BankCards />
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};
