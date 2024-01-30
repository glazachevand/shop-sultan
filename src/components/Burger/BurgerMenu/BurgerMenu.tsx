import { Contact } from "components/UI/Contact/Contact";
import { BackCall } from "components/UI/BackCall/BackCall";
import cls from "./BurgerMenu.module.scss";
import { Menu } from "components/UI/Menu/Menu";
import { Button } from "components/UI/Button/Button";

export const BurgerMenu = () => {

  return (
    <div className={cls.burgerMenu} data-testid="burgerMenu">
      <div className='_container'>
        <div className={cls.content}>
          <div className={cls.contacts}>
            <Contact variant='location' color='dark' isIcon={true} />
            <Contact variant='email' color='dark' isIcon={true} />
            <Contact variant='sales' color='dark' isIcon={true} />
            <BackCall isIcon={true} isText={false} color='dark' />
          </div>
          <div className={cls.menu}>
            <h2 className={cls.title}>Меню сайта:</h2>
            <Menu variant='header' />
          </div>
          <Button text='Прайс-лист' icon='download' width='290px' height='70px' />
        </div>
      </div>

    </div>
  );
};
