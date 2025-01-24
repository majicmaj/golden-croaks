import { Route } from 'react-router';
import Clock from './lesson1/Clock';
import LeagueChamp from './lesson2/LeagueChamp';
import TylerHome from './TylerHome';

const tylerRoutes = [
  <Route path="/tyler" element={<TylerHome />} />,
  <Route path="1" element={<Clock />} />,
  <Route path="2" element={<LeagueChamp />} />,
];

export default tylerRoutes;
