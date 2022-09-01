import Head from "next/head";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import 'animate.css';

export default function Home({ films }) {
  return (
    <div>
      <Head>
        <title>Bravo</title>
        <meta name="description" content="video streaming frontend" />
      </Head>
      <Nav />
      <Results films={films} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genere;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props: {
      films: request.results,
    },
  };
}
