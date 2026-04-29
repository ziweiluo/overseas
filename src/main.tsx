import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
const normalizedHashPath = (window.location.hash || '')
  .replace(/^#/, '')
  .split('?')[0]
  .replace(/\/+$/, '') || '/';
const isSeawinProductPath =
  normalizedPath === '/seawin_product' || normalizedHashPath === '/seawin_product';

async function bootstrap() {
  if (isSeawinProductPath) {
    const { default: SeawinProductPage } = await import('./pages/seawin-product');

    root.render(
      <React.StrictMode>
        <SeawinProductPage />
      </React.StrictMode>,
    );
    return;
  }

  const { default: OverseasPage } = await import('./pages/overseas');
  root.render(
    <React.StrictMode>
      <OverseasPage />
    </React.StrictMode>,
  );
}

bootstrap();
