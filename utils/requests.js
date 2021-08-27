const API_KEY = process.env.API_KEY

export default {
  fetchTrending:{
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  FetchTopRated:{
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  FetchActionMovies:{
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  FetchComedyMovies:{
    title: "Comdey",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  fetchHorrorMovies:{
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  fetchRomanceMovies:{
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  },
  fetchMystery:{
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchScifi:{
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
  },
  FetchWestern:{
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
  },
  FetchAnimation:{
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
  },
  FetchTV:{
    title: "TV movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
  },
}