var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.querySelector('button');

button.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
});