import { Route } from 'react-router';
import MajHome from './MajHome';
import BadWitch from './lesson2/BadWitch';
import Chess from './lesson3/Chess';

const majRoutes = [
  <Route path="/maj" element={<MajHome />} />,
  <Route path="1" element={<div>Lesson 1</div>} />,
  <Route path="2" element={<BadWitch />} />,
  <Route path="3" element={<Chess />} />,
];

export default majRoutes;
