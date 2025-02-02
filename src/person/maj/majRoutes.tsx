import { Route } from 'react-router';
import MajHome from './MajHome';
import BadWitch from './lesson2/BadWitch';
import Chess from './lesson3/Chess';
import RockPaperScissors from './lesson4/RockPaperScissors';
import LeagueOfLegendsClimbClicker from './lesson5/ClimbClicker';

const majRoutes = [
  <Route path="/maj" element={<MajHome />} />,
  <Route path="1" element={<div>Lesson 1</div>} />,
  <Route path="2" element={<BadWitch />} />,
  <Route path="3" element={<Chess />} />,
  <Route path="4" element={<RockPaperScissors />} />,
  <Route path="5" element={<LeagueOfLegendsClimbClicker />} />,
];

export default majRoutes;
