const previousButton = document.querySelector('.slider__button--previous');
const nextButton = document.querySelector('.slider__button--next');
const slideElements = document.querySelectorAll('.slider__item');

const slides = Array.from(slideElements);

let currentSlideNumber;

const renderNextSlide = () => {

  for (let i = 0; i < slides.length; i++) {

    if (slides[i].classList.contains('slider__item--current')) {
      slides[i].classList.remove('slider__item--current');
      slides[i].classList.add('visually-hidden');
      slides[i + 1].classList.remove('visually-hidden');
      slides[i + 1].classList.add('slider__item--current');

      currentSlideNumber = i + 1;

      return;
    }
  }
};

const renderPreviousSlide = () => {

  for (let i = 0; i < slides.length; i++) {

    if (slides[i].classList.contains('slider__item--current')) {

      slides[i].classList.remove('slider__item--current');
      slides[i].classList.add('visually-hidden');
      slides[i - 1].classList.remove('visually-hidden');
      slides[i - 1].classList.add('slider__item--current');

      currentSlideNumber = i - 1;

      return;
    }
  }
};

const onNextButtonClick = () => {
  renderNextSlide();

  if (previousButton.disabled) {
      previousButton.disabled = false;
      previousButton.classList.remove('slider__button--disabled');
  }

  if (currentSlideNumber === slides.length - 1) {
    nextButton.disabled = true;
    nextButton.classList.add('slider__button--disabled');
  }
};

const onPreviousButtonClick = () => {
  renderPreviousSlide();

  if (nextButton.disabled) {
    nextButton.disabled = false;
    nextButton.classList.remove('slider__button--disabled');
  }

  if (currentSlideNumber === 0) {
    previousButton.disabled = true;
    previousButton.classList.add('slider__button--disabled');
  }
};

const showNextSlide = () => {
  nextButton.addEventListener('click', onNextButtonClick);
};

const showPreviousSlide = () => {
  previousButton.addEventListener('click', onPreviousButtonClick);
};

export { showNextSlide, showPreviousSlide };
