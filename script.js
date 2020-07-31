const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const inputPass = document.querySelector('#pass')
const errorName = document.querySelector('.error-name')
const errorEmail = document.querySelector('.error-email')
const errorPass = document.querySelector('.error-pass')

function checkRegExp(func ,val, selector) {
  if (func(val) === false) {
    selector.style.display = 'block'
  } else {
    selector.style.display = 'none'
  }
}

function validateName(name) {
  let re = /^\S\w+\S$/;
  return re.test(name);
}

function validateEmail(email) {
  let re = RegExp("^[^.!@#$%^&*()_ ]\\S\\w+@\\w+\\.\\w+$");
  return re.test(email);
}

function validatePassword(pass) {
  let re = RegExp("\\w+[0-9A-za-z]{6}");
  return re.test(pass);
}


inputName.addEventListener('change', () => {
  let val = inputName.value


  checkRegExp(validateName, val, errorName)
})
inputEmail.addEventListener('change', () => {
  let val = inputEmail.value
  checkRegExp(validateEmail, val, errorEmail)
})
inputPass.addEventListener('change', () => {
  let val = inputPass.value
  checkRegExp(validatePassword, val, errorPass)
})