import { Route } from 'react-router';
import MajHome from './MajHome';

const majRoutes = [
  <Route path="/maj" element={<MajHome />} />,
  <Route path="1" element={<div>Lesson 1</div>} />,
  <Route path="2" element={<div>Lesson 2</div>} />,
];

export default majRoutes;
