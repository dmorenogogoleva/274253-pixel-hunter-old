const isItPaintOrPhoto = (element) => {
  return (element.classList.contains(`paint`)) ? `paint` : `photo`;
};

export default isItPaintOrPhoto;
