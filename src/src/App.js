import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  // BrowserRouter manages the URL and updates content without page reload
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} /> 
        {/* Dynamic route for character pages */}
        <Route path="/character/:id" element={<CharacterPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}
