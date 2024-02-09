import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CharactersPage } from "./pages/CharactersPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";
import { NavBar } from "./components/NavBar";
import Animals from "./pages/Animals";
import Upload from "./pages/Upload";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import RequireAuth from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
