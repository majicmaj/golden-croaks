import { useEffect, useState } from 'react';

const LANGUAGES = [
  'Japan',
  'Egypt',
  'NA',
  'Aruba',
  'Belize',
  'Warsaw',
  'Chicago',
  'Sydney',
  'MST',
  'Paris',
];
const TIMEZONES = [
  'Asia/Tokyo',
  'Africa/Cairo',
  'America/New_York',
  'America/Aruba',
  'America/Belize',
  'Europe/Warsaw',
  'America/Chicago',
  'Australia/Sydney',
  'MST',
  'Europe/Paris',
];

function Clock() {
  const [time, setTime] = useState(new Date());
  const [zone, setZone] = useState(TIMEZONES[0]);
  const [language, setLanguage] = useState(LANGUAGES[0]);

  const handleChange = (index: number) => {
    setLanguage(LANGUAGES[index]);
    setZone(TIMEZONES[index]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = new Intl.DateTimeFormat(language, {
    timeZone: zone,
    timeStyle: 'medium',
  }).format(time);

  return (
    <div>
      <h1>{formattedTime}</h1>
      <div className="flex flex-wrap gap-4">
        {LANGUAGES.map((LANGUAGES, index) => (
          <button onClick={() => handleChange(index)} key={index}>
            {LANGUAGES}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Clock;
