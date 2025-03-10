import { dayjs } from "../javascript-amazon-project/js/checkout/orderSummary.js";

const today = dayjs();
console.log(dayjs().format('YYYY-MM-DD'));
//15a
const fiveAfter = today.add(5, 'days').format('YYYY-MM-DD');
console.log(fiveAfter);
//15b
const monthLater = today.add(1, 'month').format('YYYY-MM-DD')
console.log(monthLater);
//15c
const monthBefore = today.subtract(1, 'month').format('YYYY-MM-DD')
console.log(monthBefore);
//15d
const dayOfWeek = today.format('dddd');
console.log(dayOfWeek);

/*
for (let i = 0; i < 365; i++) {
    let weekendDay = {};

    const isWeekend = today.add(i, 'days').format('dddd');
    if (isWeekend === 'Monday' || isWeekend === 'Tuesday') {
        weekendDay.push(isWeekend);
    }

    console.log(weekendDay);

}
*/

//15e
function isWeekend(day1, day2) {
    const dayName = [];

    for (let i = 0; i < 30; i++) {
        const allDays = today.add(i, 'days').format('dddd');
        const whatDay = today.add(i, 'days').format('DD-MM-YYYY');

        if (allDays === day1 || allDays === day2) {
            dayName.push(whatDay);
        }
    }

    return dayName;
}
console.log(isWeekend('Saturday', 'Sunday'));

export default isWeekend;