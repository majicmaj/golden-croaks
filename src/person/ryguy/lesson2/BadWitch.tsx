import URL from './assets/witch_image.png';

const Pill = ({ children }: { children: React.ReactNode }) => (
  // We make the pill 200% wide and then scale it back to 50% to make the border-radius shrink
  <div className="grid w-[200%] scale-x-50 place-items-center rounded-full bg-slate-100/70 p-[0.5vmin] px-[3vmin]">
    <div className="w-[50%] scale-x-[200%] font-bold">{children}</div>
  </div>
);

const ManaCost = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex">
    <div className="grid aspect-square h-[3vmin] place-items-center rounded-full bg-slate-300 text-[2vmin]">
      {children}
    </div>
  </span>
);

const StatsBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute -bottom-[1vmin] -right-[1vmin] rounded-full bg-slate-300 px-[2vmin] text-[3vmin] font-bold text-black">
    {children}
  </div>
);

const CardBase = ({ children }: { children: React.ReactNode }) => (
  <div className="grid place-items-center font-serif text-[2.5vmin] text-black">
    <div className="rounded-[2vmin] bg-black p-[2vmin]">
      <div className="bg-rotate mb-[2vmin] flex aspect-[2/3] h-[80vmin] flex-col items-center gap-[0.5vmin] rounded-[1vmin] bg-gradient-to-r from-purple-800 to-teal-800 p-[2vmin]">
        {children}
      </div>
    </div>
  </div>
);

const Card = ({
  name,
  cost,
  type,
  description,
  stats,
}: {
  name: string;
  cost: number;
  type: string;
  description: React.ReactNode;
  stats: string;
}) => {
  return (
    <CardBase>
      <Pill>
        <div className="flex items-center justify-center gap-[1vmin]">
          <span>{name}</span>
          <ManaCost>{cost}</ManaCost>
        </div>
      </Pill>
      <div className="px-[1vmin]">
        <img src={URL} />
      </div>
      <Pill>{type}</Pill>
      <div className="relative flex-1 px-[1vmin]">
        <div className="border-t-none h-full w-full bg-slate-200/80 p-[1vmin] text-[2.25vmin]">
          {description}
        </div>
        <StatsBlock>{stats}</StatsBlock>
      </div>
    </CardBase>
  );
};

const BadWitch = () => (
  <Card
    name="Bad Witch"
    cost={3}
    type="Creature - Eldritch Witch"
    description={
      <div>
        <ManaCost>1</ManaCost> Eldritch Blast: Deal 1 damage to target creature
        or player.
      </div>
    }
    stats="3/2"
  />
);

export default BadWitch;
