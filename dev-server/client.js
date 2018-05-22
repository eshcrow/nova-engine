
// let geometry = new Three.BoxGeometry( 1, 1, 1 );
// let material = new Three.MeshBasicMaterial( { color: 0x00ff00 } );
// let cube = new Three.Mesh( geometry, material );
//
// this._scene.add( cube );

import {
    Game,
    Script,
    Geometry,
    Material,
    Mesh,
    Object3D,
    Play
}                                                   from '../lib/development/nova-engine';

class MyGame extends Game {
    awake() {
        console.log('I m awake');
        const geometry = new Geometry.BoxPrimitive(1, 1, 1);
        const material = new Material.MeshBasic();

        const mesh = new Mesh(geometry, material);

        const cube = new Object3D(mesh, 'cube');

        this.scene.add(cube);
    }
}

Play(MyGame);
