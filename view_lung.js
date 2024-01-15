// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

window.addEventListener("DOMContentLoaded", init);


function view_lung(canvas_name, file_name) {
  const width = 450;
  const height = 450;

  const canvasElement = document.querySelector(canvas_name);
  const renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(350, -500, -500);

  const controls = new THREE.OrbitControls(camera, canvasElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;

  // 環境光源
  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.intensity = 0.5;
  scene.add(ambientLight);

  // 並行光源1
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.intensity = 0.5;
  directionalLight.position.set(-1000, -3000, -1000);
  scene.add(directionalLight);

  // 並行光源2
  const directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.intensity = 0.5;
  directionalLight2.position.set(1000, 3000, 1000);
  scene.add(directionalLight2);

  const objLoader = new THREE.OBJLoader();
  objLoader.load(
    file_name,
    function (obj) {
      scene.add(obj);
      obj.position.x = -200;
      obj.position.y = -400;
      obj.position.z = -200;
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
  view_lung("#canvas3", "sdy25_1.obj");
  view_lung("#canvas4", "sdy36_1.obj");

}

