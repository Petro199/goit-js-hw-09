const bodyEl = document.querySelector('body')
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
console.log(btnStart); 
console.log(btnStop);
let intervalID;
btnStop.disabled = true; 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const onChangeColor = () => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
}
btnStart.addEventListener('click', () => {
    intervalID = setInterval(onChangeColor, 1000)
    btnStart.disabled = true;
    btnStop.disabled = false
    console.log(intervalID);
});
btnStop.addEventListener('click', () => {
    clearInterval(intervalID);
     btnStart.disabled = false;
    btnStop.disabled = true;
    bodyEl.style.backgroundColor = 'white';
})
console.log(btnStart);