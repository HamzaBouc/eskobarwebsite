import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Stage, PresentationControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import StatBar from '../Components/StatBar';
import EU from "../images/EU.png";
import Age from "../images/18+.png";
import Morocco from "../images/morocco.png";

function Model() {
  const { scene } = useGLTF("/octopus.glb");
  return <primitive object={scene} scale={0.02} />;
}

function Modele() {
  const { scene } = useGLTF("/vape.glb");
  return <primitive object={scene} scale={0.02} />;
}

function Vapes() {
  return (
   
    <div id='Vapes' style={{ display: 'flex' }}>
      <div className='HAHA'>
      
      </div>
      
      {/* Left Product */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <h1>Vapes medellin</h1>
       
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 40 }} style={{ height: '400px' }}>
          <color attach="background" args={['black']} />
          <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Stage>
          </PresentationControls>
        </Canvas>
        <div className="icon-container11">
    <img src= { Age } alt="Icon 1" />
    <img src={ EU } alt="Icon 2" />
  </div>
      </div>

      {/* Stat Bar */}
      <div style={{ flex: 1 }}>
        <div className='Statbar'>
          <StatBar label="Battery" targetPercentage={90} duration={5000} />
          <StatBar label="Firing button" targetPercentage={80} duration={5000} />
          <StatBar label="Safety Features" targetPercentage={95} duration={5000} />
          <StatBar label="Coil build up" targetPercentage={80} duration={5000} />
        </div>
      </div>

      {/* Right Product */}
      <div style={{ flex: 1, marginLeft: '10px' }}>
        <h1>Vapes Empire</h1>
      
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 40 }} style={{ height: '400px' }}>
          <color attach="background" args={['black']} />
          <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              <Suspense fallback={null}>
                <Modele />
              </Suspense>
            </Stage>
          </PresentationControls>
        </Canvas>
        <div className="icon-container11">
        <img src= { Age } alt="Icon 1" />
    <img src={ Morocco } alt="Icon 2" />
  </div>
      </div>
    </div>
  );
}

export default Vapes;
