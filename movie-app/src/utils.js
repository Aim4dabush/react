const apiKey = process.env.REACT_APP_API_KEY;

export const getMoviesBySearchTerm = async (search, page) => {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${page}`;
  const movieSearch = await fetch(url);
  return await movieSearch.json();
};

export const getMovieDetailsById = async (id) => {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  const idSearch = await fetch(url);
  return await idSearch.json();
};
