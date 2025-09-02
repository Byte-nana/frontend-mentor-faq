const toggleBtn = document.querySelectorAll('.item__btn');
const answers = document.querySelectorAll('.item__content');
const minusBtn = document.querySelectorAll('.btnImg');

//Step 1: hardcoding
// toggleBtn[0].addEventListener('click', () => {
//   answers[0].classList.toggle('show__answer');

//   let result = answers[0].classList.contains('show__answer');
//   if (result) {
//     minusBtn[0].src = './assets/images/icon-minus.svg';
//   } else {
//     minusBtn[0].src = './assets/images/icon-plus.svg';
//   }
// });

// Setp 2: for statement + function
function changeImg(i) {
  let result = answers[i].classList.contains('show__answer');
  if (result) {
    minusBtn[i].src = './assets/images/icon-minus.svg';
  } else {
    minusBtn[i].src = './assets/images/icon-plus.svg';
  }
}

for (let i = 0; i < toggleBtn.length; i++) {
  toggleBtn[i].addEventListener('click', () => {
    answers[i].classList.toggle('show__answer');

    changeImg(i);
  });
}

//working on: for more clean code
// toggleBtn.forEach((btn) => {
//   btn.addEventListener('click', () => {});
// });
