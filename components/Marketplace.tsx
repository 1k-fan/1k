import Image from "next/image";
import { useRouter } from "next/navigation";

const Marketplace = () => {
  const router = useRouter();

  const items = [
    {
      id: 1,
      name: "Silver Tier",
      price: "100 Tokens",
      rating: 4.5,
      image: "/silver.png",
    },
    {
      id: 2,
      name: "Gold Tier",
      price: "1000 Tokens",
      rating: 4.2,
      image: "/silver.png",
    },
    {
      id: 3,
      name: "Platinum Tier",
      price: "5000 Tokens",
      rating: 4.7,
      image: "/silver.png",
    },
  ];

  return (
    <div className="mt-8 w-full">
      <h1 className="text-2xl font-semibold mb-4">Marketplace</h1>
      {items.map((item) => (
        <div
          key={item.id}
          className=" p-4rounded-lg shadow-md flex gap-10 items-center"
          onClick={() => router.push(`/item/${item.id}`)}
        >
          <Image src={item.image} width={200} height={200} alt="image" />
          <div className="">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.price}</p>
            <div className="flex items-center">
              <span className="text-yellow-500 text-sm">★ {item.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marketplace;
