import Notiflix from "notiflix";
const form = document.querySelector('.form')

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({position, delay})
  } else {
    return Promise.reject({position, delay})
  }
}
const makePromise = ({delay,step, amount}) =>{
  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });

    delay += step;
  }
};


const handleSubmit = evt => {
  evt.preventDefault();
  const {
    elements: {delay, step, amount}
  } = evt.currentTarget

  makePromise({
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  });

  evt.currentTarget.reset();
}
form.addEventListener('submit', handleSubmit)
