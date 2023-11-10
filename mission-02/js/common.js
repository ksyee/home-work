//* input email
const inputEmailBox = document.querySelector('.input-email');
const inputEmail = document.querySelector('#email');
//* input password
const inputPwdBox = document.querySelector('.input-pwd');
const inputPwdLabel = document.querySelector('.input-pwd label');
const inputPwd = document.querySelector('#password');
//* store email
const storeEmailLabel = document.querySelector('.store-email label');
const storeEmail = document.querySelector('#store-email');
//* sign in btn
// const signInBtn = document.querySelector('.sign-in-btn');

let inputPwdFocus = false;

const focus = (elem1, elem2) => {
  elem1.addEventListener('focus', () => {
    elem2.classList.add('is-active');
  });

  elem1.addEventListener('blur', () => {
    elem2.classList.remove('is-active');
  });
}; // focus 시에 input-box에 is-active 클래스 추가

const pwdLabelFocus = () => {
  if (inputPwdFocus) {
    inputPwdLabel.classList.add('focus');
  } else {
    inputPwdLabel.classList.remove('focus');
  }
}; // password input focus 시에 label에 focus 클래스 추가

focus(inputEmail, inputEmailBox);

focus(inputPwd, inputPwdBox);

inputPwd.addEventListener('focus', () => {
  inputPwdFocus = true;
  pwdLabelFocus();
}); // password input focus 시에 input-box에 is-active 클래스 추가

inputPwd.addEventListener('blur', () => {
  inputPwdFocus = false;
  if (inputPwd.value.length === 0) {
    pwdLabelFocus();
  }
}); // password input blur 시에 input-box에 is-active 클래스 제거

document
  .querySelector('.visible-btn')
  .addEventListener('mousedown', function (e) {
    e.preventDefault();
  }); // visible-pwd 버튼 클릭 시에 input-box에 focus가 해제되는 것을 방지

focus(storeEmail, storeEmailLabel);

storeEmail.addEventListener('click', () => {
  storeEmailLabel.classList.remove('is-active');
});

//* 로그인 버튼 활성화
const active = {
  email: false,
  pwd: false,
};

//* email, pwd check
// email 정규식 검사
const emailFilter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

inputEmail.addEventListener('keyup', () => {
  let emailVal = inputEmail.value;

  if (emailVal === '') {
    inputEmailBox.classList.remove('success');
    inputEmailBox.classList.remove('error');
  } else if (emailFilter.test(emailVal)) {
    inputEmailBox.classList.remove('error');
    inputEmailBox.classList.add('success');
    active.email = true;
  } else {
    inputEmailBox.classList.remove('success');
    inputEmailBox.classList.add('error');
    active.email = false;
  }
});

// password 정규식 검사
const pwdFilter = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

inputPwd.addEventListener('keyup', () => {
  let pwdVal = inputPwd.value;

  if (pwdVal === '') {
    inputPwdBox.classList.remove('success');
    inputPwdBox.classList.remove('error');
  } else if (pwdFilter.test(pwdVal)) {
    inputPwdBox.classList.remove('error');
    inputPwdBox.classList.add('success');
    active.email = true;
  } else {
    inputPwdBox.classList.remove('success');
    inputPwdBox.classList.add('error');
    active.email = false;
  }
});

// password의 visible-btn
const visibleBtn = document.querySelector('.input-pwd .visible-btn');

visibleBtn.addEventListener('click', () => {
  if (visibleBtn.classList.contains('is-active')) {
    inputPwd.type = 'password';
    visibleBtn.classList.remove('is-active');
  } else {
    inputPwd.type = 'text';
    visibleBtn.classList.add('is-active');
  }
});
let signInBtn = document.querySelector('.sign-in-btn');

inputEmail.addEventListener('keyup', checkActive);
inputPwd.addEventListener('keyup', checkActive);

function checkActive() {
  if (active.email && active.pwd) {
    signInBtn.classList.add('normal');
  } else {
    signInBtn.classList.remove('normal');
  }
}
