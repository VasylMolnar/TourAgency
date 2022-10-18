const refs = {
  openModalBtn: document.querySelector('[data-modalReg-open]'),
  closeModalBtn: document.querySelector('[data-modalReg-close]'),
  modal: document.querySelector('.backdrop__registration'),
  loginText: document.querySelector('.title-text .login'),
  loginForm: document.querySelector('form.login'),
  loginBtn: document.querySelector('label.login'),
  signupBtn: document.querySelector('label.signup'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

refs.signupBtn.addEventListener('click', () => {
  refs.loginForm.style.marginLeft = '-50%';
  refs.loginText.style.marginLeft = '-50%';
  refs.loginBtn.style.color = 'black';
  refs.signupBtn.style.color = 'white';
});

refs.loginBtn.addEventListener('click', () => {
  refs.loginForm.style.marginLeft = '0%';
  refs.loginText.style.marginLeft = '0%';
  refs.loginBtn.style.color = 'white';
  refs.signupBtn.style.color = 'black';
});

/*
 const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
*/
