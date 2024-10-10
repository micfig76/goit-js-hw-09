const feedbackForm = document.querySelector('.form-feedback');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(feedbackForm);
  const email = formData.get('email');
  const message = formData.get('message');

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('feedbackEmail', email);
    localStorage.setItem('feedbackMessage', message);
  } else {
    console.log('Local storage is not supported in this browser.');
  }

  feedbackForm.reset();

  console.log('Feedback submitted:', email, message);
});