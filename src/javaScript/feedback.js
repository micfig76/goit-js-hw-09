const feedbackForm = document.querySelector('.feedback-form');

const saveFormState = () => {
  const formData = new FormData(feedbackForm);
  const email = formData.get('email');
  const message = formData.get('message');

  const formState = {
    email: email,
    message: message
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(feedbackForm);
  const email = formData.get('email');
  const message = formData.get('message');

  const formState = {
    email: email,
    message: message
  };

  console.log('Feedback submitted:', formState);

  localStorage.removeItem('feedback-form-state');

  feedbackForm.reset();
});

feedbackForm.addEventListener('input', saveFormState);

document.addEventListener('DOMContentLoaded', () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    feedbackForm.querySelector('input[name="email"]').value = formState.email;
    feedbackForm.querySelector('textarea[name="message"]').value = formState.message;
  }
});