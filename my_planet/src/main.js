import "./style.css";

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

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

//camera and size

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
directionalLight.position.set(-5, 15, 11);
directionalLight.castShadow = true;
scene.add(directionalLight);

//stars

function addStar() {
  const starTexture = textureLoader.load("./glow_texture.png");
  const geometry = new THREE.SphereGeometry(1, 24, 24);
  const material = new THREE.MeshBasicMaterial({
    map: starTexture,
    color: 0xffffff,
  });
  const star = new THREE.Mesh(geometry, material);

  const [x, y] = Array(2)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(window.innerWidth * 2));
  const z = THREE.MathUtils.randFloatSpread(400) - 500;

  star.position.set(x, y, z);
  scene.add(star);
}

const composer = new EffectComposer(render);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,
  0.4,
  0.85
);
composer.addPass(bloomPass);

Array(3000).fill().forEach(addStar);

//animation

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y -= 0.001;

  composer.render(scene, camera);
}
animate();
