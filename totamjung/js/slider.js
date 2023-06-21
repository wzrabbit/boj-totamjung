const tierImage = [];
const leftThumb = document.querySelector('#left-thumb');
const rightThumb = document.querySelector('#right-thumb');
const unrankedBtn = document.querySelector('#tier-button-u');
const bronzeBtn = document.querySelector('#tier-button-b');
const silverBtn = document.querySelector('#tier-button-s');
const goldBtn = document.querySelector('#tier-button-g');
const platinumBtn = document.querySelector('#tier-button-p');
const diamondBtn = document.querySelector('#tier-button-d');
const rubyBtn = document.querySelector('#tier-button-r');
const leftStatus = document.querySelector('#min-tier');
const rightStatus = document.querySelector('#max-tier');

const loadTierImage = () => {
  for (let i = 0; i <= 30; i++) {
    let image = new Image();
    image.src = `images/tier/solvedac-tier-${i}.svg`;
    tierImage.push(image);
  }
};

const setValue = (minValue, maxValue) => {
  leftThumb.value = minValue;
  rightThumb.value = maxValue;
  leftThumb.classList = `tier-thumb tier-thumb-${leftThumb.value}`;
  rightThumb.classList = `tier-thumb tier-thumb-${rightThumb.value}`;
  leftStatus.src = tierImage[leftThumb.value].src;
  rightStatus.src = tierImage[rightThumb.value].src;
};

const loadListeners = () => {
  leftThumb.addEventListener('input', () => {
    if (parseInt(leftThumb.value) > parseInt(rightThumb.value))
      rightThumb.value = leftThumb.value;
    leftThumb.classList = `tier-thumb tier-thumb-${leftThumb.value}`;
    rightThumb.classList = `tier-thumb tier-thumb-${rightThumb.value}`;
    setValue(leftThumb.value, rightThumb.value);
  });

  rightThumb.addEventListener('input', () => {
    if (parseInt(leftThumb.value) > parseInt(rightThumb.value))
      leftThumb.value = rightThumb.value;
    leftThumb.classList = `tier-thumb tier-thumb-${leftThumb.value}`;
    rightThumb.classList = `tier-thumb tier-thumb-${rightThumb.value}`;
    setValue(leftThumb.value, rightThumb.value);
  });

  unrankedBtn.addEventListener('click', () => {
    setValue(0, 0);
  });

  bronzeBtn.addEventListener('click', () => {
    setValue(1, 5);
  });

  silverBtn.addEventListener('click', () => {
    setValue(6, 10);
  });

  goldBtn.addEventListener('click', () => {
    setValue(11, 15);
  });

  platinumBtn.addEventListener('click', () => {
    setValue(16, 20);
  });

  diamondBtn.addEventListener('click', () => {
    setValue(21, 25);
  });

  rubyBtn.addEventListener('click', () => {
    setValue(26, 30);
  });
};

const loadSliderModule = () => {
  loadTierImage();
  loadListeners();
};

export default loadSliderModule;
