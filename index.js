import { Timer } from './Timer.js';

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const timerCircle = document.querySelector('#timer-circle');
const perimeter = timerCircle.getAttribute('r') * 2 * Math.PI;
let duration;

// callback functions to update timer animations/screen
const cb = {
	onStart(totalDuration) {
		duration = totalDuration;
		timerCircle.setAttribute('stroke-dasharray', perimeter);
		console.log('timer started');
	},
	onTick(timeRemaining) {
		timerCircle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
		console.log('tick');
	},
	onComplete() {
		console.log('timer done');
	}
};

const timer = new Timer(durationInput, startBtn, pauseBtn, cb);
