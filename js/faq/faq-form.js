const dialog = document.getElementsByTagName('dialog')[0];

const openForm = document.querySelector('.js-open-form');
const closeForm = document.querySelector('.js-cancel-form');

const form = document.getElementById('form');

const user = document.getElementById('name');
const query = document.getElementById('text');
const email = document.getElementById('email');

const errorUser = document.querySelector('.js-error-msg-name');
const errorQuery = document.querySelector('.js-error-msg-question');
const errorEmail = document.querySelector('.js-error-msg-email');

function eraseDataAndMsg() {
  user.value = null;
  errorUser.innerText = null;
  query.value = null;
  errorQuery.innerText = null;
  email.value = null;
  errorEmail.innerText = null;
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
    error.innerText = '';
  }
}

[user, query, email].forEach( elem => {
  elem.addEventListener('input', function () {
    curUser = user.value.trim();
    curQuery = query.value.trim();
    curEmail = email.value.trim();

    if (curUser.length !== 0 && curUser.length < 2) {
      errorUser.innerText = 'Name must be longer than 1 character';
    } else {
      removeErrorMsg(user, errorUser);
    }

    if (curQuery.length !== 0 && curQuery.length <= 30) {
      errorQuery.innerText = 'Question must be longer than 30 characters';
    } else {
      removeErrorMsg(query, errorQuery);
    }

    if (curEmail.length !== 0 && curEmail.length <= 7) {
      errorEmail.innerText = 'Email must be longer than 7 characters';
    } else {
      removeErrorMsg(email, errorEmail);
    }
  });
});

function isEmailValid(email) {
  return /(?:^|(?<=\s))(?:[a-z0-9]{2,}|[a-z]+\.?[a-z0-9]+)(?:[_\-\.]?)(?:[a-z0-9]*)@(?:[a-z]{2,}|[a-z]+[0-9]+|[0-9]+[a-z]+|[0-9]+\-[a-z]+)(?:[0-9]*)(?:[\-\.]?)(?:[a-z0-9]*)\.(?:[a-z]{2}|com|net|org)(?:$|(?=\s))/.test(email);
}

form.addEventListener('submit', function (e) {
  if (curUser === '' || curUser.length !== 0 && curUser.length < 2) {
    e.preventDefault();

    errorUser.innerText = 'Please enter your name';
    user.focus();
  } else if (curQuery === '' || curQuery.length !== 0 && curQuery.length <= 30) {
    e.preventDefault();

    errorQuery.innerText = 'Please enter your question';
    query.focus();
  } else if (curEmail === '' || curEmail.length !== 0 && curEmail.length <= 7) {
    e.preventDefault();

    errorEmail.innerText = 'Please enter your email';
    email.focus();
  } else if (!isEmailValid(curEmail)) {
    e.preventDefault();

    errorEmail.innerText = 'This email is not valid';
    email.focus();
  }
});