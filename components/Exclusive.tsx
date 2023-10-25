import PerkBox from "./PerkBox";

const perkOptions = [
  { title: "👕 Merch", color: "bg-red-500 bg-opacity-30" },
  { title: "🎫 Tickets", color: "bg-green-500 bg-opacity-30" },
  { title: "🎥 Live Sessions", color: "bg-blue-500 bg-opacity-30" },
  { title: "📹 Videos", color: "bg-purple-500 bg-opacity-30" },
  { title: "📰 Newsletters", color: "bg-yellow-500 bg-opacity-30" },
];

const Exclusive = () => {
  return (
    <div>
      <div className="">
        <h1 className="font-semibold p-4 text-4xl">Portal</h1>
        <div className="flex flex-col gap-4">
          {perkOptions.map((perk, index) => {
            return (
              <PerkBox color={perk.color} title={perk.title} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
