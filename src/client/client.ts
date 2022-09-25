import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// the first 3 things we need => scene, camera, renderer
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x4488ff);

const camera = new THREE.PerspectiveCamera(
    75,
    1,
    0.1,
    1000
)
camera.position.z = 2;

const canvas1 = document.getElementById('canvas1') as HTMLCanvasElement; // casting the return of the getElementById as html canvas type
const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;
console.log(canvas1);

// its necessary to set the size 
const renderer1 = new THREE.WebGLRenderer({canvas: canvas1});
renderer1.setSize(200,200);

const renderer2 = new THREE.WebGLRenderer({canvas: canvas2});
renderer2.setSize(200,200);

new OrbitControls(camera, renderer1.domElement);

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

console.log('scene', scene);
console.dir(scene);

// resizes the view to fit the windo
// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer1.render(scene, camera); // telling the render which scene and which camera, we can have multiple cameras
    renderer2.render(scene, camera);
}

 animate();