// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

window.addEventListener("DOMContentLoaded", init);


function view_lung(canvas_name, file_name) {
  const width = 600;
  const height = 600;

  const canvasElement = document.querySelector(canvas_name);
  const renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(700, 700, 1000);

  const controls = new THREE.OrbitControls(camera, canvasElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;

  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.intensity = 0.5;
  scene.add(ambientLight);

  const objLoader = new THREE.OBJLoader();
  objLoader.load(
    file_name,
    function (obj) {
      scene.add(obj);
    },
  );

  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
  animate();
}

function init() {

  view_lung("#canvas1", "sdy02_1.obj");
  view_lung("#canvas2", "sdy13_1.obj");
  view_lung("#canvas3", "sdy02_1.obj");
  view_lung("#canvas4", "sdy02_1.obj");

}

