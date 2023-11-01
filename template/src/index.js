import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './siteComponents/App';
import { Provider } from 'react-redux';
import './styles/App.css';
import "./styles/AppResponsive.css";
import "./styles/ServicesResponsive.css";
import "./styles/AboutResponsive.css";
import myStore, { persistor } from './Configuration/main';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);
