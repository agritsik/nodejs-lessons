"use strict";

class Gun {


    constructor(emitter){

        let currentPosition = 0;

        emitter.on('rolling', () =>{
            console.log('rolling...')
            currentPosition = Math.floor(Math.random() * 6);

        });

        emitter.on('shooting', function() {
            console.log('shooting...');
            if(currentPosition == 0) {
                console.log('bullet found');
                // alive = false;
                this.emit('shoot', true);
            } else {
                this.emit('shoot', false);
                console.log("you're lucky");
            }
        });
    }
}

module.exports = Gun