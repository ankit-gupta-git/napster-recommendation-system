import React, { Suspense } from "react";
import HomeClient from "../components/HomeClient";

const Home = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0c10] text-white flex items-center justify-center">Loading...</div>}>
      <HomeClient />
    </Suspense>
  );
};

export default Home;
