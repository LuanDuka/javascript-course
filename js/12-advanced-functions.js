greeting();
function greeting() {
    console.log('hello');
}
greeting();//calling the function

const num = 2;
const oneFunction = function () {//puting a function inside a variable
    console.log('hello21');
};

console.log(oneFunction);
console.log(typeof oneFunction);//variable is a function type
oneFunction();//shows the console.log line 9

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
}, 3000);//happens after 3s

console.log('next line');

setInterval(function () {
    console.log('interval');
}, 3000);//happens each 3s

console.log('next line 2');
//.forEach() is the preferred way to loop through an array
//
[
    'make dinner',
    'wash dishes',
    'watch youtube'
    // ].forEach(function (value, index) {
].forEach((value, index) => {//arrow function 
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
//12c-d updated 12q

const inputStartButton = document.querySelector('.start-button');

const loadingFinished = () => {
    inputStartButton.innerText = 'Loading...';
    setTimeout(() => {
        inputStartButton.innerText = 'Finished!'
    }, 1000);
    // console.log('cliki');
}
inputStartButton.addEventListener('click', loadingFinished);

//12e-f updated 12q
//let intervalId;//save the ID
/*
function addToCart() {
    const inputElement = document.querySelector('.text-added');
    inputElement.innerText = 'Added';

    // First, cancel the previous timeout so that
    // it doesn't remove the message too quickly.
    clearInterval(intervalId);

    intervalId = setTimeout(() => {
        inputElement.innerText = '';
    }, 2000);
}*/
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
/*
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
}*/

function displayNotification() {
    // If we're already displaying the notification,
    // stop this function because we don't want to
    // create 2 intervals at the same time.
    if (isDisplayingNotification) {
        return;
    }

    isDisplayingNotification = true;

    intervalId = setInterval(() => {
        if (document.title === 'App') {
            document.title = `(${messages}) New messages`;
        } else {
            document.title = 'App';
        }
    }, 1000);//change title each 1s
}
function stopNotification() {
    isDisplayingNotification = false;

    clearInterval(intervalId);
    document.title = 'App';
}
//Regular Function: don't have shortcuts
const regularFunction = function (param, param2) {
    console.log('hello ');
    return 7;
};
//Arrow Functions: have shortcuts
const arrowFunction = (param, param2) => {
    console.log('hello');
    return 7;
};
arrowFunction();

const oneParam = param => {//when have just one parameter
    console.log(param + 1)
};
oneParam(2);

// const oneLine = () => {
//  return 2 + 3 };
const oneLine = () => 2 + 3;//one line of code
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
    console.log('click');//"listen" the 'click' of the button
};
buttonElement.addEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {//arrow function
    console.log('click2');
});
//Can remove an event listener .removeEventListener()
buttonElement.removeEventListener('click', eventListener);
//Best practice: use addEventListener() instead of onclick=""

//2 more array methods: 
// .filter() 
// 1. Creates a new array[]
// 2. return true, => put value in array
// 3. return false, => not put value in array
console.log([1, -3, 5].filter((value, index) => {
    /* if (value >= 0) {
         return true;
     } else {
         return false;
     }*/
    return value >= 0;//does the same thing that lines above
}));
//and .map() : transform an array into another array
// 1. Creates a new array[]
// 2. Whatever we return => added to new array
console.log([1, 1, 3].map((value, index) => {
    return value * 2;
}));
//Shortcuts of arrow functions
//remove () because just 1 parameter
//remove {} and return, because have only one line of code
console.log([1, 1, 3].map(value => value * 2));
//Closure
//If a function has access to a value
//It will always have access to that value
//value gets packaged together (enclosed) with the function

//12j-k
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
console.log(multiply(7, 10));
//12l
function countPositive(nums) {
    let positive = 0;

    nums.forEach((value) => {
        if (value > 0) {
            positive++;
        }
    });
    return positive;
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
//12m
function addNum(array, num) {
    // When there is only 1 parameter, the brackets are optional
    // So we can also write: value => value + num
    return array.map(value => value + num);//because is a function, need return
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));
//12n
function removeEggs(foods) {
    // If food is 'egg', the inner function returns false and the food is not included in the result.
    // Otherwise, the inner function returns true and the food is included in the result. 
    return foods.filter((food) => food !== 'egg');

}
console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));
//12o
function removeEgg(foods) {
    let eggsRemoved = 0;

    return foods.filter((food) => {
        // If the food is 'egg', we should return false but only if we haven't removed 2 eggs already
        if (food === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            return false;
        }
        return true;

    });

}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
//12q update button
const inputAddToCartButton = document.querySelector('.add-to-cart-button')

const addToCartListener = () => {
    const inputElement = document.querySelector('.text-added');
    inputElement.innerText = 'Added';

    // First, cancel the previous timeout so that
    // it doesn't remove the message too quickly.
    clearInterval(intervalId);

    intervalId = setTimeout(() => {
        inputElement.innerText = '';
    }, 2000);
}
inputAddToCartButton.addEventListener('click', addToCartListener);
//12q update 12i
const attMessagesButtons = document.querySelectorAll('.att-messages-button');

const attMessagesListener = (count) => {
    messages += count; // Update messages

    if (messages <= 0) {
        messages = 0; // Prevent negative values
        stopNotification();
    } else {
        displayNotification();
    }

    console.log(messages);
};
// Attach event listeners with a wrapper function to pass the right count
attMessagesButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent.trim().toLowerCase() === "add") {
            attMessagesListener(1);  // Pass +1 when clicking "Add"
        } else {
            attMessagesListener(-1); // Pass -1 when clicking "Remove"
        }
    });
});
//12r-s update rock paper scissor
