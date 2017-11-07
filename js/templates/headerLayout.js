import GameTimer from '../GameTimer';

const initialHeaderState = {
  lives: 3,
  fullHeart: `heart__full`,
  emptyHeart: `heart__empty`,
  timer: new GameTimer(30)
};

const headerLayout = (state) => `<header class="header">
<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>
<h1 class="game__timer">${state.timer.tick()}</h1>
<div class="game__lives">${new Array(state.lives).fill(`<img src="img/${state.fullHeart}.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
</div>
</header>`;

export default headerLayout(initialHeaderState);
