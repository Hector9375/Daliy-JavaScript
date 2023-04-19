// toString
// 10진수 -> 2진수/16진수

let num = 10;

num.toString(); // "10"
num.toString(2); // "1010"

let nums = 255;

nums.toString(16); // "ff"

// Math

Math.PI;
3.141592653589793


let num1 = 5.1
let num2 = 5.7

// Math.ceil() : 올림
Math.ceil(num1); // 6
Math.ceil(num2); // 6

// Math.floor() : 내림
Math.floor(num1); // 5
Math.floor(num2); // 5

// Math.round() : 반올림
Math.round(num1); // 5
Math.round(num2); // 6

// 소수점 자릿수
let userRate = 30.1234;

// 요구사항 : 소수점 둘째자리 까지 표현(셋째 자리에서 반올림)
Math.round(userRate * 100)/100 // 30.12

// 소수점 자릿수 : toFixed() *문자열로 반환* 
userRate.toFixed(2); // "30.12"
userRate.toFixed(0); // "30"
userRate.toFixed(6); // "30.123400"

// Number추가로 인해 *숫자열 반환*
Number(userRate.toFixed(2)); // 30.12 

// isNaN
let x = Number('x'); // NaN
x == NaN //false
x === NaN // false
NaN == NaN // false

isNaN(x) // true
isNaN(3) // false

// parseInt()
let margin = '10px';

parseInt(margin); // 10
Number(margin); // NaN

let redColor = 'f3'
parseInt(redColor); // NaN

let redColor2 = 'f3'
parseInt(redColor2, 16); // 243

parseInt('11', 2); // 3

// parseFloat()
let padding = '18.5%';

parseInt(padding); // 18

parseFloat(padding); // 18.5

// Math.random() : 랜덤숫자 생성
// 요구사항 : 1~100 사이 임의의 숫자를 생성
Math.floor(Math.random()*100)+1

// Math.max(), Math.min()
Math.max(1,4,-1,10,9,5.54); // 10
Math.min(1,4,-1,10,9,5.54); // -1


// Math.abs() : 절대값 (absolute)
Math.abs(-1) // 1

// Math.pow(m, m) : 제곱 (power)
Math.pow(2, 10); // 1024

// Math.sqrt() : 제곱근 (sqaureroot)
Math.sqrt(16); // 4