const gameTimer = (sec) => {
  return {
    'tick': () => {
      sec -= 1;
      if (sec <= 0) {
        return `time is over`;
      }
      return sec;
    }
  };
};

export default gameTimer;
