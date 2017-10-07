var showScreen = (function () {
'use strict';

const central = document.querySelector(`.central`);

const showScreen = function (layout, showNextScreen) {
  const currentDiv = central.querySelector(`.central__content`);
  currentDiv.remove();
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  central.appendChild(newDiv);

  // const deleteEmptyDivs = (function () {
  //   const divs = document.querySelectorAll(`div`);

  //   divs.forEach(function (div) {
  //     if (div.innerHTML.length === 0) {
  //       console.log(';h');
  //       div.remove();
  //     }
  //   });
  // })();

  if (typeof showNextScreen === `function`) {
    showNextScreen();
  }
};

return showScreen;

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd1NjcmVlbi5qcyIsInNvdXJjZXMiOlsianMvc2hvd1NjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjZW50cmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbnRyYWxgKTtcblxuY29uc3Qgc2hvd1NjcmVlbiA9IGZ1bmN0aW9uIChsYXlvdXQsIHNob3dOZXh0U2NyZWVuKSB7XG4gIGNvbnN0IGN1cnJlbnREaXYgPSBjZW50cmFsLnF1ZXJ5U2VsZWN0b3IoYC5jZW50cmFsX19jb250ZW50YCk7XG4gIGN1cnJlbnREaXYucmVtb3ZlKCk7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICBuZXdEaXYuaW5uZXJIVE1MID0gbGF5b3V0O1xuICBjZW50cmFsLmFwcGVuZENoaWxkKG5ld0Rpdik7XG5cbiAgLy8gY29uc3QgZGVsZXRlRW1wdHlEaXZzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2YCk7XG5cbiAgLy8gICBkaXZzLmZvckVhY2goZnVuY3Rpb24gKGRpdikge1xuICAvLyAgICAgaWYgKGRpdi5pbm5lckhUTUwubGVuZ3RoID09PSAwKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCc7aCcpO1xuICAvLyAgICAgICBkaXYucmVtb3ZlKCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH0pKCk7XG5cbiAgaWYgKHR5cGVvZiBzaG93TmV4dFNjcmVlbiA9PT0gYGZ1bmN0aW9uYCkge1xuICAgIHNob3dOZXh0U2NyZWVuKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dTY3JlZW47XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O0FBRW5ELE1BQU0sVUFBVSxHQUFHLFVBQVUsTUFBTSxFQUFFLGNBQWMsRUFBRTtFQUNuRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0VBQzlELFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztFQUNwQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztFQUMxQixPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0VBYTVCLElBQUksT0FBTyxjQUFjLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUN4QyxjQUFjLEVBQUUsQ0FBQztHQUNsQjtDQUNGLENBQUMsQUFFRixBQUEwQiw7Oyw7OyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
