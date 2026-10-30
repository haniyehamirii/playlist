
import { RoundedBox, useTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

type playlistProps = {
  position: [number, number, number]
  cover: string
}

const Playlist = ({ position, cover }: playlistProps) => {
  const coverSong = useTexture(cover)
  
  return (
    <group position={position}>
     
      <RoundedBox
        args={[1.4,1.4,0.2]}
        radius={0.099}
        smoothness={4}
      >
        <meshStandardMaterial color="#252525" />
      </RoundedBox>

    
    <mesh position={[0, 0, 0.251]}>
     <planeGeometry args={[1.1,1.1]} />
     <meshBasicMaterial
     map={coverSong}
     toneMapped={false}
     />
   </mesh>
    </group>
  )
}

export default Playlist
