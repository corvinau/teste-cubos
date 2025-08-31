import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MovieProvider } from './context/MovieContext';
import { ThemeProvider } from './context/ThemeContext';

import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <MovieProvider>
          <div className='app-background-image'>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/movie/:id' element={<MovieDetailsPage />} />
            </Routes>
            <Footer />
          </div>
        </MovieProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
