const dialog = document.querySelector('.dialog');

const openForm = document.querySelector('.js-open-form');
const closeForm = document.querySelector('.js-cancel-form');

const form = document.querySelector('#form');

const inputName = document.querySelector('#name');
const inputQuery = document.querySelector('#query');
const inputEmail = document.querySelector('#email');

const errorMsgName = document.querySelector('.js-error-msg-name');
const errorMsgQuery = document.querySelector('.js-error-msg-query');
const errorMsgEmail = document.querySelector('.js-error-msg-email');

function eraseDataAndMsg() {
  inputName.value = '';
  errorMsgName.textContent = '';
  inputQuery.value = '';
  errorMsgQuery.textContent = '';
  inputEmail.value = '';
  errorMsgEmail.textContent = '';
}

openForm.addEventListener('click', function () {
  dialog.showModal();
});

closeForm.addEventListener('click', function () {
  dialog.close();

  eraseDataAndMsg();
});

dialog.addEventListener('keydown', function (e) {
  const pressKey = e.key;

  if (pressKey === 'Escape') {
    eraseDataAndMsg();
  }
});

let curUser = '';
let curQuery = '';
let curEmail = '';

function removeErrorMsg(inputEl, errorMsgEl) {
  if (inputEl.value !== '') {
    errorMsgEl.textContent = '';
  }
}

[inputName, inputQuery, inputEmail].forEach(elem => {
  elem.addEventListener('input', function () {
    curUser = inputName.value.trim();
    curQuery = inputQuery.value.trim();
    curEmail = inputEmail.value.trim();

    if (curUser.length !== 0) {
      removeErrorMsg(inputName, errorMsgName);
    }

    if (curQuery.length !== 0) {
      removeErrorMsg(inputQuery, errorMsgQuery);
    }

    if (curEmail.length !== 0) {
      removeErrorMsg(inputEmail, errorMsgEmail);
    }
  });
});

function checkForValidEmail(email) {
  return /(?:^|(?<=\s))(?:[a-z0-9]{2,}|[a-z]+\.?[a-z0-9]+)(?:[_\-\.]?)(?:[a-z0-9]*)@(?:[a-z]{2,}|[a-z]+[0-9]+|[0-9]+[a-z]+|[0-9]+\-[a-z]+)(?:[0-9]*)(?:[\-\.]?)(?:[a-z0-9]*)\.(?:[a-z]{2}|com|net|org)(?:$|(?=\s))/.test(email);
}

form.addEventListener('submit', function (e) {
  const isEmailValid = checkForValidEmail(curEmail);

  if (curUser === '' || curUser.length !== 0 && curUser.length < 2) {
    e.preventDefault();

    errorMsgName.textContent = 'Name must be longer than 1 character';
    inputName.focus();
  } else if (curQuery === '' || curQuery.length !== 0 && curQuery.length <= 30) {
    e.preventDefault();

    errorMsgQuery.textContent = 'Question must be longer than 30 characters';
    inputQuery.focus();
  } else if (curEmail === '' || curEmail.length !== 0 && curEmail.length <= 7) {
    e.preventDefault();

    errorMsgEmail.textContent = 'Email must be longer than 7 characters';
    inputEmail.focus();
  } else if (!isEmailValid) {
    e.preventDefault();

    errorMsgEmail.textContent = 'This email is not valid';
    inputEmail.focus();
  }
});