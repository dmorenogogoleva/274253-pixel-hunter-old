const createElement = function (container, layout) {
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  container.appendChild(newDiv);
}

export default createElement;
