// closure is a feature in javaScript where an inner function has 
// access to the variable of its outer function, even after the
// outer function has finished excecuting.

function outerFunction() {
    const outerVariable = "I am from outer Function";

    function innerFunction() {
        console.log(outerVariable)
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

// another example
function createCounter() {
    let counter = 0;

    return function() {
        counter++;
        return counter;
    };


};

const counterFunction = createCounter();
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
