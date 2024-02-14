import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button.test', () => {
  test('Test render Button', () => {
    render(<Button>BUTTON</Button>);
    expect(screen.getByText(/BUTTON/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('BUTTON');
  });

  test('Test catalog button', () => {
    render(<Button icon='catalog' text='Каталог'></Button>);
    expect(screen.getByAltText('catalog')).toBeInTheDocument();
    const elem = screen.getByRole('button');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('Каталог');
    expect(elem).toHaveClass('button');
    expect(elem).toHaveClass('oval');
    expect(elem).toHaveClass('yellow');
  });

  test('Test remove button', () => {
    render(<Button icon='remove' form='circ'></Button>);
    expect(screen.getByAltText('remove')).toBeInTheDocument();
    const elem = screen.getByRole('button');
    expect(elem).toContainHTML('img');
    expect(elem).toHaveClass('button');
    expect(elem).toHaveClass('circ');
    expect(elem).toHaveClass('yellow');
  });

  test('Test show button', () => {
    render(<Button text='Показать'></Button>);
    const elem = screen.getByRole('button');
    expect(elem).not.toContainHTML('img');
    expect(elem).toHaveTextContent('Показать');
    expect(elem).toHaveClass('button');
    expect(elem).toHaveClass('oval');
    expect(elem).toHaveClass('yellow');
  });
});