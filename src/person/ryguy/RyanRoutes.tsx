import { Route } from 'react-router';
import RyanHome from './RyanHome';
import BadWitch from './lesson2/BadWitch';
import Chess from './lesson3/Chess';
import RockPaperScissors from './lesson4/RockPaperScissors';

const ryanRoutes = [
  <Route path="/ryan" element={<RyanHome />} />,
  <Route path="1" element={<div>Lesson 1</div>} />,
  <Route path="2" element={<BadWitch />} />,
  <Route path="3" element={<Chess />} />,
  <Route path="4" element={<RockPaperScissors />} />,
];

export default ryanRoutes;
