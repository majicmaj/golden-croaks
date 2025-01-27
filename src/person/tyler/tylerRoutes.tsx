import { Route } from 'react-router';
import Clock from './lesson1/Clock';
import LeagueChamp from './lesson2/LeagueChamp';
import TylerHome from './TylerHome';
import RockPaperScissors from './lesson3/RockPaperScissors'

const tylerRoutes = [
  <Route path="/tyler" element={<TylerHome />} />,
  <Route path="1" element={<Clock />} />,
  <Route path="2" element={<LeagueChamp />} />,
  <Route path="3" element={<RockPaperScissors />} />,
];

export default tylerRoutes;
