//"use client";
import { NextPage } from "next";
import Map from "../app/Components/Map";

const Home: NextPage = () => {
  const positionInfos = [
    { address: "Colombo International Airport Ratmalana" }, //Add your location here
  ];

  return (
    <div>
      <h1>Map Example</h1>
      <Map positionInfos={positionInfos} />
    </div>
  );
};

export default Home;
