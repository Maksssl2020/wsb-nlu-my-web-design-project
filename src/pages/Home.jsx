import GameCardsSection from "../components/games-section/GameCardsSection.jsx";
import MainSlider from "../components/slider/main-slider/MainSlider.jsx";
import FreeGamesSection from "../components/games-section/FreeGamesSection.jsx";
import GamesTable from "../components/table/GamesTable.jsx";
import Footer from "../components/footer/Footer.jsx";

function Home() {
  return (
    <div className="mx-20 my-10 lg:mx-40">
      <div className="flex justify-center">
        <MainSlider />
      </div>
      <div className="mx-auto mt-20">
        <GameCardsSection />
      </div>
      <div className="mt-20 flex justify-center">
        <FreeGamesSection />
      </div>
      <div className="mt-20 flex justify-center">
        <GamesTable />
      </div>
    </div>
  );
}

export default Home;
