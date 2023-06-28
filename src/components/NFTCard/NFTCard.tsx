/* eslint-disable @next/next/no-img-element */
import IconEth from "@/assets/IconEth";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type NFTCardProps = {
  nft: {
    id: string;
    name: string;
    price: string;
    author: string;
    image: string;
  };
};
export const NFTCard = ({ nft }: NFTCardProps) => {
  const router = useRouter();
  const handleNFTDetail = useCallback(() => {
    router.push(`/details/${nft.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="w-[24rem] h-[31rem] bg-[#242634] rounder-[1.25rem] cursor-pointer"
      onClick={handleNFTDetail}
    >
      <div>
        <img
          className="rounded-[1.25rem] p-2 w-96 h-80"
          src={nft.image}
          alt={nft.name}
        />
      </div>
      <div className="mx-6 mt-4">
        <div className="mb-5">
          <p className="text-2xl font-semibold">{nft.name}</p>
          <p className="text-[#93989A]">By {nft.author}</p>
        </div>

        <div>
          <p className="text-[#93989A]">Current bid</p>
        </div>

        <div className="flex mt-0.5">
          <IconEth />
          <p className="text-xl font-semibold">{nft.price} ETH</p>
        </div>

        <div className="relative">
          <button className="absolute right-1 bottom-0.5 bg-[#ff2748] py-[0.625rem] px-5 rounded-xl hover:scale-105 active:scale-95">
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};
