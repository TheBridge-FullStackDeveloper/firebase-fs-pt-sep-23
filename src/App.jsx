import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CharactersPage } from './pages/CharactersPage';
import { CharacterDetailPage } from './pages/CharacterDetailPage';
import { NavBar } from './components/NavBar';
import Animals from './pages/Animals';
import Upload from './pages/Upload';

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/upload" element={<Upload />} />
      </Route>
    </Routes>
  );
}

export default App;
