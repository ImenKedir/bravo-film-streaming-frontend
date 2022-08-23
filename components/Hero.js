import React from "react";
import Image from "next/image";
import svg from "../assets/ppperspective.svg";
import { PlayIcon } from "@heroicons/react/outline";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image className="text-bravo-dark" src={svg} width="400" height="400" />
      <div className="absolute z-10">
        <PlayIcon className="h-20 text-bravo-light hover:text-bravo-accent" />
      </div>
    </div>
  );
};

export default Hero;
