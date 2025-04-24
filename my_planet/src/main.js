import "./style.css";

import * as THREE from "three";

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

//camera

render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//planet

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("./night_earth.jpeg");
const geometry = new THREE.SphereGeometry(10, 27, 20);
const material = new THREE.MeshStandardMaterial({ map: earthTexture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

//light

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(15, 15, 15);
directionalLight.castShadow = true;
scene.add(directionalLight);

//stars

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(100).fill().forEach(addStar);

//animation

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y -= 0.001;

  render.render(scene, camera);
}
animate();
