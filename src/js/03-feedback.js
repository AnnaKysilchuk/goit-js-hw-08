import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

populateFeedbackForm();

function onFormInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}

function populateFeedbackForm() {
    const savedData = localStorage.getItem(STORAGE_KEY)

    if (savedData) {
        const values = (JSON.parse(savedData));

        feedbackForm.elements.email.value = values.email;
        feedbackForm.elements.message.value = values.message;
    }
}