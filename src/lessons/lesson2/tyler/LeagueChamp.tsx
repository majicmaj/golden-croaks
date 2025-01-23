import { useEffect, useState } from 'react';
import { getData } from './utils';

const LeagueChamp = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);

  return <div>{data?.data.Akali.id}</div>;
};

export default LeagueChamp;
