import { Canvas } from "@react-three/fiber"
import ResponsiveCamera from "../components/ResponsiveCamera"
import { playlistData } from "../data/playlistData"
import Playlist from "../components/Playlist"


const PlaylistPage = () => {
    const base = import.meta.env.BASE_URL
  return (
  <div className="h-screen w-screen">
      <Canvas>
         <ResponsiveCamera />

         <ambientLight intensity={1.5} />
         <directionalLight position={[3,8,5]} intensity={2}/>
        
         {playlistData.map((song) =>
           <group key={song.id}
             position={song.position}
             rotation={song.rotation}
             >
             <Playlist cover={`${base}${song.coverSong}`} /> 
          </group> )}

      </Canvas>
    </div>
  )
}

export default PlaylistPage
