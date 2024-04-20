import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const inputF = document.querySelector('input');
const textareaF = document.querySelector('textarea');

const localStorageKey = 'feedback-form-state';

let savedVO = { email: '', message: '' };

const formData = throttle(() => {
  inputF.addEventListener('input', event => {
    savedVO.email = event.currentTarget.value;
    localStorage.setItem(localStorageKey, JSON.stringify(savedVO));
  });
  textareaF.addEventListener('input', event => {
    savedVO.message = event.currentTarget.value;
    localStorage.setItem(localStorageKey, JSON.stringify(savedVO));
  });
}, 500);

formData();

const parsedInput = JSON.parse(localStorage.getItem(localStorageKey));
inputF.value = parsedInput.email;
textareaF.value = parsedInput.message;

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const parsedInput = JSON.parse(localStorage.getItem(localStorageKey));
  if (parsedInput === null) {
    return;
  }
  let lastValuesO = { email: '', message: '' };
  lastValuesO.email = parsedInput.email;
  lastValuesO.message = parsedInput.message;
  console.log(lastValuesO);
  feedbackForm.reset();
  localStorage.removeItem(localStorageKey);
});
