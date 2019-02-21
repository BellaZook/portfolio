import React from 'react';
import AppBody from './components/body';
import AppFooter from './components/footer';
import AppHeader from './components/header';
import AppNavbar from './components/navbar';
import './App.css';

const App = () => {
  return (
    <div>
      <AppNavbar />
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;