import { ConnectButton } from "arweave-wallet-kit";
import Image from "next/image";

const Header = ({ home = false }: { home?: boolean }) => {
  return (
    <div className="w-full">
      <div className="mt-0 w-full flex justify-between items-center">
        {!home ? (
          <div className="flex justify-center items-center gap-4">
            <Image src="/1k.png" width={100} height={100} alt="logo" />
            {/* <h1 className="text-5xl font-bold">1k.Fans</h1> */}
          </div>
        ) : (
          <div></div>
        )}
        {!home ? <h1 className="text-5xl font-bold">1K Fans</h1> : <div></div>}

        <div className="mb-4">
          <ConnectButton accent="rgb(0, 0, 0)" profileModal={false} />
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="flex justify-center items-center gap-4">
<Image src="/1k.png" width={100} height={100} alt="logo" />
<h1 className="text-5xl font-bold">1k.Fans</h1>
</div> */
}
