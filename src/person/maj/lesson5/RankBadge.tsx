import { MASTER_LP, LP_PER_DIVISION, RANKS_SOURCE_MAP } from './constant';
import { getFullRank } from './utils';

// Visible LP is always 0-100 unless in Masters+
const getVisibleLp = (lp: number) => {
  if (lp >= MASTER_LP) return lp - MASTER_LP;
  return (lp % LP_PER_DIVISION).toFixed(0);
};

const getBadge = (rank: string) =>
  rank in RANKS_SOURCE_MAP
    ? RANKS_SOURCE_MAP[rank as keyof typeof RANKS_SOURCE_MAP]
    : RANKS_SOURCE_MAP['Unranked'];

const RankBadge = ({
  rank,
  division,
  lp,
  lastLpPerWin,
  maxLp,
}: {
  rank: string;
  division: string;
  lp: number;
  lastLpPerWin: number;
  maxLp: number;
}) => {
  const src = getBadge(rank);

  return (
    <div className="grid place-items-center gap-4">
      <img
        src={src}
        alt={rank}
        className="-m-[10%] aspect-square h-[40vmin] max-h-[500px] min-h-[250px]"
      />
      <div className="relative overflow-hidden rounded border-2 border-teal-500 bg-slate-800 px-8 py-1 text-center">
        {rank} {division}
        <img
          src={src}
          alt={rank}
          className="absolute left-0 right-0 -translate-y-1/2 opacity-60 blur-md"
        />
      </div>

      <div className="text-center text-sm italic">
        <span>Peak Rank - </span>
        <span>{maxLp ? getFullRank(maxLp) : '_'}</span>
      </div>

      <div className="text-center">
        {lastLpPerWin > 0 ? (
          <span className="text-green-500">+{lastLpPerWin.toFixed(0)} LP</span>
        ) : (
          <span className="text-red-500">{lastLpPerWin.toFixed(0)} LP</span>
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-6xl">{getVisibleLp(lp)}</span>
        <span className="text-sm">LP</span>
      </div>
      {/* Show Peak Rank */}
    </div>
  );
};

export default RankBadge;
