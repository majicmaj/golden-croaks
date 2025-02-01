import { useState, useEffect } from 'react';
import { ApiResponse, ChampionData } from './types';
import {
  BLUE_SYMBOL,
  CHAMPION_URL,
  GREEN_SYMBOL,
  SPLASH_URL,
} from './constants';

function LeagueChamp() {
  const [data, setData] = useState<ApiResponse<ChampionData>>();

  const fetchChampion = async () => {
    const response = await fetch(CHAMPION_URL);
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    fetchChampion();
  }, []);

  const { data: championData } = data || {};
  const { spells, info } = championData?.Nunu || {};
  const { attack, defense } = info || {};
  const [firstSpell, secondSpell] = spells || [];

  return (
    <div className="flex h-screen justify-center gap-4">
      <div className="relative flex aspect-[2/3] h-[calc(100vmin-64px)] flex-col gap-1 rounded-[2vh] border-[3vmin] border-black bg-green-700 bg-gradient-to-r from-green-700 to-sky-700 p-4">
        <div className="-mx-[1vmin] rounded-full border-[0.25vmin] border-black bg-[#d2be82] p-[0.25vmin] px-[2vmin] text-[3.5vmin] font-bold text-black">
          <div className="flex items-center justify-between">
            <span>{data?.data?.Nunu?.name}</span>

            <span className="flex items-center gap-[0.25vmin]">
              <span>
                <div className="mr-2 inline-flex aspect-square h-[3.5vmin] w-[3.5vmin] items-center justify-center rounded-full bg-gray-300">
                  <span className="text-[3vmin]">1</span>
                </div>
              </span>
              <img
                src={GREEN_SYMBOL}
                className="h-[3.5vmin] w-[3.5vmin] fill-current"
              />
              <img
                src={BLUE_SYMBOL}
                className="h-[3.5vmin] w-[3.5vmin] fill-current"
              />
            </span>
          </div>
        </div>

        <img
          src={SPLASH_URL}
          alt="Nunu"
          className="aspect-[9/7] border border-black object-cover"
        />

        <div className="-mx-[1vmin] rounded-full border-[0.25vmin] border-black bg-[#d2be82] p-[0.25vmin] px-[2vmin] text-[3vmin] font-bold text-black">
          Legendary Creature - Human Beast
        </div>

        <div className="flex h-full flex-col gap-[1vmin] border border-green-800 bg-stone-200 p-[0.5vmin] text-[2vmin] text-black">
          <div className="">
            <div className="text-[2.5vmin]">
              <img
                src={GREEN_SYMBOL}
                className="mr-[1vmin] inline-flex h-[3.5vmin] w-[3.5vmin] fill-current"
              />
              {firstSpell?.description}
            </div>
          </div>

          <div className="i">
            <div className="text-[2.5vmin]">
              <img
                src={BLUE_SYMBOL}
                className="mr-[1vmin] inline-flex h-[3.5vmin] w-[3.5vmin] fill-current"
              />
              {secondSpell?.description}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 rounded-full border-[0.25vmin] border-black bg-[#d2be82] px-[2vmin] text-[3vmin] font-bold text-black">
          {attack}/{defense}
        </div>
      </div>
    </div>
  );
}

export default LeagueChamp;
