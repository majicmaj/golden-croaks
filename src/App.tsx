import { Link, Outlet, useNavigate } from 'react-router';
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
  const [name, setName] = useState('bert');

  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/${e.target.value}`);
    setName(e.target.value);
  };

  return (
    <div className="h-full w-full">
      <div className="absolute croak-bg" />
      <div className="p-4 flex flex-col gap-2 absolute h-full w-full">
        <nav className="p-4 bg-gray-500/15 rounded flex gap-8 items-center">
          <select
            className="bg-gray-100 p-2 dark:bg-gray-500/15 rounded-md"
            onChange={handleNameChange}
          >
            {NAMES.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          {LESSONS[name as keyof typeof LESSONS]
            .filter((_, index) => index !== 0)
            .map((_, index) => (
              <Link key={index} to={`${name}/${index + 1}`}>
                Lesson {index + 1}
              </Link>
            ))}
        </nav>

        <div className="h-full p-4 bg-gray-500/15 rounded">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
