const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormSubmit(evt) {
  evt.preventDefault();

  const { email, message } = evt.target;
  const trimmedMail = email.value.trim();
  const trimmedMessage = message.value.trim();
  formData = {
    email: trimmedMail,
    message: trimmedMessage,
  };

  if (trimmedMail === '' || trimmedMessage === '') {
    return alert('Please, fill in all fields!');
  }
  console.log(formData);

  evt.currentTarget.reset();

  localStorage.removeItem(storageKey);
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

if (localStorage.getItem(storageKey)) {
  formData = JSON.parse(localStorage.getItem(storageKey));
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}
