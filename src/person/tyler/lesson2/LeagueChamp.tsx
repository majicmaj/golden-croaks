import { useEffect, useState } from 'react';
import { getData } from './utils';

const LeagueChamp = () => {
  const [data, setData] = useState<any>(null);

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
      className="relative w-1/3 rounded-lg object-cover p-4"
      style={{ background: `url(${background})` }}
    >
      <div className="relative">
        <img
          className="absolute right-0 top-1 z-10 size-8 rounded-full p-1"
          src={blackManaImg}
          alt="Black Mana"
        />
        <div className="absolute right-8 top-2 z-10 size-6 rounded-full bg-purple-300 text-center text-black">
          3
        </div>
      </div>
      <div className="scale-y-125 rounded-lg border border-purple-400 bg-black object-cover p-1 px-3 text-xl font-extrabold text-white">
        {data?.data?.Akali?.id}
      </div>
      <div>
        <img
          className="aspect-square rounded-lg border border-purple-400 object-cover"
          src={champSplash}
          alt="Champion Splash"
        />
      </div>
      <div className="scale-y-125 rounded-lg border border-purple-400 bg-black p-1 px-3 text-xl text-white">
        Human-Ninja
      </div>
      <div className="h-60 rounded-lg border border-purple-400 bg-black p-3 text-white">
        Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali
        now strikes alone, ready to be the deadly weapon her people need. Though
        she holds onto all she learned from her master Shen, she has pledged to
        defend Ionia Crest icon Ionia from its enemies, one kill at a time.
        Akali may strike in silence, but her message will be heard loud and
        clear
        <div>"The words on their tombstones will be my new mantras."</div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/6 rounded-lg border border-purple-400 bg-purple-300 text-center text-black">
        5/3
      </div>
    </div>
  );
};

export default LeagueChamp;
