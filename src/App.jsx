// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetails';
import Login from './pages/Login';
import Membership from './pages/Membership';
import FavoritesPage from './pages/FavoritesPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/favorites" element={<FavoritesPage />} /> {/* Route for Favorites Page */}
    </Routes>
  </Router>
);

export default App;
