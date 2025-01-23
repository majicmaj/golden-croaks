import { useState, useEffect } from 'react';
import './App.css';

const timeZones = [
  'America/New_York',
  'Asia/Shanghai',
  'Asia/Seoul',
  'Australia/Sydney',
  'Europe/Berlin',
  'Europe/Paris',
  'Asia/Dubai',
  'US/Hawaii',
  'Africa/Timbuktu',
  'Asia/Tokyo',
];

function App() {
  const [country, setCountry] = useState('United States');
  const [date, setDate] = useState(new Date());
  const [zone, setZone] = useState('America/New_York');
  const time = date.toLocaleTimeString('en-US', {
    timeZone: zone,
  });

  const handleClick = (tz) => {
    setCountry(tz.replace('_', ' ').match(/[^\/]+$/g));
    setZone(tz);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{country}</div>
      <div>{time}</div>
      <div className="flex gap-4 flex-wrap">
        {timeZones.map((tz) => (
          <button className="border" onClick={() => handleClick(tz)}>
            {tz.replace('_', ' ').match(/[^\/]+$/g)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
