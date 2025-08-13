const wrapper       = document.querySelector('.wrapper');
const loginBtn      = document.querySelector('.btnlogin_popup');
const closeBtn      = document.querySelector('.close i');
const loginLink     = document.querySelector('.form_box .login_register a');
const registerLink  = document.querySelector('.form_box_register .login_register a');

// 1) Show popup with LOGIN form
loginBtn.addEventListener('click', () => {
  wrapper.classList.add('active', 'show_login');
  wrapper.classList.remove('show_register');
});

// 2) Close popup
closeBtn.addEventListener('click', () => {
  wrapper.classList.remove('active', 'show_login', 'show_register');
});

// 3) Switch to REGISTER form
loginLink.addEventListener('click', e => {
  e.preventDefault();
  wrapper.classList.remove('show_login');
  wrapper.classList.add('show_register');
});

// 4) Switch back to LOGIN form
registerLink.addEventListener('click', e => {
  e.preventDefault();
  wrapper.classList.remove('show_register');
  wrapper.classList.add('show_login');
});
