const dialog = document.getElementsByTagName('dialog')[0];

const openForm = document.querySelector('.js-open-form');
const closeForm = document.querySelector('.js-cancel-form');

function disableIosScrollY() {
  window.addEventListener('touchstart', function (e) {
    e.preventDefault(),
    {passive: false}
  });
}

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
  document.body.classList.add('stop-y-scroll');

  if (document.body.classList === 'stop-y-scroll') {
    disableIosScrollY();
  }
});

closeForm.addEventListener('click', function () {
  dialog.close();
  document.body.classList.remove('stop-y-scroll');

  eraseDataAndMsg();
});

dialog.addEventListener('keydown', function (e) {
  const pressKey = e.key;
  document.body.classList.remove('stop-y-scroll');

  if (pressKey === 'Escape') {
    eraseDataAndMsg();
  }
});

const form = document.getElementById('form');

const user = document.getElementById('name');
const query = document.getElementById('text');
const email = document.getElementById('email');

const errorUser = document.querySelector('.js-error-msg-name');
const errorQuery = document.querySelector('.js-error-msg-question');
const errorEmail = document.querySelector('.js-error-msg-email');

function isEmailValid(email) {
  return /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]{2}(?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2}|com|dev|net|org)\b$/.test(email);
}

form.addEventListener('submit', function (e) {
  const userValue = user.value.trim();
  const queryValue = query.value.trim();
  const emailValue = email.value.trim();

  if (userValue === '') {
    e.preventDefault();
    errorUser.innerText = 'Please enter your name';
  } else if (userValue.length !== 0 && user.value.length < 2) {
    e.preventDefault();
  } else if (queryValue === '') {
    e.preventDefault();
    errorQuery.innerText = 'Please enter your question';
  } else if (queryValue.length !== 0 && query.value.length <= 30) {
    e.preventDefault();
  } else if (emailValue === '') {
    e.preventDefault();
    errorEmail.innerText = 'Please enter your email';
  } else if (emailValue.length !== 0 && email.value.length <= 10) {
    e.preventDefault();
  } else if (isEmailValid(emailValue) === false) {
    e.preventDefault();
    errorEmail.innerText = 'This email is not valid';
  }
});

function removeErrorMsg(step, error) {
  if (step.value !== '') {
    error.innerText = '';
  }
}

[user, query, email].forEach( elem => {
  elem.addEventListener('input', function () {
    if (user.value.length !== 0 && user.value.length < 2) {
      errorUser.innerText = 'Name must be longer than 1 character';
    } else {
      removeErrorMsg(user, errorUser);
    }

    if (query.value.length !== 0 && query.value.length <= 30) {
      errorQuery.innerText = 'Question must be longer than 30 characters';
    } else {
      removeErrorMsg(query, errorQuery);
    }

    if (email.value.length !== 0 && email.value.length <= 10) {
      errorEmail.innerText = 'Email must be longer than 10 characters';
    } else {
      removeErrorMsg(email, errorEmail);
    }
  });
});