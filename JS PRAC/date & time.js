console.log("hello world!");
let date = new Date(); //realtime dates
console.log(date);
let otherDate =date.getDay();//returns index of  week days
otherDate = date.getDate();// returns nth day
otherDate = date.getFullYear();//returns current year
otherDate = date.getHours();//returns hours
otherDate = date.getMonth();//returns index month
otherDate= date.getMilliseconds();
otherDate = date.getMinutes();
otherDate = date.getTime();
otherDate = date.getTimezoneOffset();

console.log(otherDate);

let qwe = new Date();
qwe.setDate(5);//sets day = 5
qwe.setFullYear(2005);
qwe.setMonth(9);
qwe.setHours(9);
console.log(qwe);
