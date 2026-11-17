import { Route, Routes } from "react-router"
import AlbumPage from "./pages/AlbumPage"
import PlaylistPage from "./pages/PlaylistPage"


function App() {

  
  return (
    <Routes>
      <Route path="/" element={<AlbumPage />} />
      <Route path="/playlist" element={<AlbumPage />} />
      <Route path="/playlist/:id" element={<PlaylistPage />} />
    </Routes>
  )
}

export default App