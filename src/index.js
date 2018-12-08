import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent';
import { StoreProvider } from './store';

ReactDOM.render(
  <StoreProvider>
    <MainComponent />
  </StoreProvider>,
  document.getElementById('app')
);
