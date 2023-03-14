
document.addEventListener('DOMContentLoaded', function () {
  // конечная дата
  // const deadline = new Date(2023, 3, 14);
  const deadline = (function(y, m, d, h) { return new Date(y, m-1, d, h); })(2023, 04, 14, 15);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;    
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;    
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;   
    document.querySelector('.timer__title-days').textContent = declensionNum(days, ['день', 'дня', 'дней']);
    document.querySelector('.timer__title-hours').textContent = declensionNum(hours, ['час', 'часа', 'часов']);
    document.querySelector('.timer__title-minutes').textContent = declensionNum(minutes, ['минута', 'минуты', 'минут']);
  }  
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');  
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});


Inputmask({"mask": "+7 999 999-99-99"}).mask(document.querySelector('.input-phone'));

function scrollTo() {
    const anchors = document.querySelectorAll("a.scrollto");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();        
        const blockID = anchor.getAttribute("href");
        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }

  scrollTo();