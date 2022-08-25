import Image from "next/image";

const Thumbnail = ({ film }) => {
  console.log(film);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <thumbnail className="p-4 group cursor-pointer">
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
      <div className="p-4 rounded-b-3xl bg-bravo-dark text-bravo-light">
        <h2 className="text-2xl font-Aboreto">
          {film.title || film.original_name}
        </h2>
        <div className="flex text-sm font-light">
          <p>{film.release_date}</p>
        </div>
      </div>
    </thumbnail>
  );
};

export default Thumbnail;
