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

let curUser = '';
let curQuery = '';
let curEmail = '';

function clearErrorMsg() {
  errorMsgName.textContent = '';
  errorMsgQuery.textContent = '';
  errorMsgEmail.textContent = '';
}

openForm.addEventListener('click', () => {
  dialog.showModal();

  form.reset();
  clearErrorMsg();
});

closeForm.addEventListener('click', () => {
  dialog.close();
});

function removeErrorMsg(errorMsgEl) {
  errorMsgEl.textContent = '';
}

[inputName, inputQuery, inputEmail].forEach(elem => {
  elem.addEventListener('input', () => {
    curUser = inputName.value.trim();
    curQuery = inputQuery.value.trim();
    curEmail = inputEmail.value.trim();

    if (curUser) {
      removeErrorMsg(errorMsgName);
    }

    if (curQuery) {
      removeErrorMsg(errorMsgQuery);
    }

    if (curEmail) {
      removeErrorMsg(errorMsgEmail);
    }
  });
});

function checkForValidEmail(email) {
  return /(?:^|(?<=\s))(?:[a-z0-9]{2,}|[a-z]+\.?[a-z0-9]+)(?:[_\-\.]?)(?:[a-z0-9]*)@(?:[a-z]{2,}|[a-z]+[0-9]+|[0-9]+[a-z]+|[0-9]+\-[a-z]+)(?:[0-9]*)(?:[\-\.]?)(?:[a-z0-9]*)\.(?:[a-z]{2}|com|net|org)(?:$|(?=\s))/.test(email);
}

function handleSubmit(e) {
  const isEmailValid = checkForValidEmail(curEmail);

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const name = data.name;
  const query = data.query;
  const email = data.email;

  if (name === '' || name.length !== 0 && name.length < 2) {
    e.preventDefault();

    errorMsgName.textContent = 'Name must be longer than 1 character';
    inputName.focus();
  } else if (query === '' || query.length !== 0 && query.length <= 30) {
    e.preventDefault();

    errorMsgQuery.textContent = 'Question must be longer than 30 characters';
    inputQuery.focus();
  } else if (email === '' || email.length !== 0 && email.length <= 7) {
    e.preventDefault();

    errorMsgEmail.textContent = 'Email must be longer than 7 characters';
    inputEmail.focus();
  } else if (!isEmailValid) {
    e.preventDefault();

    errorMsgEmail.textContent = 'This email is not valid';
    inputEmail.focus();
  } else {
    dialog.close();
  }
}

form.addEventListener('submit', handleSubmit);