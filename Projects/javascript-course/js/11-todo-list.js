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
//let i = 1;loop variable
//Use when need a Non-standard loop
/*
while (i <= 3) {//loop condition

    console.log(i);//loop body 
    i++;//increment step
}
    */
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
/*
const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];//Accumulator Variable > result is an array
    numsDoubled.push(num * 2);
}
console.log(numsDoubled);
*/
//Todo List Practice 2
//Steps (Algorithm)
//1.Loop through the array
//2.Create some HTML code for each todo
//3.Put the HTML on web page
let todoList = JSON.parse(localStorage.getItem('todoList')) || [
];

renderTodoList();//display the todo list on the page


//To update html with new todo item, need run all this code again
function renderTodoList() {//render=to display something on the page


    let todoListHTML = '';//variable to store the result > `<p>${todo}</p>`

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name; > SHORTCUTED
        //const dueDate = todoObject.dueDate; > SHORTCUTED
        const { name, dueDate } = todoObject;
        const html = `
        
            <div>${name}</div>
            <div>${dueDate}</div>
            <div>
                <button class="delete-todo-button" onclick="
                todoList.splice(${i},1);
                renderTodoList();
                ">Delete</button>
            </div>
            `;
        //Generating the HTML: for each 'todo', we create each 'html'
        //combine all 'html' and put in the HTML web page: Accumulator Pattern
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    localStorage.setItem('todoList', JSON.stringify(todoList));

}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList
        .push({
            //name: name,if the property and variable name are the same
            //dueDate: dueDate,
            name,//shorhand property sintax
            dueDate
        }
        );

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();//everytime we add an item, we display the todo list again
    localStorage.setItem('todoList', JSON.stringify(todoList));
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
for (i = 0; i <= 10; i += 2) {//count by twos until 10
    console.log(i);
}
//11e
for (i = 5; i >= 0; i--) {//count to 5 until 0
    console.log(i);

}
//11f
let id11 = 0;
while (id11 <= 10) {//count by twos until 10
    console.log(id11);
    id11 += 2;
}
let ie11 = 5;

while (ie11 > 0) {//count to 5 until 0
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
//11i
function addNum(array, num) {
    const addedNum = [];

    for (let i = 0; i < array.length; i++) {
        const adding = array[i];
        addedNum.push(adding + num);

    }
    return addedNum
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));
//11j
function addArrays(array1, array2) {
    const addEach = [];

    for (let i = 0; i < array1.length && i < array2.length; i++) {
        addEach.push(array1[i] + array2[i]);

    }
    return addEach//the function returns the final result after processing all pairs of elements
}
console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));
//11k
function countPositive(nums) {
    let greater = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            greater++;
        }
    }
    return greater
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
//11l-m
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
    /*my resolution
    const wordsCount = {
        apple: 0,
        grape: 0
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word === 'apple') {
            wordsCount.apple++;
        } else if (word === 'grape') {
            wordsCount.grape++;
        }
    }
    return wordsCount
    */
    const result = {};//creating an empty object, to store key-value pairs

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        // result[word] adds/accesses a property using whatever is
        // saved inside the 'word' variable.
        // If word = 'apple', result[word] will do result['apple']
        // If word = 'grape', result[word] will do result['grape']
        if (!result[word]) {//used to initialize a count for a word the first time
            result[word] = 1;
        } else {
            result[word]++;//sum value into the word
        }
    }
    return result;
}
console.log(countWords(['apple', 'grape', 'apple', 'apple']));

//Arrays are references
const arrayA = [1, 2, 3];
const arrayB = arrayA.slice();//make it point to a different array
arrayB.push(4);
console.log(arrayA);
console.log(arrayB);
//Shortcut Destructuring
//const arrayC = [1, 2, 3];
const [firstValue, secondValue] = [1, 2, 3];
console.log(secondValue);
//More detais about loops
//1.break = exit a loop early
//2.contiue = skip 1 iteration
//remainder 7 % 3 => 1 | 6 % 3 => 0 (skip if divided by 3)
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
    if (i === 8) {
        break;
    }
}

let jay = 1;
while (jay <= 10) {
    if (jay % 3 === 0) {
        jay++;
        continue;
    }
    console.log(jay);
    jay++;
}
//Loops inside a function
function doubleArray(numms) {
    const numsDoubled = [];

    for (let i = 0; i < numms.length; i++) {
        const num = numms[i];//Accumulator Variable > result is an array
        if (num === 0) {
            //break;
            return numsDoubled;//another way to break
        }
        numsDoubled.push(num * 2);
    }
    return numsDoubled;
}
console.log(doubleArray([1, 1, 3]));
console.log(doubleArray([2, 2, 5, 0, 5]));
//11o-p
function findSeach() {
    let words = ['hello', 'world', 'search', 'good', 'search'];
    let index = -1;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'search') {
            index = i;
            break;
        }
    }
    return index
}
console.log(findSeach());

function findSeachs() {
    words = ['not', 'found'];
    index = -1;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'search') {
            index = i;
        }
    }

    return index
}
console.log(findSeachs());
//11q
function findIndexx(array, word) {
    let index = -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            index = i;
            break;
        }
    }
    return index
}
console.log(findIndexx(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndexx(['green', 'red', 'blue', 'red'], 'yellow'));
//11r-s update by myself
function removeEggs(foods) {
    const result = [];
    let countEgg = {};//empty object


    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];

        if (!countEgg[food]) {//initialize a count for a word the first time
            countEgg[food] = 1;
        } else {
            countEgg[food]++;//sum value into the word
        }
        // If the string is 'egg', use continue to skip it.
        if (countEgg.egg < 3 && food === 'egg') {
            continue;
        }
        // We don't need to have an else here because
        // the only way to reach this code is if the 
        // if-statement above is false.
        result.push(foods[i]);
    }
    console.log(countEgg);
    console.log(countEgg.egg);

    return result;
}
console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));
//11s update lesson
/*
function removeEgg(foods) {
    const result = [];
    let eggsRemoved = 0;

    for (let i = 0; i < foods.length; i++) {
      // Only skip 'egg' if we removed less than 2
      // of them so far.
      if (foods[i] === 'egg' && eggsRemoved < 2) {
        // Update the number of 'egg' we have removed.
        // This must be done before continue, otherwise,
        // doing continue first will just skip this code.
        eggsRemoved++;
        continue;
      }

      result.push(foods[i]);
    }

    return result;
  }

  console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
  */
//11t
function removeEggz(foods) {
    const reversedFoods = foods.slice().reverse();// To remove the last 2 'egg', reverse the array first.
    const result = [];
    let eggsRemoved = 0;

    for (let i = 0; i < reversedFoods.length; i++) {
        // Only skip 'egg' if we removed less than 2
        // of them so far.
        if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
            // Update the number of 'egg' we have removed.
            // This must be done before continue, otherwise,
            // doing continue first will just skip this code.
            eggsRemoved++;
            continue;
        }
        result.push(reversedFoods[i]);
    }
    return result.reverse()
}
console.log(removeEggz(['egg', 'apple', 'egg', 'egg', 'ham']));
//11u apllying slice()
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];

function removeEgg() {
    const reversedFoods = foods.slice().reverse();// To remove the last 2 'egg', reverse the array first.
    // This technique is called "method chaining", because we use one method after another
    const result = [];
    let eggsRemoved = 0;

    for (let i = 0; i < reversedFoods.length; i++) {
        // Only skip 'egg' if we removed less than 2
        // of them so far.
        if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
            // Update the number of 'egg' we have removed.
            // This must be done before continue, otherwise,
            // doing continue first will just skip this code.
            eggsRemoved++;
            continue;
        }
        result.push(reversedFoods[i]);
    }
    return result.reverse()
}
console.log(removeEgg((foods)['egg', 'apple', 'egg', 'egg', 'ham']));
console.log(foods);
//11v
for (let i = 1; i <= 20; i++) {


    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        continue;
    } else if (i % 3 === 0) {
        console.log('Fizz');
        continue;
    } else if (i % 5 === 0) {
        console.log('Buzz');
        continue;
    } else {
        console.log(i);
    }
}
//11w
//My solution > I can't use the previous exercise
function unique(array) {
    const result = [];
    let current = {};

    for (let i = 0; i < array.length; i++) {
        const word = array[i];

        if (!current[word]) {
            current[word] = 1;
            result.push(array[i]);
        } else {
            continue;
        }
        console.log(current);
    }
    return result;
}
console.log(unique((['green', 'red', 'blue', 'red'])));
console.log(unique((['red', 'green', 'green', 'red'])));
//previous exercise
function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        }
    }
    return -1;
}
function uniques(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const word = array[i];

        // Using the findIndex() function from above, we
        // can check if the string is already in the
        // result array. If it's not in the result array
        // (index is -1), then add it to the result array.
        if (findIndex(result, word) === -1) {
            result.push(word);
        }
    }
    return result;
}
console.log(uniques(['green', 'red', 'blue', 'red']));
console.log(uniques(['red', 'green', 'green', 'red']));