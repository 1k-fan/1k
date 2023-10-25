const PerkBox = ({ color, title }: { color: string; title: string }) => {
  return (
    <>
      <button
        className={`p-8 border-2 rounded-xl text-xl flex justify-between ${color}`}
      >
        <p>{title}</p>
        <div className="text-sm">↵ Go Now</div>
      </button>
    </>
  );
};

export default PerkBox;
