const gameTimer = (sec) => {
  const timerId = setInterval(function () {
    sec -= 1;

    if (sec <= 0) {
      stop();
    }
  }, 1000);

  const stop = setTimeout(function () {
    clearInterval(timerId);
    console.log(`время закончилось`);
  }, sec * 1000);
  return sec;
};

export default gameTimer;
