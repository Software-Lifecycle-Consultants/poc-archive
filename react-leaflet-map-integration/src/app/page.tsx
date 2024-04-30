//"use client";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const Map = dynamic(() => import("@/app/Components/Map"), {
    ssr: false,
  });
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
