import { useState } from 'react';
import RankBadge from './RankBadge';
import gold_icon from './assets/ui/gold_icon.png';
import { BASE_LP } from './constant';
import Sidebar from './Sidebar';
import { getRank, getRomanNumeral, getDivision } from './utils';

// All ranks are 100 LP apart, except challenger is 300 LP away from Grandmaster

const LeagueOfLegendsClimbClicker = () => {
  const [lp, setLp] = useState(0);
  const [maxLp, setMaxLp] = useState(0);
  const [gold, setGold] = useState(0);

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const [winrateMod, setWinrateMod] = useState(0);

  const [lastLpPerWin, setLastLpPerWin] = useState(0);

  const winrate = (wins || 1) / (wins + losses || 2);

  const rank = getRank(lp);
  const division = getRomanNumeral(getDivision(lp));

  // more lp when winning more and less when losing more than 50% of games
  const winrateLpMod = (winrate - 0.5) * BASE_LP;

  // make it harder to win the more LP, from 0.4 in iron to 0.8 in challenger

  const play = () => {
    const randomWinLossMod = Math.random() * 0.2 - 0.1;
    const winLossMod =
      Math.random() - lp / 10000 > winrate / 2 + randomWinLossMod ? 1 : -1;
    const lpPerGame = Math.floor(
      (BASE_LP + winrateLpMod) * (1 + winrateMod / 10000) * winLossMod
    );
    setLastLpPerWin(lpPerGame);
    setLp((prev) => Math.max(0, prev + lpPerGame));

    const isWin = lpPerGame > 0;
    if (isWin) {
      setWins((prev) => prev + 1);
      setGold((prev) => prev + 2);
    } else {
      setLosses((prev) => prev + 1);
      //   setGold((prev) => prev +0);
    }

    // update max lp
    if (lp > maxLp) {
      setMaxLp(lp);
    }
  };

  // const play50Times = () => {
  //   for (let i = 0; i < 50; i++) {
  //     play();
  //   }

  return (
    <div className="grid h-full grid-cols-1 place-items-center gap-8 overflow-auto md:grid-cols-[auto,1fr]">
      <Sidebar
        gold={gold}
        setGold={setGold}
        setWinrateMod={setWinrateMod}
        setLp={setLp}
        setWins={setWins}
        play={play}
      />

      <main className="grid h-full place-items-center gap-8 font-serif text-xl">
        <div>
          <div className="flex items-center gap-2">
            <span>
              {wins}W {losses}L
            </span>
            <span>{lp}lp</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Winrate {(winrate * 100).toFixed(0)}%</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <img src={gold_icon} />
            </span>
            <span>{gold}</span>
          </div>
        </div>

        <RankBadge
          rank={rank}
          division={division}
          lp={lp}
          lastLpPerWin={lastLpPerWin}
          maxLp={maxLp}
        />

        <button
          className="relative grid h-12 w-40 place-items-center"
          onClick={play}
        >
          <div
            className="h-full w-[90%] border-[3.5px] border-b-[4px] border-t-[3px] border-teal-500 bg-slate-800 transition-all hover:brightness-150"
            style={{
              transform: 'perspective(100px) rotateX(-30deg)',
            }}
          />
          <div className="absolute">PLAY</div>
        </button>
        {/* <button onClick={play50Times}>50</button> */}
      </main>
    </div>
  );
};

export default LeagueOfLegendsClimbClicker;
