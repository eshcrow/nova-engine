
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
    }

    awake() {
        console.log('game awake');
        const geometry = new Geometry.PrimitiveBox(1, 1, 1);
        const material = new Material.BasicMesh(new Color(0x12E5F5, true));

        const mesh = new Mesh(geometry, material);

        this.cube = new Object3D(mesh, 'cube');

        this.scene.add(this.cube);
    }

    start() {
        console.log('game start');
    }

    update() {
        this.cube.rotation.x += 0.01;
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
