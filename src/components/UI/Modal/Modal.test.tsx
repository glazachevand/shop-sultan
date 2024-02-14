import { render, screen } from '@testing-library/react';
import { BurgerMenu } from 'components/Burger/BurgerMenu/BurgerMenu';
import { FormProduct } from 'components/FormProduct/FormProduct';
import { componentRender } from 'utils/tests/componentRender';
import { renderWithRouter } from 'utils/tests/renderWithRouter';

import { Modal } from './Modal';
import { Button } from '../Button/Button';

describe('Modal.test', () => {

  test('Test open modal with close button', () => {
    render(
      <Modal isOpen={true} isCloseBtn={true}>
        Modal content Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ratione.
      </Modal>
    );
    expect(screen.getByText(/Modal content/i)).toBeInTheDocument();
    const elem = screen.getByTestId('modal');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('opened');
    expect(screen.getByTestId('closeBtn')).toBeInTheDocument();
  });

  test('Test close modal', () => {
    render(<Modal isOpen={false} />);
    const elem = screen.getByTestId('modal');
    expect(elem).toBeInTheDocument();
    expect(elem).not.toHaveClass('opened');
    expect(screen.queryByTestId('closeBtn')).toBeNull();
  });

  test('Test modal with burger', () => {
    renderWithRouter(
      <Modal isOpen={true}>
        <BurgerMenu />
      </Modal>
    );
    const elem = screen.getByTestId('modal');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('opened');
    expect(elem).toHaveTextContent(/Меню сайта/i);
    expect(screen.queryByTestId('closeBtn')).toBeNull();
    expect(screen.getByAltText('back call')).toBeInTheDocument();
  });

  test('Test modal with form for new product', () => {
    componentRender(
      <Modal isOpen={true} isCloseBtn={true} variant={'order'}>
        <div className="formModal">
          <FormProduct />
        </div>
      </Modal>
    );
    const elem = screen.getByTestId('modal');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('opened');
    expect(elem).toHaveTextContent(/добавление товара/i);
    expect(screen.queryByTestId('closeBtn')).toBeInTheDocument();
  });

  test('Test modal with order', () => {
    render(
      <Modal isOpen={true} isCloseBtn={true} variant={'order'}>
        <div>
          <Button icon="orderOK" form="circ" width="59px" height="59px" />
          <h2 >Спасибо за заказ</h2>
          <p >Наш менеджер свяжется с вами в ближайшее время</p>
        </div>
      </Modal>
    );
    const elem = screen.getByTestId('modal');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('opened');
    expect(elem).toHaveTextContent(/Спасибо за заказ/i);
    expect(screen.queryByTestId('closeBtn')).toBeInTheDocument();
    expect(screen.getByAltText('OK')).toBeInTheDocument();
  });
});
