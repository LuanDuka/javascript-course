greeting();
function greeting() {
    console.log('hello');
}
greeting();

const num = 2;
const oneFunction = function () {
    console.log('hello2');
};

console.log(oneFunction);
console.log(typeof oneFunction);
oneFunction();

const object1 = {
    num: 2,
    fun: function () {
        console.log('hello3');
    }
};
object1.fun();

function display(param) {
    console.log(param);
}
display(2);

function run(param) {
    param();
}
run(function () {
    console.log('hello4');
});



setTimeout(function () {
    console.log('timeout');
    console.log('timeout2');
}, 3000);

console.log('next line');

setInterval(function () {
    console.log('interval');
}, 3000);

console.log('next line 2');
//.forEach() is the preferred way to loop through an array
[
    'make dinner',
    'wash dishes',
    'watch youtube'
    // ].forEach(function (value, index) {
].forEach((value, index) => {
    if (value === 'wash dishes') {
        return;//does the same thing as contiue;
    }
    console.log(index);
    console.log(value);
});
//12a
const add = function () {
    console.log(2 + 3);
}
add();
add();
//12b
function runTwice(fun) {
    fun();
    fun();
}
runTwice(function () {
    console.log('12b');
});
runTwice(add);
//12c-d
function startButton() {
    const inputElement = document.querySelector('.start-button');

    inputElement.innerText = 'Loading...';
    setTimeout(function () {
        inputElement.innerText = 'Finished!'
    }, 1000);
}
//12e-f
//let intervalId;//save the ID

function addToCart() {
    const inputElement = document.querySelector('.text-added');
    inputElement.innerText = 'Added';

    // First, cancel the previous timeout so that
    // it doesn't remove the message too quickly.
    clearInterval(intervalId);

    intervalId = setTimeout(function () {
        inputElement.innerText = '';
    }, 2000);
}
//12g-i
let messages = 2;
/*
document.title = `(${messages}) New messages`;

function attMessages(count) {
    messages = messages + count;
    console.log(messages);

    if (messages <= 0) {
        document.title = 'App';
        return;

    } else if (messages >= 1) {
        document.title = `(${messages}) New messages`;
    }
}
*/
//Exercise solution
// Save the intervalId in case we need to cancel it.
let intervalId;
// We'll use this variable to keep track of whether
// or not we're displaying the notification.
let isDisplayingNotification;
// Start displaying the notification in the tab
// when the page first loads.
displayNotification();

function attMessages(count) {
    messages += count; // Update the messages variable

    if (messages <= 0) {
        messages = 0; // Ensure messages doesn't go below 0
        stopNotification();
    } else {
        displayNotification();
    }

    console.log(messages); // Debugging: log the current value of messages
    return messages;
}


function displayNotification() {
    // If we're already displaying the notification,
    // stop this function because we don't want to
    // create 2 intervals at the same time.
    if (isDisplayingNotification) {
        return;
    }

    isDisplayingNotification = true;

    intervalId = setInterval(function () {
        if (document.title === 'App') {
            document.title = `(${messages}) New messages`;
        } else {
            document.title = 'App';
        }
    }, 1000);
}
function stopNotification() {
    isDisplayingNotification = false;

    clearInterval(intervalId);
    document.title = 'App';
}
//Regular Function: don't have shortcuts
const regularFunction = function (param, param2) {
    console.log('hello ');
    return 5;
};
//Arrow Functions: have shortcuts
const arrowFunction = (param, param2) => {
    console.log('hello');
    return 5;
};
arrowFunction();

const oneParam = param => {
    console.log(param + 1)
};
oneParam(2);

// const oneLine = () => {
//  return 2 + 3 };
const oneLine = () => 2 + 3;
console.log(oneLine());

const object2 = {
    method: () => {

    },
    //Shorthand Method sintax
    method() {

    }
}
//Method .addEventListener()
//lets us run some code when we interact with the element
const buttonElement = document.querySelector('.js-click-button');
//Multiple event listeners for an event
const eventListener = () => {//arrow function
    console.log('click');
};
buttonElement.addEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {//arrow function
    console.log('click2');
});
//Can remove an event listener . removeEventListener()
buttonElement.removeEventListener('click', eventListener);
//Best practice: use addEventListener() instead of onclick=""
