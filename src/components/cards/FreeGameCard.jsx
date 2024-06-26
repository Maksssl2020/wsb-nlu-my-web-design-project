import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { calcSaleEndDate } from "../../helpers/DateCalculator.js";

function FreeGameCard({ freeGameData }) {
  const [gamePage, setGamePage] = useState(false);
  const { image, title } = freeGameData;

  if (gamePage) {
    return <Navigate to={`/games/${title.replaceAll(" ", "-")}`} />;
  }

  return (
    <div>
      <div
        onClick={() => setGamePage(true)}
        className="rounded-lg border-2 border-transparent transition ease-in-out hover:scale-105 hover:cursor-pointer hover:border-custom-emerald max-3xs:h-[200px] max-3xs:w-[150px] 3xs:h-[300px] 3xs:w-[175px] xs:h-[300px] xs:w-[200px] sm:h-[350px] sm:w-[250px] md:h-[250px] md:w-[150px] lg:h-[300px] lg:w-[200px] xl:h-[350px] xl:w-[250px] 2xl:h-[435px] 2xl:w-[325px]"
      >
        <img
          className="inset-0 h-full w-full self-center rounded-md object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div
        onClick={() => setGamePage(true)}
        className="mt-12 flex flex-col hover:cursor-pointer max-md:mt-6 max-sm:text-xs sm:text-sm"
      >
        <a>{title}</a>
        <a className=" text-custom-gray-100 max-3xs:text-[8px]">{`Free Now - ${calcSaleEndDate()}`}</a>
      </div>
    </div>
  );
}

export default FreeGameCard;
