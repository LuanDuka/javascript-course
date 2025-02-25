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
const nums = [1, 1, 3];
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