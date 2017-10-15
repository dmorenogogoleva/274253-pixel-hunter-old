import createElement from './createElement';
import showScreen from './showScreen';
import statsLayoutDom from './statsScreen';
import headerLayout from './headerLayout';
import statsLayout from './statsLayout';
import footerLayout from './footerLayout';
import backToGreetingScreen from './backToGreetingScreen';

const pickPaintingFromImagesLayout = `
${headerLayout}
<div id="game-3-div" class="game-3 central__content">
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
      </form>
${statsLayout}
    </div>
  </div>
  ${footerLayout}`;

const pickPaintingFromImagesLayoutDom = createElement(pickPaintingFromImagesLayout);
const showStatsScreen = () => showScreen(statsLayoutDom);

const gameOptions = pickPaintingFromImagesLayoutDom.querySelectorAll(`.game__option`);

gameOptions.forEach(function (btn) {
  btn.addEventListener(`click`, showStatsScreen);
});

backToGreetingScreen(pickPaintingFromImagesLayoutDom);

export default pickPaintingFromImagesLayoutDom;
