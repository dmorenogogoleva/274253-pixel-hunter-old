var showScreen = (function () {
'use strict';

const createElement = function (container, layout) {
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  container.appendChild(newDiv);
};

const central = document.querySelector(`.central`);

const showScreen = function (layout, showNextScreen) {
  central.innerHTML = ``;

  createElement(central, layout);

  if (typeof showNextScreen === `function`) {
    showNextScreen();
  }
};

return showScreen;

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd1NjcmVlbi5qcyIsInNvdXJjZXMiOlsianMvY3JlYXRlRWxlbWVudC5qcyIsImpzL3Nob3dTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChjb250YWluZXIsIGxheW91dCkge1xuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgbmV3RGl2LmlubmVySFRNTCA9IGxheW91dDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5jb25zdCBjZW50cmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbnRyYWxgKTtcblxuY29uc3Qgc2hvd1NjcmVlbiA9IGZ1bmN0aW9uIChsYXlvdXQsIHNob3dOZXh0U2NyZWVuKSB7XG4gIGNlbnRyYWwuaW5uZXJIVE1MID0gYGA7XG5cbiAgY3JlYXRlRWxlbWVudChjZW50cmFsLCBsYXlvdXQpO1xuXG4gIGlmICh0eXBlb2Ygc2hvd05leHRTY3JlZW4gPT09IGBmdW5jdGlvbmApIHtcbiAgICBzaG93TmV4dFNjcmVlbigpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93U2NyZWVuO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sYUFBYSxHQUFHLFVBQVUsU0FBUyxFQUFFLE1BQU0sRUFBRTtFQUNqRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztFQUMxQixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQy9CLENBQUEsQUFFRCxBQUE2Qjs7QUNKN0IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O0FBRW5ELE1BQU0sVUFBVSxHQUFHLFVBQVUsTUFBTSxFQUFFLGNBQWMsRUFBRTtFQUNuRCxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDOztFQUV2QixhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztFQUUvQixJQUFJLE9BQU8sY0FBYyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDeEMsY0FBYyxFQUFFLENBQUM7R0FDbEI7Q0FDRixDQUFDLEFBRUYsQUFBMEIsOzssOzsiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
