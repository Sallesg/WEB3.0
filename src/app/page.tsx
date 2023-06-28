"use client";
import { NFTCard } from "@/components/NFTCard/NFTCard";
import Head from "next/head";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const filteredNFTs = useMemo(() => {
    return nfts.filter((nft) =>
      search ? nft.name.toLowerCase().includes(search.toLowerCase()) : true
    );
  }, [search]);

  return (
    <div className="h-full w-screen bg-[#1d1f2b] px-24">
      <Head>
        <title>WEB 3.0 NFT</title>
      </Head>

      <div className="flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24">Discover</h2>

        <input
          className="h-12 w-64 p-4 rounded-xl text-black"
          type="text"
          placeholder="Search Item"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <hr className="w-full border-[#242634] mt-12" />

      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">Popular Bid</h2>
        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          {filteredNFTs.map((nft) => (
            <NFTCard nft={nft} key={nft.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const nfts = [
  {
    id: "1",
    name: "Azuki",
    price: "0.1",
    author: "0x1B345678",
    image:
      "https://i.seadn.io/gcs/files/9a2c1a5aa009ef75f7193bb0b975ef79.png?auto=format&dpr=1&w=1000",
    description: "NFT Description",
  },
  {
    id: "2",
    name: "NFT Name2",
    price: "0.1",
    author: "0x1B345678",
    image:
      "https://i.seadn.io/gcs/files/201e977e2065a277468515e2995866b6.png?auto=format&dpr=1&w=1000",
    description: "NFT Description",
  },
  {
    id: "3",
    name: "NFT Azuki",
    price: "0.1",
    author: "0x1B345678",
    image:
      "https://i.seadn.io/gcs/files/84300059fc800f1146cbf01f559f272f.png?auto=format&dpr=1&w=1000",
    description: "NFT Description",
  },
  {
    id: "4",
    name: "Azuki Name4",
    price: "0.1",
    author: "0x1B345678",
    image:
      "https://i.seadn.io/gcs/files/3d816a4454325b64c3618958d2bc455c.png?auto=format&dpr=1&w=1000",
    description: "NFT Description",
  },
];
