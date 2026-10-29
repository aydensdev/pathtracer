import * as THREE from 'three/webgpu';
import { uv, vec3, Fn } from 'three/tsl';
import { shader } from './shader.js'

var width = window.innerWidth;
var height = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
    width / - 2, width / 2, 
    height / 2, height / - 2, 
    1, 1000 
);
camera.translateZ(1);

const renderer = new THREE.WebGPURenderer();
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry(width, height);
const material = new THREE.MeshBasicNodeMaterial()
material.colorNode = shader();

const screen = new THREE.Mesh( geometry, material );
scene.add( screen );

function animate( time ) {
    renderer.render( scene, camera );
}

window.onresize = () => {
    camera.updateMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}