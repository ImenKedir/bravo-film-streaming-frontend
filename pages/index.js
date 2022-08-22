import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VSF</title>
        <meta name="description" content="video streaming frontend" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigini />
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Alumni+Sans+Pinstripe&family=Quicksand:wght@300;400;500;700&display=swap"
          rel="stylesheet"
          i
        />
      </Head>
      <Header />
    </div>
  );
}
