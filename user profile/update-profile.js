// get form elements
const form = document.querySelector('#profile-form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const submitButton = document.querySelector('#submit-button');

// handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  // get form values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // validate form values
  if (!name || !email || !password) {
    alert('Please fill out all fields.');
    return;
  }

  // making API request to update user profile
  fetch('/api/update-profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // log server response
      alert('Profile updated successfully!');
    })
    .catch(error => {
      console.error(error);
      alert('Error updating profile.');
    });
});

// enable/disable submit button based on form validity
form.addEventListener('input', () => {
  submitButton.disabled = !form.checkValidity();
});