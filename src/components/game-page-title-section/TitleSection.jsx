import React, { useState } from "react";
import Ratings from "./Ratings.jsx";

function TitleSection({ title, ratings }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const additionalSectionsNames = ["Overview", "DLC", "FAQ", "Reviews"];

  function handleActiveButtonClick(buttonIndex) {
    setActiveButtonIndex(buttonIndex);
  }

  return (
    <div>
      <h1 className="font-medium text-custom-white max-md:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
        {title}
      </h1>
      <p className="mt-5">
        <Ratings gameRatingScore={ratings} />
      </p>
      <ul className="mt-6 flex gap-4 text-custom-gray-100 max-md:text-sm lg:text-lg 2xl:text-xl">
        {additionalSectionsNames.map((sectionName, index) => (
          <li key={index}>
            <button
              className={`border-b-2 transition-colors duration-300 hover:border-custom-emerald ${activeButtonIndex === index ? "border-custom-emerald" : "border-transparent"}`}
              onClick={() => handleActiveButtonClick(index)}
            >
              {sectionName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TitleSection;
