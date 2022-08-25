const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/action/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/comedy/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/horror/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/romance/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/mystery/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchSciFiMovies: {
    title: "Sci-Fi",
    url: `/scifi/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchWesternMovies: {
    title: "Western",
    url: `/western/all/week?api_key=${API_KEY}&language=en-US`,
  },
  Animation: {
    title: "Animation",
    url: `/animaiton/all/week?api_key=${API_KEY}&language=en-US`,
  },
};
