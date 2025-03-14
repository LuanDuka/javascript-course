/*
Testing
    Easiest way to test
        Open the website and try out the code: Manutal Testing
            Disadvantages of Manual Testing
                1. Hard to test every situation
                2. Hard to re-test
            Automated Testing
                = using code to test code
                situation = test case
    2 Types of Test Cases
        1. Basic test cases
            = tests if the code is working or not
        2. Edge cases
            = test with values that are tricky
            group of related tests = test suite
    */

import { formatCurrency } from "../js/utils/money.js";

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {//Basic test cases
    console.log('passed');
} else {
    console.log('failed');
}

console.log('works with 0');

if (formatCurrency(0) === '0.00') {//Edge cases
    console.log('passed');
} else {
    console.log('failed');
}

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {//Edge cases
    console.log('passed');
} else {
    console.log('failed');
}

console.log('rounds down to the nearest cent');


if (formatCurrency(2000.4) === '20.00') {//Edge cases
    console.log('passed');
} else {
    console.log('failed');
}

console.log('negative number');


if (formatCurrency(-1) === '0.00') {//Edge cases
    console.log('passed');
} else {
    console.log('failed');
}

/*
Testing Framework
    = external libray that helps us write tests easier

    Jasmine
        Most testing framework are similar
        Other testing frameworks: Jest (for ReactjS) and MochaJS
*/