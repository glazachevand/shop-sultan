import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';

describe('Contact.test', () => {

  test('Test location contact in header', () => {
    render(<Contact
      type='location'
      color='dark'
      isIcon={true} />
    );
    const contact = screen.getByTestId("contact");
    expect(contact).toBeInTheDocument();
    expect(contact).toHaveClass('dark');
    expect(contact).toContainHTML('<img');
    expect(screen.getByAltText('location')).toBeInTheDocument();
    expect(screen.getByText(/г. Кокчетав, ул. Ж. Ташенова 129Б/i)).toBeInTheDocument();
  });

  test('Test email contact in footer', () => {
    render(<Contact
      type='email'
      color='white'
      isIcon={false} />
    );
    const contact = screen.getByTestId("contact");
    expect(contact).toBeInTheDocument();
    expect(contact).toHaveClass('white');
    expect(contact).not.toContainHTML('img');
    expect(screen.getByText(/opt.sultan@mail.ru/i)).toBeInTheDocument();
  });

  test('Test email contact in header', () => {
    render(<Contact
      type='email'
      color='dark'
      isIcon={true} />
    );
    const contact = screen.getByTestId("contact");
    expect(contact).toBeInTheDocument();
    expect(contact).toHaveClass('dark');
    expect(contact).toContainHTML('<img');
    expect(screen.getByAltText('email')).toBeInTheDocument();
    expect(screen.getByText(/opt.sultan@mail.ru/i)).toBeInTheDocument();
  });

  test('Test sales in burger', () => {
    render(<Contact
      type='sales'
      color='dark'
      isIcon={true} />
    );
    const contact = screen.getByTestId("contact");
    expect(contact).toBeInTheDocument();
    expect(contact).toHaveClass('dark');
    expect(contact).toContainHTML('<img');
    expect(screen.getByAltText('sales department')).toBeInTheDocument();
    expect(screen.getByText(/Отдел продаж/i)).toBeInTheDocument();
  });
});