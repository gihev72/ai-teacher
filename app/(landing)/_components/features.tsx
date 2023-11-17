import React from "react";
import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <div className="grid sm:grid-cols-1 gap-6 p-6 place-items-center md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </div>
  );
};

export default Features;
