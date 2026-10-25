import { Text, useTexture, RoundedBox } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"
import * as THREE from "three";

type albumProps = {
    title:string
    artist: string
    cover: string
    position: [number,number,number]
}

const Album = ({title,artist,cover,position}:albumProps) => {

  const [isHovered, setIsHovered] = useState<boolean>(false)
  const albumCover = useTexture(cover)
  const groupRef = useRef<THREE.Mesh>(null)

useFrame((state) => {
  if (!groupRef.current) return

  groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.04
})

  return (
    <group ref={groupRef} position={position}>
      
    
       <RoundedBox
         onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
         onPointerLeave={() => setIsHovered(false)}
         args={[1.8, 0.18, 2]}
         radius={0.09}
         smoothness={4}> 
         <meshStandardMaterial color={isHovered? '#222' : '#000'}/>
       </RoundedBox>
      


     <mesh position={[0.05, 0.092, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.4,1.4]} />
      <meshBasicMaterial map={albumCover} toneMapped={false} transparent />
     </mesh>

     <Text
      position={[0, 0.05, 1.011]}
      fontSize={0.11}
      color="white"
      anchorX="center"
      anchorY="middle"
      maxWidth={2.8}
      fontWeight='bold'
     >
        {artist} - {title}
     </Text>


    </group>
  )
}

export default Album
