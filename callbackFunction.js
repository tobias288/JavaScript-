// 5 November 2024

// Definition: A callback is a function passed into
// another function as an argument, which is then
//invoked inside the outer
// function to complete some kind of routine or action
// function definition with a callback function

function sayHello(name, callback) {
    console.log(`Hello ${name}`);
    callback();
};

function sayGoodbye() {
    console.log(`Welcome to my App`)
};

sayHello("Tobias", sayGoodbye);



// function expression
function sayHello2(name, callback) {
    console.log(`Hello ${name}`);
    callback();
};

let a = function() {
    console.log(`Welcome to my App`)
};

sayHello2("Tobias", a);

// arrow tip
// function expression
function sayHello2(name, callback) {
    console.log(`Hello ${name}`);
    callback();
};

const b = () => {
    console.log('How are you doing?')
}

sayHello2("Tobias", b);

//call back function
const greetUser = (name, firstcallback, secondcallback) => {
    console.log(`Hello ${name}`);
    firstcallback()
    secondcallback()
};

const welcomeMessage = () => {
    console.log(`welcome to our app`)
}

const offerService = () => {
    console.log(`pls how can we help you?`)
}

greetUser('Tobias', welcomeMessage, offerService)

//Assignment

let intro = (name, myself, myCourse, myCompany) => {
    console.log(`I am  ${name}`);
    myself();
    myCourse();
    myCompany();
};

let e = () => {
    console.log(`I am a software developer`);
}

let f = () => {
    console.log(`I am currently studying web development`)
}

let g = () => {
    console.log(`I would love to work with Microsoft and Google company`)
}

intro("Tobias", e, f, g)