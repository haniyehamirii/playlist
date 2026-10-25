<<<<<<< Updated upstream
=======
import { Canvas } from "@react-three/fiber"
import Album from "./components/Album"
import { Scroll, ScrollControls } from "@react-three/drei"
>>>>>>> Stashed changes


const App = () => {

  return (
<<<<<<< Updated upstream
    <div>
      <h3>playlist</h3>
=======
    <div className="h-screen w-screen">
      <Canvas className="bg-[#ffffff]" camera={{position: [3.4,4,6], fov: 45}}>

        <ambientLight intensity={1.5} />
        <directionalLight
         position={[3, 8, 5]}
         intensity={2}
        />
        <ScrollControls pages={3} damping={0.2}>
        <Scroll>

         <Album 
          title="The Rainbows"
          artist="Radiohead"
          position={[0, 1.8, 0]}
          cover="/covers/rainbows.webp"
         />
         <Album 
          title="Mental Issue"
          artist="Mvshreghi"
          position={[0, 0.7, 0]}
          cover="/covers/mentalissue.webp"
         />
         <Album 
          title="Cry Baby"
          artist="Lil Peep"
          position={[0, -0.8, 0]}
          cover="/covers/crybaby.webp"
         />
    
         </Scroll>
      </ScrollControls>
       
      
      </Canvas>
>>>>>>> Stashed changes
    </div>
  )
}

export default App
