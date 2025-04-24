import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { add, array } from "three/tsl";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const render = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

render.render(scene, camera);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(100).fill().forEach(addStar);

const controls = new OrbitControls(camera, render.domElement);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y -= 0.001;

  controls.update();

  render.render(scene, camera);
}
animate();
