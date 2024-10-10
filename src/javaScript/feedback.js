const feedbackForm = document.querySelector('form.form-feedback');

const getFormState = formElement => {
  const formData = new FormData(formElement);
  const email = formData.get('email');
  const message = formData.get('message');

  return { email, message };
};

const saveFormState = () => {
  const formState = getFormState(feedbackForm);

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const loadFormState = () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (!savedFormState) return;

  const { email, message } = JSON.parse(savedFormState);
  feedbackForm.querySelector('input[name="email"]').value = email;
  feedbackForm.querySelector('textarea[name="message"]').value = message;
};

const submitFeedback = event => {
  event.preventDefault();

  const formState = getFormState(feedbackForm);

  console.log('Feedback submitted:', formState);

  localStorage.removeItem('feedback-form-state');

  feedbackForm.reset();
};

feedbackForm.addEventListener('submit', submitFeedback);
feedbackForm.addEventListener('input', saveFormState);





// const feedbackForm = document.querySelector('.feedback-form');

// const saveFormState = () => {
//   const formData = new FormData(feedbackForm);
//   const email = formData.get('email');
//   const message = formData.get('message');

//   const formState = {
//     email: email,
//     message: message
//   };

//   localStorage.setItem('feedback-form-state', JSON.stringify(formState));
// };

// feedbackForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const formData = new FormData(feedbackForm);
//   const email = formData.get('email');
//   const message = formData.get('message');

//   const formState = {
//     email: email,
//     message: message
//   };

//   console.log('Feedback submitted:', formState);

//   localStorage.removeItem('feedback-form-state');

//   feedbackForm.reset();
// });

// feedbackForm.addEventListener('input', saveFormState);

// document.addEventListener('DOMContentLoaded', () => {
//   const savedFormState = localStorage.getItem('feedback-form-state');
//   if (savedFormState) {
//     const formState = JSON.parse(savedFormState);
//     feedbackForm.querySelector('input[name="email"]').value = formState.email;
//     feedbackForm.querySelector('textarea[name="message"]').value = formState.message;
//   }
// });