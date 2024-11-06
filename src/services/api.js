import axios from 'axios';

const API_KEY = '27617d98';
const API_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm, page = 1, type = 'movie') => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        s: searchTerm,
        page: page,
        type: type,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies', error);
    return { Error: 'Something went wrong' };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details', error);
    return { Error: 'Something went wrong' };
  }
};
