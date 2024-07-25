// Create button element
const btnsChars = ['all', 'bag', 'shoe', 'watch', 'camera', 'headphone'];
const btnsWrapper = document.querySelector('.filter-btns');

btnsChars.map(function (btnsChar) {
  const modifiedChar = btnsChar.charAt(0).toUpperCase() + btnsChar.slice(1);
  // charAt(): 파라미터 인덱스에 해당하는 문자 선택
  // toUpperCase(): 대문자로 변환
  // toLowerCase(): 소문자로 변환
  // slice(): 문자열을 추출 - 파라미터 인덱스부터 추출

  const btnElement = `<button class="filter-btn" data-filter="${btnsChar}">${modifiedChar}</button>`;
  btnsWrapper.insertAdjacentHTML('beforeend', btnElement);
});

// Firtst button add active class
const btns = document.querySelectorAll('.filter-btn');
btns[0].classList.add('active');

// Create images element
const images = [
  'bag-1.jpg',
  'camera-1.jpg',
  'camera-2.jpg',
  'headphone-1.jpg',
  'headphone-2.jpg',
  'shoe-1.jpg',
  'shoe-2.jpg',
  'watch-1.jpg',
];

const imagesWrapper = document.querySelector('.filter-images');

images.map(function (image) {
  // console.log(image.split('-')[0]); // [shoe, 1.jpg]

  const imageElement = `
    <div class="filter-image" data-filter="${image.split('-')[0]}">
      <span><img src="images/${image}" alt=""></span>
    </div>
  `;

  imagesWrapper.insertAdjacentHTML('beforeend', imageElement);
});

const imageElements = document.querySelectorAll('.filter-image');

//Filter images
function activateFilter() {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  this.classList.add('active');

  const selectedBtn = this.getAttribute('data-filter');

  //mpa, filter, reduce 함수는 DOM 요소에 해당할 수 없다. 구래서 Array.from()을 사용하여 배열로 변환하다.
  //images에 대한 filter 적용시켜줄 예정
  //=== 비교연산자

  Array.from(imageElements).filter((imageElement) => {
    imageElement.classList.add('hide');

    if (
      imageElement.getAttribute('data-filter') === selectedBtn ||
      selectedBtn === 'all'
    ) {
      imageElement.classList.remove('hide');
      imageElement.classList.add('show');
    } else {
      imageElement.classList.remove('show');
      imageElement.classList.add('hide');
    }
  });
}
btns.forEach(function (btn) {
  btn.addEventListener('click', activateFilter);
});
// active를 지우고 내가 필요한 것만 다시 넣어줌
