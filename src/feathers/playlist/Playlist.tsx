
import { Html, RoundedBox, Text, useTexture } from "@react-three/drei"
import { FaCirclePlay } from "react-icons/fa6";


type playlistProps = {
  position: [number, number, number]
  cover: string
}

const Playlist = ({ position, cover }: playlistProps) => {
  const coverSong = useTexture(cover)
  
  return (
    <group position={position}>
     
      <RoundedBox
        args={[1.5,1.7,0.2]}
        radius={0.099}
        smoothness={4}
      >
        <meshStandardMaterial color="#252525" />
      </RoundedBox>
     

     <Text position={[0, 0.7,0.3]} fontSize={0.08} fontWeight='bold'>
       Radiohead
     </Text>
   

    <mesh position={[0, 0.1, 0.251]}>
     <planeGeometry args={[0.8,0.8]} />
     <meshBasicMaterial
      transparent
      map={coverSong}
      toneMapped={false}
     />
   </mesh>
   <Html position={[1.7,-0.4,0.4]}>
    <FaCirclePlay size={24} color="#fff" />
   </Html>
    
  

   <Text position={[-0.4, -0.4, 0.3]} fontSize={0.07} fontWeight='bold'>
     Weird Fish
   </Text>

 {/* Progress track */}
   <RoundedBox
    args={[1, 0.025, 0.02]}
    radius={0.01}
    smoothness={4}
    position={[0, -0.6, 0.15]}
   >
    <meshBasicMaterial color="#555555" />
  </RoundedBox>

    </group>
  )
}

export default Playlist
