import { render as rtlRender } from '@testing-library/react';
import i18n from 'i18next';
import type { ReactNode } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import deTranslation from '../../public/locales/de/translation.json';
import enTranslation from '../../public/locales/en/translation.json';
import { options } from '../i18n';
import { store } from '../store';

i18n.use(initReactI18next).init({
  ...options,
  resources: {
    de: {
      translation: deTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
});

interface WrapperProps {
  children: ReactNode;
}

function render(ui: ReactNode, { route = '/' } = {}) {
  function Wrapper(props: WrapperProps) {
    const { children } = props;

    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
        </I18nextProvider>
      </Provider>
    );
  }

  return {
    ...rtlRender(ui, { wrapper: Wrapper }),
  };
}

export { render };
