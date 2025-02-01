import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';
import bertRoutes from './person/bert/bertRoutes.tsx';
import majRoute from './person/maj/majRoutes.tsx';
import tylerRoutes from './person/tyler/tylerRoutes.tsx';
import ryanRoutes from './person/ryguy/ryanRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/bert" children={bertRoutes} />
          <Route path="/maj" children={majRoute} />
          <Route path="/tyler" children={tylerRoutes} />
          <Route path="/ryan" children={ryanRoutes} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
