import { Canvas} from "@react-three/fiber"
import ResponsiveCamera from "../components/ResponsiveCamera"
import { playlistData } from "../data/playlistData"
import Album from "../components/Album"
import { Scroll, ScrollControls } from "@react-three/drei"

const AlbumPage = () => {
  const base = import.meta.env.BASE_URL
  return (
    <div className="h-screen w-screen">
      <Canvas>
         <ResponsiveCamera position={[3.4,4,6]}/>

         <ambientLight intensity={1.5} />
         <directionalLight position={[3,8,5]} intensity={2}/>

         <ScrollControls pages={3} damping={0.2}>
           <Scroll>
            {playlistData.map((song) =>
           
              <Album 
                position={song.positionAlbum}
                title={song.title}
                artist={song.artist}
                cover={`${base}${song.coverAlbum}`
              } />
            
            )}
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default AlbumPage

