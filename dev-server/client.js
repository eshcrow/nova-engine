
import {
    Game,
    Script,
    Geometry,
    Color,
    Material,
    Mesh,
    Object3D,
    PlayStateManager
}                                                   from '../lib/development/nova-engine';

class CubixGame extends Game {
    constructor() {
        super();

        this.cube = null;
        this.sphere = null;
    }

    awake() {
        console.log('game awake');
        const cubeGeo = new Geometry.PrimitiveBox(1, 1, 1);
        const cubeMat = new Material.BasicMesh(new Color(0x12E5F5, true));

        const cubeMesh = new Mesh(cubeGeo, cubeMat);
        this.cube = new Object3D(cubeMesh, 'cube_0');

        const sphereGeo = new Geometry.Sphere(2, 8, 6);
        const sphereMat = new Material.BasicMesh(new Color(0x05FF7F, true));

        const sphereMesh = new Mesh(sphereGeo, sphereMat);
        this.sphere = new Object3D(sphereMesh, 'sphere_0');

        this.scene.add(this.cube);
        this.scene.add(this.sphere);
    }

    start() {
        console.log('game start');

        this.sphere.position.x = -4;
        this.sphere.position.z = -2
    }

    update() {
        this.cube.rotation.y += 0.05;
        this.sphere.rotation.y += 0.05;
    }
}

const cubixPlayManager = new PlayStateManager(CubixGame);
cubixPlayManager.play();

if (module.hot) {
    module.hot.accept();

    module.hot.dispose(() => {
        cubixPlayManager.stop();
        cubixPlayManager.destroy();
    })
}
