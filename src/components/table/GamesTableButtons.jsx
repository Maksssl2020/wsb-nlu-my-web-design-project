import React from "react";
import GamesTableButton from "./GamesTableButton.jsx";
import MainButton from "../main-elements/MainButton.jsx";

function GamesTableButtons({ text, gamesData }) {
  return (
    <div className="flex flex-col space-y-3 text-custom-white">
      <div className="flex">
        <a className="lg:text-[17px] xl:text-2xl">{text}</a>
        <span className="ml-auto">
          <MainButton
            buttonContent="View More"
            additionalStyling="rounded-md xl:w-[115px] border-2 hover:bg-custom-gray-100 hover:bg-opacity-15 lg:w-[95px] lg:text-sm md:text-xs max-sm:w-[110px]"
          />
        </span>
      </div>
      <div className="items-center justify-between">
        {gamesData.map((data, index) => (
          <GamesTableButton ket={index} buttonContent={data} />
        ))}
      </div>
    </div>
  );
}

export default GamesTableButtons;
