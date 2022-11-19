const bodyEl = document.querySelector('body')
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
console.log(btnStart); 
console.log(btnStop);
let interval;
btnStop.disabled = true; 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const onChangeColor = () => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
}
btnStart.addEventListener('click', () => {
    interval = setInterval(onChangeColor, 1000)
    btnStart.disabled = true;
    btnStop.disabled = false
});
btnStop.addEventListener('click', () => {
    clearInterval(interval);
     btnStart.disabled = false;
    btnStop.disabled = true;
    bodyEl.style.backgroundColor = 'white';
})
console.log(btnStart);