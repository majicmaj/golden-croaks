import { useEffect, useState } from 'react';
import { getData } from './utils';

const LeagueChamp = () => {
  const [data, setData] = useState();

  const champSplash =
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_71.jpg';

  const blackManaImg =
    'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_474/MTc4NTIzMDU1MzEwNzc1NTE2/black-mana-ramps-mtg.webp';

  const background =
    'https://images.unsplash.com/photo-1655216522650-04b8898a8e88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D';

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div
      className="rounded-lg relative w-1/3 p-4 object-cover"
      style={{ background: `url(${background})` }}
    >
      <div className="relative">
        <img
          className="rounded-full size-8 absolute top-1 right-0 p-1 z-10"
          src={blackManaImg}
          alt="Black Mana"
        />
        <div className="rounded-full size-6 z-10 absolute top-2 right-8 bg-purple-300 text-black text-center">
          3
        </div>
      </div>
      <div className="rounded-lg text-white object-cover scale-y-125 text-xl bg-black font-extrabold border border-purple-400 p-1 px-3">
        {data?.data?.Akali?.id}
      </div>
      <div>
        <img
          className="aspect-square  object-cover rounded-lg border border-purple-400"
          src={champSplash}
          alt="Champion Splash"
        />
      </div>
      <div className="border border-purple-400 text-white bg-black scale-y-125 text-xl rounded-lg p-1 px-3">
        Human-Ninja
      </div>
      <div className="bg-black text-white  border border-purple-400 rounded-lg h-60 p-3">
        Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali
        now strikes alone, ready to be the deadly weapon her people need. Though
        she holds onto all she learned from her master Shen, she has pledged to
        defend Ionia Crest icon Ionia from its enemies, one kill at a time.
        Akali may strike in silence, but her message will be heard loud and
        clear
        <div>"The words on their tombstones will be my new mantras."</div>
      </div>
      <div className="bg-purple-300 text-black w-1/6 text-center absolute bottom-0 right-0 rounded-lg border border-purple-400">
        5/3
      </div>
    </div>
  );
};

export default LeagueChamp;
