const imgBox = document.querySelector('.slider_box-imgs');
const images = document.querySelectorAll('.img');
const btnleft = document.querySelector('.slider_btn-left');
const btnRight = document.querySelector('.slider_btn-right');
let courent = 0;

btnRight.addEventListener('click', () => {
  courent++;
  if (courent > images.length - 1) {
    courent = 0;
  }
  slider();
  console.log(courent);
});

btnleft.addEventListener('click', () => {
  courent--;
  if (courent < 0) {
    courent = images.length - 1;
  }
  slider();
});

function slider() {
  imgBox.style.transform = `translateX(-${courent * 100}%)`;
}
