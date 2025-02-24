//10c
const buttonTest = document.querySelector('.js-test-button');
console.log(buttonTest.classList);

function toggledOnOff() {
    const buttonElement = document.querySelector('.js-toggled-button');
    console.log(buttonElement.classList);

    if (!buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.add('is-toggled');

    } else {
        buttonElement.classList.remove('is-toggled');
    }
}