import React from 'react';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';

import { AppRouter } from 'router/AppRouter';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
