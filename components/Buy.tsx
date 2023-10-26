"use Client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Buy = () => {
  const router = useRouter();
  const handleBuy = () => {
    alert("Buy action triggered.");
    router.push("/ts/exclusive");
  };

  return (
    <div className="min-h-screen flex flex-col  w-full ">
      <div className="p-8 rounded-lg shadow-md w-full">
        {/* <h1 className="text-2xl font-semibold mb-4">Buy NFT</h1> */}
        <div className="flex">
          <div className="w-1/2">
            <Image
              width={800}
              height={800}
              src="/platinum.jpeg"
              alt="NFT example"
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <div className="text-2xl py-4 pt-8">Asset Rights</div>
              <div className="flex items-center justify-between">
                <Image
                  src="/udl-modified.png"
                  width={200}
                  height={200}
                  alt="udl"
                />
                <a
                  className="text-xl"
                  href="https://udlicense.arweave.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  License Text
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <div className="text-gray-700 mb-4">
              <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col">
                <h1 className="text-3xl font-bold mb-8 place-self-center">
                  {/* 🌟 Platinum Tier Membership 🌟 */}
                  Platinum Tier Membership
                </h1>
                <h2 className="text-2xl font-semibold mb-3">
                  What's Included:
                </h2>

                <ul className="list-disc pl-8 mb-6">
                  <li className="mb-2">
                    👕 <strong>Exclusive Merchandise Access</strong>
                    <p>
                      Get your hands on limited edition merchandise available
                      only to our Platinum Tier members.
                    </p>
                  </li>
                  <li className="mb-2">
                    🎤 <strong>Live Shows & Backstage Access</strong>
                    <p>
                      Secure your spot at select live shows and enjoy an
                      unparalleled concert experience, complete with backstage
                      access and a chance to meet [Musician's Name].
                    </p>
                  </li>
                  <li className="mb-2">
                    🎥 <strong>Exclusive Video Content</strong>
                    <p>
                      Be the first to watch new music videos, behind-the-scenes
                      footage, and other exclusive video content.
                    </p>
                  </li>
                  <li className="mb-2">
                    🎧 <strong>Pre-Release Music Streams</strong>
                    <p>
                      Listen to upcoming singles and albums before they're
                      available to the general public.
                    </p>
                  </li>
                  <li className="mb-2">
                    💬 <strong>Fan Community Access</strong>
                    <p>
                      Become part of an exclusive online community where you can
                      chat with other super-fans and occasionally even
                      [Musician's Name] themself!
                    </p>
                  </li>
                  <li className="mb-2">
                    🎟️ <strong>Priority Ticketing</strong>
                    <p>
                      Gain priority access to ticket releases for concerts and
                      other events.
                    </p>
                  </li>
                  <li className="mb-2">
                    🛒 <strong>Merchandise Discounts</strong>
                    <p>Enjoy a 15% discount on all official merchandise.</p>
                  </li>
                  <li className="mb-2">
                    💌{" "}
                    <strong>Personalized Birthday and Holiday Messages</strong>
                    <p>
                      Receive personalized messages from [Musician's Name]
                      during special occasions.
                    </p>
                  </li>
                </ul>

                {/* <h2 className="text-2xl font-semibold mb-3">Available:</h2> */}
                {/* <p className="text-lg mb-6">35 of 100 Tokens Available</p> */}
                <div className="justify-center items-center w-full flex flex-col">
                  <div className="text-xl font-semibold mb-6 mt-3">
                    35 of 100 Tokens Available
                  </div>
                  <button
                    className="bg-blue-500 text-white rounded-lg px-8 py-2"
                    onClick={handleBuy}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
