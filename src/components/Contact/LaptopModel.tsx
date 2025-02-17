import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import { Mesh } from 'three'
import { Col, Row } from 'react-bootstrap'
// import HeroPage from './HeroPage'

const Model = ({props} : any) => {
  const group = useRef<THREE.Group>()
  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb') as any;
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if(group == undefined || group.current == undefined)
        return;

    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
  })
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null} scale={1.25}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={(nodes.Cube008 as Mesh).geometry} />
          <mesh material={materials['matte.001']} geometry={(nodes.Cube008_1 as Mesh).geometry} />
          <mesh geometry={(nodes.Cube008_2 as Mesh).geometry}>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, 0.1]} transform occlude>
              <div className="wrapper">
                <Col>
                  <Row style={{marginBottom: "10px"}}>
                    <h1>Don't be shy, say hi!</h1>
                  </Row>
                  <Row>
                    <h2>Feel free to get in touch with me. 
                    I am always open to discussing new projects,
                    creative ideas or opportunities to be
                    part of your visions.
                    </h2>
                  </Row>
                  <Row>
                    <h2>Let's make something great together!</h2>
                  </Row>
                  <Row>
                    <h2 style={{"marginBottom": "-10px"}}>Mail me at: </h2>
                    <a href="mailto:bartosz.litwa@proton.me"><h2>bartosz.litwa@proton.me</h2></a>
                  </Row>
                </Col>
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={(nodes.keyboard as Mesh).geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={(nodes.Cube002 as Mesh).geometry} />
        <mesh material={materials.trackpad} geometry={(nodes.Cube002_1 as Mesh).geometry}/>
      </group>
      <mesh material={materials.touchbar} geometry={(nodes.touchbar as Mesh).geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

const LaptopModel = () => {
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Model />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  )
}

export default LaptopModel