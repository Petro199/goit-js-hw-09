function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
 const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(position);
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return newPromise;
}
