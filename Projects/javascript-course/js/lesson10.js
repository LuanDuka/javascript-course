//10c
const buttonTest = document.querySelector('.js-test-button');
console.log(buttonTest.classList);

function toggledOnOff(selector) {
    const button = document.querySelector(selector);
    console.log(button.classList);

    if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');

    } else {
        button.classList.remove('is-toggled');
    }
}