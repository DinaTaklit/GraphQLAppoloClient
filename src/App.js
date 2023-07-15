import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import CharactersList from "./pages/characterList";
import Character from "./pages/character";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/" element={<CharactersList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
