import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/UI/Loader/Loader';
import React, { Suspense } from 'react';
import { AppRouter } from 'router/AppRouter';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Suspense fallback={<div className="text-center"><Loader /></div>}>
          <Header />
          <main>
            <AppRouter />
          </main>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
