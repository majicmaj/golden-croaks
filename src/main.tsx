import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Clock from './lessons/lesson1/bert/Clock.tsx'
import Tclock from './lessons/lesson1/tyler/Clock.tsx'
import LeagueChamp from './lessons/lesson2/bert/LeagueChamp.tsx';

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
              children={[<Route path="1" element={<Clock/>} />, <Route path="2" element={<LeagueChamp/>} />]}
            />,
            <Route
              path="/tyler/lesson/"
              children={[<Route path="1" element={<Tclock/>} />, <Route path="2" element={<div>Lesson 2</div>} />]}
            />,
            <Route
              path="/majd/lesson/"
              children={[<Route path="1" element={<div>Lesson 1</div>} />, <Route path="2" element={<div>Lesson 2</div>} />]}
            />,
          ]}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
