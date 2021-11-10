import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
function Mouse() {
  const modelRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    // scene.environment = new THREE.Color(0xFFFFFF)

    // Set camera
    const camera = new THREE.PerspectiveCamera(75, modelRef.current.clientWidth / modelRef.current.clientHeight, 0.1, 10000);

    // Create model loader
    const mouseLoader = new GLTFLoader();

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    // renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( modelRef.current.clientWidth, modelRef.current.clientHeight );
    renderer.setPixelRatio(window.devicePixelRatio * 2);

    modelRef.current.appendChild( renderer.domElement );

    // Prepare Cube Map
    var loader = new THREE.CubeTextureLoader();
    loader.setPath('skybox/');

    var textureCube = loader.load([
      'right.jpg', // right
      'left.jpg', // left
      'top.jpg', // top
      'bottom.jpg', // bottom
      'front.jpg', // front
      'back.jpg', // back
    ]);

    // scene.background = textureCube; // background
    scene.environment = textureCube;

    mouseLoader.load(
      // resource URL
      'mouse/scene.gltf',
      // 'car/scene.gltf',
      // called when the resource is loaded
      function (gltf) {
        scene.add(gltf.scene)
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // called when loading has errors
      function (error) {
        console.log( 'An error happened' );
      }
    )

    // const geometry = new THREE.SphereGeometry( 15, 32, 16 );
    // const material = new THREE.MeshStandardMaterial( {
    //   color: 0xffffff,
    //   metalness: 1,
    //   roughness: 0,
    // });
    // const sphere = new THREE.Mesh( geometry, material );
    // scene.add( sphere );

    // Lighting

    const ambientLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.5 );
    // ambientLight.intensity = 20;
    scene.add(ambientLight)

    // White directional light at half intensity shining from the top.
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    // directionalLight.intensity = 20;
    directionalLight.position.set(5, 5, -5);
    scene.add( directionalLight );


    // Camera Position

    camera.position.set(0, 0, 5);

    const controls = new OrbitControls( camera, renderer.domElement );

    function onWindowResize(){
        camera.aspect = modelRef.current.clientWidth / modelRef.current.clientHeight;
        camera.updateProjectionMatrix();
        // Hard code height for infinite scroll
        renderer.setSize(modelRef.current.clientWidth, modelRef.current.clientHeight);
    }

    window.addEventListener( 'resize', onWindowResize );

    const animate = function () {
      requestAnimationFrame( animate );
      // scene.rotateY(0.01);
      controls.update();
      renderer.render( scene, camera );
    };

    animate();

    return () => {
      modelRef.current.removeChild( renderer.domElement );
    };
  }, [])

  return (
    <div
      style={{
        flexGrow: 1,
        position: 'relative'
      }}
    >
      <div
        ref={modelRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >

      </div>
    </div>
  )
}

export default Mouse
