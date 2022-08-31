import Image from "next/image";

const Thumbnail = ({ film }) => {
  console.log(film);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <thumbnail className="m-4 group h-fit cursor-pointer shadow-2xl rounded-3xl">
      <div className="relative">
        <Image
          className="rounded-t-3xl"
          layout="responsive"
          src={
            `${BASE_URL}${film.backdrop_path || film.poster_path}` ||
            `${BASE_URL}${film.poster_path}`
          }
          height={1080}
          width={1920}
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-bravo-dark h-1/2 w-full" />
      </div>
      <div className="p-4 h-fit rounded-b-3xl bg-bravo-dark text-bravo-light">
        <h2 className="text-xl font-Aboreto">
          {film.title || film.original_name}
        </h2>
        <div className="flex flex-col text-xs font-light">
          <p className="p-1">{film.release_date}</p>
          <p className="p-1 truncate max-w-xs">{film.overview}</p>
        </div>
      </div>
    </thumbnail>
  );
};

export default Thumbnail;
