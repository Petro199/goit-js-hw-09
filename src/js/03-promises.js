import Notiflix from 'notiflix';

function createPromise({ position, delayN }) {
  const shouldResolve = Math.random() > 0.3;
  console.log(shouldResolve);
 const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(position);
      if (shouldResolve) {
        resolve({ position, delayN });
      } else {
        reject({ position, delayN });
      }
    }, delayN);
  });
  return newPromise;
}

const form = document.querySelector('.form')
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.target;
  let delayN = Number(delay.value);
  let stepN = Number(step.value);
  let amountN = Number(amount.value);
  console.log(delayN);
  console.log(stepN);
   console.log(amountN);
  
  for (let position = 0; position < amountN; position += 1) {
    createPromise({ position, delayN })
      .then(({ position, delayN }) => {
        Notiflix.Notify.success(
          `Fulfilled promise ${position + 1} in ${delayN}ms`
        );
      })
      .catch(({ position, delayN }) => {
        Notiflix.Notify.failure(
          `Rejected promise ${position + 1} in ${delayN}ms`
        );
      });
    delayN = stepN + delayN;
    console.log(delayN);
  }
}
form.addEventListener('submit', onSubmit);
