import { Canvas} from "@react-three/fiber"
import ResponsiveCamera from "../components/ResponsiveCamera"
import { playlistData } from "../data/playlistData"
import Album from "../components/Album"

const AlbumPage = () => {
  const base = import.meta.env.BASE_URL
  return (
    <div className="h-screen w-screen">
      <Canvas>
         <ResponsiveCamera />

         <ambientLight intensity={1.5} />
         <directionalLight position={[3,8,5]} intensity={2}/>
        
         {playlistData.map((song) =>
           <div key={song.id}>
              <Album 
                title={song.title}
                artist={song.artist}
                cover={`${base}${song.coverAlbum}`
              } />
            </div>
          )}

      </Canvas>
    </div>
  )
}

export default AlbumPage

