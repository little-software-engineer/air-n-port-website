import { useEffect, useState } from "react";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Explore from "./components/explore/Explore";
import Airport from "./components/airports/Airport";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Drži stanje trenutne "stranice"

  let heroData = [
    { text1: "Nonstop", text2: "you" },
    { text1: "The journey", text2: "continues" },
    { text1: "Fly", text2: "cooler" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Hero
              setPlayStatus={setPlayStatus}
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}
            />
          </>
        );
      case "explore":
        return <Explore />;
      case "airports":
        return <Airport />;

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div>
      {/* Navbar sada koristi setCurrentPage za navigaciju */}
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
