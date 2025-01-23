import { Link, Outlet } from 'react-router';
import './App.css';
import { useState } from 'react';

const NAMES = ['majd', 'tyler', 'bert'];
function App() {
  const [name, setName] = useState('bert');

  return (
    <div className="h-full w-full">
      <div className="absolute croak-bg" />
      <div className="p-4 flex flex-col gap-2 absolute h-full w-full">
        <nav className="p-4 bg-gray-500/15 rounded flex gap-8 items-center">
          <select
            className="bg-gray-100 p-2 dark:bg-gray-500/15 rounded-md"
            onChange={(e) => setName(e.target.value)}
          >
            {NAMES.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <Link to={`${name}/lesson/1`}>Lesson 1</Link>
          <Link to={`${name}/lesson/2`}>Lesson 2</Link>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
