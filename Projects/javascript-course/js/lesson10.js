//10c
const buttonTest = document.querySelector('.js-test-button');
console.log(buttonTest.classList);
//10f
/*
function toggledOnOff(selector) {
    const button = document.querySelector(selector);
    console.log(button.classList);

    if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');

    } else {
        button.classList.remove('is-toggled');
    }
}
    */
//10g my solution, I misunderstand 
/*
function toggledOnOff(selector) {
    const button = document.querySelector(selector);
    const button1 = document.querySelector('.js-button');
    const button2 = document.querySelector('.js-button-2');
    const button3 = document.querySelector('.js-button-3');
    if (!button1.classList.contains('is-toggled') &&
        !button2.classList.contains('is-toggled') &&
        !button3.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}
    */
//exercise-solutions/lesson-10
function toggledOnOff(selector) {
    const button = document.querySelector(selector);

    if (!button.classList.contains('is-toggled')) {
        // Before turning this button ON, check if there's
        // already a button that's turned ON and turn it OFF.
        turnOffPreviousButton();

        button.classList.add('is-toggled');

    } else {
        button.classList.remove('is-toggled');
    }

    function turnOffPreviousButton() {
        const previousButton = document.querySelector('.is-toggled');
        if (previousButton) {
            previousButton.classList.remove('is-toggled');
        }
    }
}
//10h
function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    const totalCost = document.querySelector('.js-total-cost');

    let cost = Number(inputElement.value) * 100;//when change de variable, shift "const" to "let"

    if (cost >= 0 && cost < 4000) {
        cost = cost + 1000;
        totalCost.classList.remove('redText');

        document.querySelector('.js-total-cost')
            .innerHTML = ` $${cost / 100}`;
        console.log(` $${cost}`);
    } else if (cost < 0) {
        totalCost.classList.add('redText');
        document.querySelector('.js-total-cost')
            .innerHTML = ` Error: cost cannot be less than $0`;
    }


}
function typing(event) {//to put a value in to a function we can use a parameter"event"
    if (event.key === 'Enter') {
        calculateTotal();
    }

}

