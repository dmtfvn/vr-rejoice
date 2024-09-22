const dialog = document.getElementsByTagName('dialog')[0];

const openForm = document.querySelector('.js-open-form');
const closeForm = document.querySelector('.js-cancel-form');

const form = document.getElementById('form');

const inputName = document.getElementById('name');
const inputQuery = document.getElementById('query');
const inputEmail = document.getElementById('email');

const errorMsgName = document.querySelector('.js-error-msg-name');
const errorMsgQuery = document.querySelector('.js-error-msg-query');
const errorMsgEmail = document.querySelector('.js-error-msg-email');

function eraseDataAndMsg() {
  inputName.value = null;
  errorMsgName.textContent = null;
  inputQuery.value = null;
  errorMsgQuery.textContent = null;
  inputEmail.value = null;
  errorMsgEmail.textContent = null;
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

function removeErrorMsg(step, error) {
  if (step.value !== '') {
    error.textContent = '';
  }
}

[inputName, inputQuery, inputEmail].forEach( elem => {
  elem.addEventListener('input', function () {
    curUser = inputName.value.trim();
    curQuery = inputQuery.value.trim();
    curEmail = inputEmail.value.trim();

    if (curUser.length !== 0 && curUser.length < 2) {
      errorMsgName.textContent = 'Name must be longer than 1 character';
    } else {
      removeErrorMsg(inputName, errorMsgName);
    }

    if (curQuery.length !== 0 && curQuery.length <= 30) {
      errorMsgQuery.textContent = 'Question must be longer than 30 characters';
    } else {
      removeErrorMsg(inputQuery, errorMsgQuery);
    }

    if (curEmail.length !== 0 && curEmail.length <= 7) {
      errorMsgEmail.textContent = 'Email must be longer than 7 characters';
    } else {
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

    errorMsgName.textContent = 'Please enter your name';
    inputName.focus();
  } else if (curQuery === '' || curQuery.length !== 0 && curQuery.length <= 30) {
    e.preventDefault();

    errorMsgQuery.textContent = 'Please enter your question';
    inputQuery.focus();
  } else if (curEmail === '' || curEmail.length !== 0 && curEmail.length <= 7) {
    e.preventDefault();

    errorMsgEmail.textContent = 'Please enter your email';
    inputEmail.focus();
  } else if (!isEmailValid) {
    e.preventDefault();

    errorMsgEmail.textContent = 'This email is not valid';
    inputEmail.focus();
  }
});