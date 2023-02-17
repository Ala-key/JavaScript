function printMyName(str) {
    console.log(str);
}

printMyName("Almir Abdrasulov");

function areaCone(a,b,c) {
    console.log(a * b * c);
}

areaCone(10,2,3);

function getStringLength(str) {
    return str.length();
}
getStringLength("Hello World");


function printDigitOddorEven(value) {
    if (value % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

printDigitOddorEven(2);

function squareIt(number) {
    return number ** 2;
}

console.log(squareIt(5));

function getSqrtDigit(value) {
    return Math.sqrt(value);
}

getSqrtDigit(2);


function getAreaPentagon(a,b,c,d,e) {
    return a + b + c + d + e;
}

getAreaPentagon(2,4,5,6,7);
