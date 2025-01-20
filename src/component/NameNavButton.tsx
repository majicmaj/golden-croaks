const NameNavButton = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: (name: string) => void;
}) => {
  return (
    <button
      className="p-2 bg-gray-500 rounded"
      onClick={() => handleClick(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default NameNavButton;
