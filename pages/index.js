import Head from "next/head";

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
    </div>
  );
}
