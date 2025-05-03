import "../style.css";

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

//canvas size info
const container = document.getElementById("canvas-container");
const canvas = document.getElementById("planet");

const width = container.clientWidth;
const height = container.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

const render = new THREE.WebGLRenderer({
  canvas: document.querySelector("#planet"),
});

scene.background = null;
scene.background = new THREE.Color("#051B17");
//camera and size

render.setPixelRatio(window.devicePixelRatio);
render.setSize(width, height);
camera.position.setZ(30);

//dinamic resize
function resizeRenderToContainer() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  render.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  composer.setSize(width, height);
}

window.addEventListener("resize", resizeRenderToContainer);
//planet

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("../night_earth.jpeg");

const geometry = new THREE.SphereGeometry(10, 27, 20);
const material = new THREE.MeshStandardMaterial({ map: earthTexture });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.x = -10;
scene.add(sphere);

//light

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-5, 15, 11);
directionalLight.castShadow = true;
scene.add(directionalLight);

//stars

const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const starVertices = [];

for (let i = 0; i < starCount; i++) {
  const x = THREE.MathUtils.randFloatSpread(width * 2);
  const y = THREE.MathUtils.randFloatSpread(height * 2);
  const z = THREE.MathUtils.randFloatSpread(400) - 500;
  starVertices.push(x, y, z);
}

starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starVertices, 3)
);

const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.7,
  sizeAttenuation: true,
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

const composer = new EffectComposer(render);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(width, height),
  1.5,
  0.4,
  0.85
);
composer.addPass(bloomPass);

//animation

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y -= 0.001;

  composer.render(scene, camera);
}
animate();
