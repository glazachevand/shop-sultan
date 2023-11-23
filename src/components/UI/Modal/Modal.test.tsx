import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

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
});
