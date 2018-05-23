
import {
    Game,
    Script,
    Geometry,
    Material,
    Mesh,
    Object3D,
    Play
}                                                   from '../lib/development/nova-engine';

let index = 0;

class MyGame extends Game {
    constructor() {
        super();

        this.cube = null;
    }

    awake() {
        console.log('game awake');
        const geometry = new Geometry.PrimitiveBox(1, 1, 1);
        const material = new Material.BasicMesh();

        const mesh = new Mesh(geometry, material);

        this.cube = new Object3D(mesh, 'cube');

        this.scene.add(this.cube);
    }

    start() {
        console.log('game start');
    }

    update() {
        console.log('game update', index++);
        this.cube.rotation.x += 0.01;
    }
}

Play(MyGame);

if (module.hot) {

}
