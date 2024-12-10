
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <HeroSection />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>

    </>

  );
}

export default App;
