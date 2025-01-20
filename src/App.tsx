import { Link, Outlet } from 'react-router';
import './App.css';
import { useState } from 'react';
import NameNavButton from './component/NameNavButton';

const NAMES = ['majd', 'tyler', 'bert'];
function App() {
  const [name, setName] = useState('bert');

  const handleClick = (name: string) => setName(name);

  return (
    <div className="h-full w-full">
      <div className="absolute croak-bg" />
      <div className="p-4 flex flex-col gap-2 absolute h-full w-full">
        <div className="flex gap-4">
          {NAMES.map((name) => (
            <NameNavButton key={name} name={name} handleClick={handleClick} />
          ))}
        </div>

        <nav className="p-4 bg-gray-500/15 rounded flex gap-8">
          <p>Person: {name}</p>
          <Link to={`${name}/lesson/1`}>Lesson 1</Link>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
