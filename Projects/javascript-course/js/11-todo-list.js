//Lesson 11 - Arrays: another type of value, represent a list of values
const myArray = [10, 20, 30];
console.log(myArray);
console.log(myArray[1]);

myArray[0] = 99;
console.log(myArray);

[1, 'hello', true, { name: 'socks' }, [1, 2]]

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

console.log(myArray.length);

myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);//position and quantity to remove
console.log(myArray);

//Lesson 11 - Loops
let i = 1;//loop variable
//Use when need a Non-standard loop
while (i <= 3) {//loop condition

    console.log(i);//loop body 
    i++;//increment step
}
//Non-standard loop
let randomNumber = 0;

while (randomNumber < 0.5) {
    randomNumber = Math.random();
}

console.log(randomNumber);

for (let i = 1; i <= 5; i++) {//loop variable;loop condition; increment step
    console.log(i);
}

//Steps (Algorithm)
//1.Create a array to store todos
//2.When we click "Add"
//3.Get text from textbox
//4.Add it to array
//5.console.log() the array

const todoList1 = [];//Todo List Practice 1

function addTodo1() {
    const inputElement = document.querySelector('.js-name-input1');
    const name = inputElement.value;

    todoList1
        .push(name);
    console.log(todoList1);

    inputElement.value = '';
}

//Looping Through an Array
//1.Go through each value of an array one by one
//2.Do something with each value

const todoListSecond = [
    'make dinner',
    'wash dishes',
    'watch youtube'
];

for (let i = 0; i <= todoListSecond.length - 1; i++) {
    const value = todoListSecond[i];
    console.log(i);
    console.log(value);
}

//Shortcuts for looping trhough an array
//index <= todoListSecond.length - 1 >> index < todoListSecond.length
//i=index

//Accumulator Pattern
//1.Create a variable to store the result
//2.Loop through the array and update the result
const nums = [1, 1, 3];//sum all the elements
let total = 0;//Accumulator Variable > result is a number

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
}
console.log(total);

const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];//Accumulator Variable > result is an array
    numsDoubled.push(num * 2);
}
console.log(numsDoubled);

//Todo List Practice 2
//Steps (Algorithm)
//1.Loop through the array
//2.Create some HTML code for each todo
//3.Put the HTML on web page
const todoList = ['make dinner', 'wash dishes'];

renderTodoList();//display the todo list on the page


//To update html with new todo item, need run all this code again
function renderTodoList() {//render=to display something on the page


    let todoListHTML = '';//variable to store the result > `<p>${todo}</p>`

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;//Generating the HTIM: for each 'todo', we create each 'html'
        //combine all 'html' and put in the HTML web page: Accumulator Pattern
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList
        .push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();//everytime we add an item, we display the todo list again
}

//Main Idea of JavaScript
//When creating websites with JavaScript
//1.Save the data       >> const todoList = ['make dinner', 'wash dishes'];
//2.Generate the HTML   >> let todoListHTML = '';...for (let i ...const html...
//3.Make it interactive

//Lesson 11 Exercises
//11a
const numbs = [10, 20, 30];
numbs[2] = 45;
console.log(numbs);
//11b
function getLastValue(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}
// console.log(getLastValue([1, 20, 22, 24, 5]));
// console.log(getLastValue(['hi', 'hello', 'hey']));
//11c
function arraySwap(array) {
    const finalIndex = array.length - 1;
    // We need to save the values first before swapping.
    // Otherwise, if we swap directly,
    // we would lose one of the values.
    const lastValue = array[finalIndex];
    const firstIndex = array[0];

    array[0] = lastValue;
    array[finalIndex] = firstIndex;

    return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'hey']));
//11d
for (i = 0; i <= 10; i += 2) {
    console.log(i);
}
//11e
for (i = 5; i >= 0; i--) {
    console.log(i);

}
//11f
let id11 = 0;
while (id11 <= 10) {
    console.log(id11);
    id11 += 2;
}
let ie11 = 5;

while (ie11 > 0) {
    console.log(ie11);
    ie11--;
}
//11h
function addOne(array) {
    const increased = [];

    for (let i = 0; i < array.length; i++) {
        const byOne = array[i];
        increased.push(byOne + 1);
    }
    return increased
}
console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));
//11l
function minMax(nums) {
    let min = null;// Set the starting to null
    let max = null;
    //let min = null;// Initialize with the first element
    //let max = null;

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (min === null || current < min) {
            min = current;// Update min if current element is smaller or null
        }
        if (max === null || current > max) {
            max = current;// Update max if current element is larger or null
        }
    }

    return { min, max }// Return an object with min and max
}
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, - 10]));
console.log(minMax([]));
console.log(minMax([3]));
//11n
function countWords(words) {
    let property = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        property = object[word];
        console.log(property);
    }
    return word
}
console.log(countWords(['apple', 'grape', 'apple', 'apple']));