import React from "react";
import Thumbnail from "./Thumbnail";

const Results = ({ films }) => {
  return (
    <div className="p-2 grid md:grid-cols-2 lg:grid-cols-3">
      {films.map((film) => {
        return <Thumbnail key={film.id} film={film} />;
      })}
    </div>
  );
};

export default Results;
