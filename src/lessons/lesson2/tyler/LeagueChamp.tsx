import { useEffect, useState } from 'react';
import { getData } from './utils';

const LeagueChamp = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  return <div>{data?.data.Akali.id}</div>;
  <div></div>;
};

export default LeagueChamp;
