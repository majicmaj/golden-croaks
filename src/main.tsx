import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';
import bertRoutes from './person/bert/bertRoutes';
import majRoute from './person/maj/majRoutes';
import tylerRoutes from './person/tyler/tylerRoutes';
import ryanRoutes from './person/ryan/ryanRoutes';

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
