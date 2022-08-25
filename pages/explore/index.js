import React from "react";
import Nav from "../../components/Nav";
import Results from "../../components/Results";
import requests from "../../utils/requests";

const Explore = ({ films }) => {
  return (
    <>
      <Nav />
      <Results films={films} />
    </>
  );
};

export default Explore;

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTopRated.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      films: request.results,
    },
  };
}
