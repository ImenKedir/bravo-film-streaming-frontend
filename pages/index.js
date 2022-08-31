import Head from "next/head";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ films }) {
  return (
    <div>
      <Head>
        <title>Bravo</title>
        <meta name="description" content="video streaming frontend" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Oswald:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
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
