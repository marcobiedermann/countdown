import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/style.css';
import Providers from './components/Providers';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
