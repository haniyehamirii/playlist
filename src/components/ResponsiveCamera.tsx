
import { PerspectiveCamera } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useLayoutEffect, useRef } from "react"
import type { PerspectiveCamera as PerspectiveCameraType } from "three"

const ResponsiveCamera = ({
  position,
}: {
  position: [number, number, number]
}) => {
  const { size } = useThree()
  const cameraRef = useRef<PerspectiveCameraType>(null)

  const isPhone = size.width < 440

  useLayoutEffect(() => {
    cameraRef.current?.lookAt(0, 0, 0)
  }, [position])

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={position}
      fov={isPhone ? 70 : 45}
    />
  )
}

export default ResponsiveCamera
