import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const data = await fetchMovies('english', 1);
      setMovies(data.Search || []);
      setLoading(false);
    };
    getMovies();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    const data = await fetchMovies(query, 1);
    setMovies(data.Search || []);
    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>taking time to serve you better...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-3 grid-flow-row">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
