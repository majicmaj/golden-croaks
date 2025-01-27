import { Outlet, useLocation, useNavigate } from 'react-router';
import './App.css';
import { useState } from 'react';
import majRoutes from './person/maj/majRoutes';
import tylerRoutes from './person/tyler/tylerRoutes';
import bertRoutes from './person/bert/bertRoutes';

const NAMES = ['maj', 'tyler', 'bert'];
const LESSONS = {
  maj: majRoutes,
  tyler: tylerRoutes,
  bert: bertRoutes,
};

function App() {
  const location = useLocation();
  const locationName = location.pathname.split('/')[1];
  const [name, setName] = useState(locationName || 'bert');
  const [lesson, setLesson] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/${e.target.value}`);
    setName(e.target.value);
    setLesson('');
  };

  const handleLessonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`${name}/${e.target.value}`);
    setLesson(e.target.value);
  };

  return (
    <div className="h-full w-full">
      <div className="croak-bg absolute" />
      <div className="absolute flex h-full w-full flex-col gap-2 p-4">
        <nav className="flex items-center gap-4 rounded bg-gray-500/15 p-4">
          <select
            onChange={handleNameChange}
            value={name}
            className="rounded-md bg-gray-100 p-2 dark:bg-gray-500/15"
          >
            {NAMES.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <select
            onChange={handleLessonChange}
            value={lesson}
            className="rounded-md bg-gray-100 p-2 dark:bg-gray-500/15"
          >
            {LESSONS[name as keyof typeof LESSONS].map((_, index) => (
              <option key={index} value={index === 0 ? '' : index}>
                {index === 0 ? 'Home' : `Lesson ${index}`}
              </option>
            ))}
          </select>
        </nav>

        <div className="h-full rounded bg-gray-500/15 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
