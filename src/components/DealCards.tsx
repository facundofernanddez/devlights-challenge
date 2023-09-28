"use client";

import { IVideogame } from "@/types/videogame";
import Image from "next/image";
import { MouseEvent, useContext, useState } from "react";
import { TotalPriceContext } from "./providers/TotalPriceProvider";

interface DealCardsProps {
  filteredVideogames: IVideogame[];
}

export default function DealCards({ filteredVideogames }: DealCardsProps) {
  //state to use when selecting videogames
  const [selectedVideogames, setSelectedVideogames] = useState<number[]>([]);

  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);

  const calculateStars = (percent: number) => {
    const maxStars = 5;

    const starPercentage = percent / 20; // calculate porcent per star;

    return Math.min(maxStars, Math.ceil(starPercentage)); // return the min number of the stars;
  };

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    index: number,
    price: number
  ) => {
    e.preventDefault();

    if (selectedVideogames.includes(index)) {
      //already selected then remove selection
      setSelectedVideogames(selectedVideogames.filter((i) => i !== index));

      //TODO: fix totalPrice when substract it
      setTotalPrice(totalPrice - price);
    } else {
      //add selection
      setSelectedVideogames([...selectedVideogames, index]);
      setTotalPrice(totalPrice + price);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 mx-80">
      {filteredVideogames.map((videogame, index) => {
        const isSelected = selectedVideogames.includes(index); // variable to use for selection;

        const starCount = calculateStars(Number(videogame.steamRatingPercent));

        if (selectedVideogames.length === 0) {
          setTotalPrice(0);
        }

        return (
          <div
            key={index}
            className={`${
              isSelected ? "border border-pink-600" : ""
            } p-4 justify-center items-center rounded min-w-full`}
          >
            <div className="flex relative">
              <Image
                src={videogame.thumb}
                alt="deal image"
                className="object-cover"
                width={500}
                height={500}
              />
              <span className="flex items-center justify-center absolute -top-7 -right-7 bg-red-600 rounded-full w-16 h-16">
                {Math.trunc(Number(videogame.savings))}%off
              </span>
            </div>
            <h3 className="font-semibold mt-2 truncate">{videogame.title}</h3>

            <p className="text-center mt-6 font-extralight">Steam Review</p>

            <div className="flex justify-between mx-20 py-4 text-yellow-600">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < starCount ? "yellow" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              ))}
            </div>

            <button
              onClick={(e) =>
                handleClick(e, index, Number(videogame.salePrice))
              }
              className="bg-pink-600 min-w-full py-2 mt-2 rounded-lg flex justify-center gap-3 items-center"
            >
              <p className="line-through text-xs">${videogame.normalPrice}</p>
              <p className="text-lg font-semibold">${videogame.salePrice}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}
