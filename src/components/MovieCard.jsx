import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);


  const checkIfFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return savedFavorites.some((fav) => fav.imdbID === movie.imdbID);
  };

  const handleFavoriteToggle = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {

      const updatedFavorites = savedFavorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {

      savedFavorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    }

    setIsFavorite(!isFavorite);
  };

  if (isFavorite === false && checkIfFavorite()) {
    setIsFavorite(true);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-60" src={movie.Poster} alt={movie.Title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.Title}</div>
        <p className="text-gray-700 text-base">{movie.Year}</p>
        <button
          onClick={handleFavoriteToggle}
          className={`${isFavorite ? 'bg-gradient-to-r from-purple-400 to-purple-500' : 'bg-gradient-to-r from-green-400 to-blue-500'
            } text-white py-1 px-3 rounded mt-3`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
