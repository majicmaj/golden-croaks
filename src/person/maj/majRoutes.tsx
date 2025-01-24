import { Route } from 'react-router';
import MajHome from './MajHome';
import LeagueChamp from './lesson2/LeagueChamp';
import BadWitch from './lesson3/BadWitch';

const majRoutes = [
  <Route path="/maj" element={<MajHome />} />,
  <Route path="1" element={<div>Lesson 1</div>} />,
  <Route path="2" element={<LeagueChamp />} />,
  <Route path="3" element={<BadWitch />} />,
];

export default majRoutes;
