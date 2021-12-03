import { Timer } from './Timer.js';

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

// callback functions to update timer animations/screen
const cb = {
	onStart() {
		console.log('timer started');
	},
	onTick() {
		console.log('tick');
	},
	onComplete() {
		console.log('timer done');
	}
};

const timer = new Timer(durationInput, startBtn, pauseBtn, cb);
