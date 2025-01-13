const openForm = document.querySelector('.js-open-form');
const closeForm = document.querySelector('.js-cancel-form');

const dialog = document.querySelector('.dialog');
const form = document.querySelector('form');

const inputName = document.querySelector('#name');
const inputQuery = document.querySelector('#query');
const inputEmail = document.querySelector('#email');

const errorMsgName = document.querySelector('.js-error-msg-name');
const errorMsgQuery = document.querySelector('.js-error-msg-query');
const errorMsgEmail = document.querySelector('.js-error-msg-email');

function clearErrorMsg() {
  errorMsgName.textContent = '';
  errorMsgQuery.textContent = '';
  errorMsgEmail.textContent = '';
}

function checkForValidEmail(email) {
  return /(?:^|(?<=\s))(?:[a-z0-9]{2,}|[a-z]+\.?[a-z0-9]+)(?:[_\-\.]?)(?:[a-z0-9]*)@(?:[a-z]{2,}|[a-z]+[0-9]+|[0-9]+[a-z]+|[0-9]+\-[a-z]+)(?:[0-9]*)(?:[\-\.]?)(?:[a-z0-9]*)\.(?:[a-z]{2}|com|net|org)(?:$|(?=\s))/.test(email);
}

function handleInput() {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const name = data.name.trim();
  const query = data.query.trim();
  const email = data.email.trim();

  if (name || query || email) {
    clearErrorMsg();
  }
}

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const name = data.name;
  const query = data.query;
  const email = data.email;

  const isEmailValid = checkForValidEmail(email);

  if (name === '' || name.length !== 0 && name.length < 2) {
    errorMsgName.textContent = 'Name must be longer than 1 character';
    inputName.focus();
  } else if (query === '' || query.length !== 0 && query.length <= 30) {
    errorMsgQuery.textContent = 'Question must be longer than 30 characters';
    inputQuery.focus();
  } else if (email === '' || email.length !== 0 && email.length <= 7) {
    errorMsgEmail.textContent = 'Email must be longer than 7 characters';
    inputEmail.focus();
  } else if (!isEmailValid) {
    errorMsgEmail.textContent = 'This email is not valid';
    inputEmail.focus();
  } else {
    form.submit();

    dialog.close();
  }
}

openForm.addEventListener('click', () => {
  dialog.showModal();

  form.reset();
  clearErrorMsg();
});

closeForm.addEventListener('click', () => {
  dialog.close();
});

form.addEventListener('input', handleInput);

form.addEventListener('submit', handleSubmit);