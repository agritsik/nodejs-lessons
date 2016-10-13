"use strict";

class Human {

    constructor(emitter) {
        this._emitter = emitter;

        this._emitter.on('shoot', (fired) => {
            if (fired) {
                console.log('oops, game over!')
            } else {
                setTimeout(() => this.game(1, 2), 100);
            }
        });

    }

    game() {
        console.log(">>>>");
        this._emitter.emit('rolling');
        this._emitter.emit('shooting');
    }

}

module.exports = Human