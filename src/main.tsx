import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'tachyons';
import './index.css';
import './Tabs.css';
import './Slider.css';
import './Select.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
