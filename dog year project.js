

const myAge = 26;   // creating a variable myAge which is set to a number my age
let earlyYears = 2; // creating a variable earlyYears and given it value 2 that change within the code  
earlyYears *= 10.5;
let laterYears = myAge - 2; // equating the results of myAge - 2 to laterYears
laterYears *= 4; //making use of multiplication operator 
console.log(earlyYears, laterYears);
let myAgeInDogYears = earlyYears + laterYears; //adding the results of earlyYears and laterYears to myAgeInDogYears
const myName = 'Gyan'.toLowerCase(); //converting my name to lowercase by using .toLowerCase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);