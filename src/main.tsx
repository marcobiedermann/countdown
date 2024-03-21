import './assets/style.css';
import './i18n';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Providers from './components/Providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
