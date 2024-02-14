import { fireEvent, screen } from "@testing-library/react";
import { RootState } from "store/store";
import { componentRender } from "utils/tests/componentRender";

import { AdminLogin } from "./AdminLogin";

describe('AdminLogin.test', () => {
  beforeEach(() => {
    if (localStorage.getItem('auth-token')) {
      localStorage.removeItem('auth-token');
    }
  });

  test('Test render AdminLogin', () => {
    const preloadedState: Partial<RootState> = {
      user: {
        isAdmin: false
      },
    }

    componentRender(<AdminLogin />, {
      preloadedState
    });
    const adminLogin = screen.getByTestId('adminLogin');
    expect(adminLogin).toBeInTheDocument();
    expect(screen.getByTitle('Войти как администратор')).toBeInTheDocument();
  });

  test('Test login and logout', async () => {
    const preloadedState: Partial<RootState> = {
      user: {
        isAdmin: false
      },
    }

    componentRender(<AdminLogin />, {
      preloadedState
    });

    // Вывести форму авторизации
    const loginBtn = await screen.findByTitle('Войти как администратор');
    expect(loginBtn).toBeInTheDocument();
    fireEvent.click(loginBtn);
    const title = await screen.findByText('Авторизация');
    expect(title).toBeInTheDocument();

    // Ввести логин
    let login = await screen.findByTitle('login');
    expect(login).toBeInTheDocument();
    fireEvent.input(login, { target: { value: 'admin' } });
    login = await screen.findByTitle('login');
    expect(login).toHaveValue('admin');

    // Ввести пароль
    let password = await screen.findByTitle('password');
    expect(password).toBeInTheDocument();
    fireEvent.input(password, { target: { value: '12345' } });
    password = await screen.findByTitle('password');
    expect(password).toHaveValue('12345');

    // Нажать на кнопку Войти
    const submit = screen.getByText('Войти');
    fireEvent.click(submit);
    const logoutBtn = await screen.findByTitle('Выйти');
    expect(logoutBtn).toBeInTheDocument();
    const loginBtnAfterAuth = screen.queryByTitle('Войти как администратор');
    expect(loginBtnAfterAuth).toBeNull();
  });

  test('Test uncorrect login', async () => {
    const preloadedState: Partial<RootState> = {
      user: {
        isAdmin: false
      },
    }

    componentRender(<AdminLogin />, {
      preloadedState
    });

    // Вывести форму авторизации
    const loginBtn = await screen.findByTitle('Войти как администратор');
    expect(loginBtn).toBeInTheDocument();
    fireEvent.click(loginBtn);

    // Ввести логин
    let login = await screen.findByTitle('login');
    expect(login).toBeInTheDocument();
    fireEvent.input(login, { target: { value: 'qwerty' } });
    login = await screen.findByTitle('login');
    expect(login).toHaveValue('qwerty');

    // Ввести пароль
    let password = await screen.findByTitle('password');
    expect(password).toBeInTheDocument();
    fireEvent.input(password, { target: { value: '12345' } });
    password = await screen.findByTitle('password');
    expect(password).toHaveValue('12345');

    // Нажать на кнопку Войти
    const submit = screen.getByText('Войти');
    fireEvent.click(submit);
    const logoutBtn = screen.queryByTitle('Выйти');
    expect(logoutBtn).toBeNull();
    const errorMessage = await screen.findByText('Пароль или логин неверные');
    expect(errorMessage).toBeInTheDocument();
    screen.debug();
  });
});