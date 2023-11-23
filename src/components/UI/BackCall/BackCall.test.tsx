import { render, screen } from '@testing-library/react';
import { BackCall } from './BackCall';

describe('BackCall.test', () => {

  test('Test render BackCall in header', () => {
    render(<BackCall color="dark" isIcon={false} isText={true} aligh='right' />);
    expect(screen.getByText(/90-00-91/i)).toBeInTheDocument();
    expect(screen.getByText(/Заказать звонок/)).toBeInTheDocument();
    const elem = screen.getByTestId('backcall');
    expect(elem).toBeInTheDocument();
    expect(elem).not.toContainHTML('img');
    expect(elem).toHaveClass('right');
    expect(elem).toHaveClass('dark');
  });

  test('Test render BackCall in footer', () => {
    render(<BackCall color="white" isIcon={false} isText={true} />);
    expect(screen.getByText(/90-00-91/i)).toBeInTheDocument();
    expect(screen.getByText(/Заказать звонок/)).toBeInTheDocument();
    const elem = screen.getByTestId('backcall');
    expect(elem).toBeInTheDocument();
    expect(elem).not.toContainHTML('img');
    expect(elem).toHaveClass('white');
  });

  test('Test render BackCall in burger', () => {
    render(<BackCall color="dark" isIcon={true} isText={false} />);
    expect(screen.queryByText(/90-00-91/i)).toBeNull();
    expect(screen.getByText(/Заказать звонок/)).toBeInTheDocument();
    const elem = screen.getByTestId('backcall');
    expect(elem).toBeInTheDocument();
    expect(elem).toContainHTML('img');
    expect(elem).toHaveClass('dark');
  });
});
