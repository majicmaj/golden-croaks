import { Route } from 'react-router';
import Clock from './lesson1/Clock';
import LeagueChamp from './lesson2/LeagueChamp';
import BertHome from './BertHome';

const bertRoutes = [
  <Route path="/bert" element={<BertHome />} />,
  <Route path="1" element={<Clock />} />,
  <Route path="2" element={<LeagueChamp />} />,
];

export default bertRoutes;
