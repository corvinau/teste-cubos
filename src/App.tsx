import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  return (
    <Router>
      <MovieProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id' element={<MovieDetailsPage />} />
        </Routes>
      </MovieProvider>
    </Router>
  );
};

export default App;
