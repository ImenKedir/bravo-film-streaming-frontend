import React from "react";
import requests from "../utils/requests";

const Nav = () => {
  return (
    <nav className="relative mx-auto max-w-[720px]">
      <div className="py-4 px-12 space-x-10 flex text-2xl whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              className="cursor-pointer transition duration-100 
              transform hover:scale-125 active:text-bravo-accent
              text-Oswald text-light"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-bravo-light h-full w-1/12" />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-bravo-light h-full w-1/12" />
    </nav>
  );
};

export default Nav;
