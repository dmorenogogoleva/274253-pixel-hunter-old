class GameTimer {

  constructor(sec) {
    this.sec = sec;
  }

  getTime() {
    return this.sec;
  }

  tick() {
    this.sec -= 1;
    if (this.sec <= 0) {
      return `time is over`;
    }
    return this.sec;
  }
}

export default GameTimer;
