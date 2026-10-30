import { Canvas, useThree } from "@react-three/fiber"
import Album from "./components/Album"
import { Scroll, ScrollControls } from "@react-three/drei"
import Playlist from "./components/Playlist"

function App() {
  const base = import.meta.env.BASE_URL
  
  return (
    <div className="h-screen w-screen">
      <Canvas
        className="bg-[#ffffff]"
        camera={{ position: [0, 1, 6], fov: 68}}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 8, 5]}
          intensity={2}
        />


  {/* Center album */}
<Playlist
  position={[0, 0.15, 0.15]}
  cover={`${base}covers/rainbows.webp`}
/>

<group
  position={[-1, 0, -0.5]}
  rotation={[0, 0.7, 0]}
>
  <Playlist
    position={[0, 0, 0]}
    cover={`${base}covers/rainbows.webp`}
  />
</group>

{/* Right album */}
<group
  position={[1, 0, -0.5]}
  rotation={[0, -0.7, 0]}
>
  <Playlist
    position={[0, 0, 0]}
    cover={`${base}covers/rainbows.webp`}
  />
</group>
      </Canvas>
    </div>
  )
}

export default App