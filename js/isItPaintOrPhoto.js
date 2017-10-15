const isItPaintOrPhoto = (element) => {
  return (element.classList.contains(`game__answer--paint`)) ? `paint` : `photo`;
};

export default isItPaintOrPhoto;
