class Timer {
	constructor(durationInput, startBtn, pauseBtn, cb) {
		this.durationInput = durationInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;
		//check to see if callbacks passed in, if not won't be added to class instance
		if (cb) {
			this.onStart = cb.onStart;
			this.onTick = cb.onTick;
			this.onComplete = cb.onComplete;
		}

		this.startBtn.addEventListener('click', this.start);
		this.pauseBtn.addEventListener('click', this.pause);
	}
	start = () => {
		if (this.onStart) this.onStart(this.timeRemaining);
		this.tick();
		this.interval = setInterval(this.tick, 25);
	};
	pause = () => {
		clearInterval(this.interval);
	};
	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) this.onComplete();
		} else {
			this.timeRemaining = this.timeRemaining - 0.025;
			if (this.onTick) this.onTick(this.timeRemaining);
		}
	};
	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
	onTimerChange() {}
}

export { Timer };
