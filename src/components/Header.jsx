// src/components/Header.js

import { Link } from 'react-router-dom';

const Header = () => {
  const favoriteCount = JSON.parse(localStorage.getItem('favorites'))?.length || 0;

  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link className='flex justify-start' to="/">Movie Mania</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/favorites">
                Favorites ({favoriteCount})
              </Link>
            </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/membership">Membership</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


