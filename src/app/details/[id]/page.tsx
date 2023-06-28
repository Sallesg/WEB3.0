"use client";
/* eslint-disable @next/next/no-img-element */
import { nfts } from "@/app/page";
import { NFTCard } from "@/components/NFTCard/NFTCard";
import Head from "next/head";

export default function nft({ params }: { params: { id: string } }) {
  const nftId = nfts.find((nft) => nft.id === params.id);

  return (
    <div className="px-24">
      <Head>
        <title>{nftId?.name} NFT - Details Page</title>
      </Head>
      <div className="mt-24 flex justify-between">
        <img
          className="rounded-[1.25rem] w-[50%] h-auto"
          src={nftId?.image}
          alt={nftId?.name}
        />
        <div className="ml-10 w-[50%]">
          <h1 className="text-5xl font-bold">{nftId?.name}</h1>
          <p className="text-[#93989A] mt-4">{nftId?.description}</p>

          <hr className="w-full border-[#242634] mt-8 mb-4" />

          <div>
            <p className="text-[#93989A]">Creator</p>
            <small>{nftId?.author}</small>
          </div>

          <hr className="w-full border-[#242634] mt-8 mb-4" />

          <div>
            <button className=" right-1 bottom-0.5 bg-[#ff2748] py-[1rem] px-6 rounded-xl hover:scale-105 active:scale-95">
              Place a Bid
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-4xl mt-24">More Works</h2>
        <div className="flex flex-wrap items-start gap-16 mt-7">
          {nfts
            .filter((_nft, index) => index < 3)
            .map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
        </div>
      </div>
    </div>
  );
}
