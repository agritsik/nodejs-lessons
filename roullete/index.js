"use strict";

const EventEmitter = require('events');
const Human = require('./human');
const Gun = require('./gun');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
const human = new Human(myEmitter);
const gun = new Gun(myEmitter);



human.game();


