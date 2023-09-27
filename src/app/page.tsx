"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import residentEvil from "../../public/images/resident-evil-4.png";
import DealCards from "@/components/DealCards";

export default function Home() {
  const endpoint =
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

  // useEffect(() => {
  //   const result = axios.get(endpoint);

  //   console.log(result);
  // }, []);

  return (
    <main className="h-full">
      <Image
        src={residentEvil}
        alt="Home picture"
        className="min-w-full max-h-[400px] object-fill"
      />

      <div className="flex flex-1 justify-center">
        <div className="flex justify-between px-2 py-1 my-8 rounded border border-pink-600 w-96">
          <input
            type="text"
            className="bg-transparent placeholder:text-pink-600 selection:border-none"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-pink-600"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <DealCards />
    </main>
  );
}
