import unranked from './assets/unranked.webp';
import iron from './assets/iron.webp';
import bronze from './assets/bronze.webp';
import silver from './assets/silver.webp';
import gold from './assets/gold.webp';
import platinum from './assets/platinum.webp';
import emerald from './assets/emerald.webp';
import diamond from './assets/diamond.webp';
import master from './assets/master.webp';
import grandmaster from './assets/grandmaster.webp';
import challenger from './assets/challenger.webp';

const RANKS_SOURCE_MAP = {
  Unranked: unranked,
  Iron: iron,
  Bronze: bronze,
  Silver: silver,
  Gold: gold,
  Platinum: platinum,
  Emerald: emerald,
  Diamond: diamond,
  Master: master,
  Grandmaster: grandmaster,
  Challenger: challenger,
};

const RankBadge = ({
  rank,
  division,
  lp,
}: {
  rank: string;
  division: string;
  lp: number;
}) => {
  const src =
    rank in RANKS_SOURCE_MAP
      ? RANKS_SOURCE_MAP[rank as keyof typeof RANKS_SOURCE_MAP]
      : unranked;

  return (
    <div className="grid place-items-center gap-4">
      <img
        src={src}
        alt={rank}
        className="aspect-square h-[50vmin] max-h-[500px] min-h-[250px]"
      />
      <div className="rounded border-2 border-slate-500 bg-slate-800 px-4 py-1 text-center">
        {rank} {division}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-6xl">{lp.toFixed(0)}</span>
        <span className="text-sm">LP</span>
      </div>
    </div>
  );
};

export default RankBadge;
