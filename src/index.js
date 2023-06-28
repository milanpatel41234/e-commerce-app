import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './Components/Redux-Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Components/Store/AuthProvider';
import { Provider } from 'react-redux';
<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <BrowserRouter><App /></BrowserRouter>
    </AuthProvider>
    </Provider>
  </React.StrictMode>
);
