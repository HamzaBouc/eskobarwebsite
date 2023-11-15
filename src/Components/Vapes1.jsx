import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Stage, PresentationControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';





function Modele() {
  const { scene } = useGLTF("/Vape.glb");
  return (
    <Suspense fallback={null}>
      <primitive object={scene} scale={0.03} rotation={[0, Math.PI / 3, 0]} />
    </Suspense>
  );
}

function Vapes() {
  return (
    <div id='Vapes' style={{ display: 'flex' }}>
      <div className='Vapes-title'>
       <h1> Premium Vapes Brand to Ignite Your Senses and Embrace The Adventures</h1>
       <br />
       <p>Lorem ipsum dolor sit, amet consecutor adipscing elit. facere repellat necessatibus dolor ut nesciunt</p>
       <button>Read more</button>
      </div>

     

      
      

      {/* Right Product - Unchanged */}
      <div style={{ flex: 1,padding: "260px 0 0 400px", marginLeft: '10px', marginTop: '50px' }}>
        
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 70 }} style={{width:'500px' , height: '500px' }}>
          <color attach="background" args={['black']} />
          <PresentationControls speed={1.5} global zoom={1} polar={[-0.1, Math.PI / 3]}> {/* Original angle */}
            <Stage environment={null}>
              <Suspense fallback={null}>
                <Modele scale={0.015} />
              </Suspense>
            </Stage>
          </PresentationControls>
        </Canvas>
        <div className="icon-container11">
          
        </div>
      </div>
    </div>
  );
}

export default Vapes;
