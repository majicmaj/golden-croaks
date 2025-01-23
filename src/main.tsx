import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import BertClock from './person/bert/lesson1/Clock.tsx';
import TylerClock from './person/tyler/lesson1/Clock.tsx';
import BertCard from './person/bert/lesson2/LeagueChamp.tsx';
import TylerCard from './person/tyler/lesson2/LeagueChamp.tsx';

import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
          children={[
            <Route
              path="/bert/lesson/"
              children={[
                <Route path="1" element={<BertClock />} />,
                <Route path="2" element={<BertCard />} />,
              ]}
            />,
            <Route
              path="/tyler/lesson/"
              children={[
                <Route path="1" element={<TylerClock />} />,
                <Route path="2" element={<TylerCard />} />,
              ]}
            />,
            <Route
              path="/majd/lesson/"
              children={[
                <Route path="1" element={<div>Lesson 1</div>} />,
                <Route path="2" element={<div>Lesson 2</div>} />,
              ]}
            />,
          ]}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
