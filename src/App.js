import Container from './components/Container/Container.js'
import NavBar from './components/NavBar/NavBar.js';
import Home from './Home.js';
import About from './components/About/About.js';
import Favorites from './components/Favorite/Favorite.js';
import NotFound from './components/NotFound/NotFound.js';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;