import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'types/const/routes';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { AdminPage } from 'pages/AdminPage/AdminPage';
import { CartPage } from 'pages/CartPage/CartPage';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FullProductPage } from 'pages/FullProductPage/FullProductPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
            <Route path={ROUTES.PRODUCT} element={<FullProductPage />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
            <Route path={ROUTES.ADMIN} element={<AdminPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
