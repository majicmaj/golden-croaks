import { Route } from 'react-router';
import Clock from './lesson1/Clock';
import LeagueChamp from './lesson2/LeagueChamp';
import BertHome from './BertHome';
import RockPaperScissors from './lesson3/RockPaperScissors';
import Closure from './lesson4/Closure';

const bertRoutes = [
  <Route path="/bert" element={<BertHome />} />,
  <Route path="1" element={<Clock />} />,
  <Route path="2" element={<LeagueChamp />} />,
  <Route path="3" element={<RockPaperScissors />} />,
  <Route path="4" element={<Closure />} />,
];

export default bertRoutes;
