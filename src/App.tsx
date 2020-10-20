import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';

import Routes from './routes';

import { globalStyle as GlobalStyle } from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
};

export default App;
