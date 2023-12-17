const API_KEY = "8457d31ac89cac791bb14c25547a7041";

const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchToprated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchLatest: `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchDocumentaryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDramaMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchWesternMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchMovieName: `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`,
};

export default requests;
