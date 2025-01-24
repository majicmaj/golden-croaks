const URL =
  'https://cdn.discordapp.com/attachments/1224986110980001832/1332384390180900955/file-DnjT6SkTB752sKfnMegvw2.png?ex=67950f29&is=6793bda9&hm=4e40501f1acc6a4a6c7cc71a89747b4772ba2c4b11a205fd46c1958511575b9c&format=webp&quality=lossless&width=615&height=615';

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
  <div className="absolute -bottom-[1vmin] -right-[1vmin] rounded-full border-[0.25vmin] border-black bg-amber-300 bg-gradient-to-r from-stone-300/50 to-stone-300/50 px-[2vmin] text-[3vmin] font-bold text-black">
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

const Card = ({ name, cost, type, description, stats }) => {
  return (
    <CardBase>
      <Pill>
        <div className="flex items-center justify-between gap-[1vmin]">
          <span>{name}</span>
          <ManaCost>{cost}</ManaCost>
        </div>
      </Pill>
      <img src={URL} className="px-[1vmin]" />
      <Pill>{type}</Pill>
      <div className="relative flex-1 px-[1vmin]">
        <div className="h-full w-full bg-slate-200/80 p-[1vmin] text-[2.25vmin]">
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
