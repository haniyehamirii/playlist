import { PerspectiveCamera } from "@react-three/drei"
import { useThree } from "@react-three/fiber"


const ResponsiveCamera = () => {

    const {size} = useThree()


    const isPhone = size.width < 440 
  return (
    <PerspectiveCamera makeDefault position={[0,0,7]} fov={isPhone ? 65 : 45} />
  )
}

export default ResponsiveCamera
