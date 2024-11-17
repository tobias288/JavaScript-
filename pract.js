 function incrementCounter() {
     let a = 0;

     return {
         increment: function() {
             a ++;
             return a;
         },
         decrement: function() {
            a --;
            return a;
        },
        getCounter: function() {
            return a;
        },
    };
};

let b = incrementCounter();

let c = document.getElementById('counter');
let d = document.getElementById('incrementButton');
let e = document.getElementById('decrementButton');

function g() {
    c.textContent = b.getCounter();
};

incrementButton.addEventListener('click', () => {
    b.increment();
    g();
});

decrementButton.addEventListener('click', () => {
    b.decrement();
    g();
});

g();

// practice

let name = "Sophia"
let Age = 22;
let Course = "Web development";
let School = "New Horizon";

// // Write your code here
// //console.log(`Hello ${name}, you are ${Age} years old, studying ${Course} at ${School}`)
// console.log('Hello ' + name + "," + "you are " + Age + "years old, studying " + Course + " at " + School)
// // concatenate and console the code

let age = [20, 25, 30, 45, 50];

let a = age.map(agee => agee.length());

if (a == 25) {
    console.log(`Welcome onboard`);
} else {
    console.log(`You are not welcome here`)
}

//

let h = ['rice', 'beans', 'yam', 'potato', 'spagetti'];
let i = 'spagetti';

switch (false){
    case h.includes(i):
        console.log(`Yes it's included`)
        break;
    default:
        console.log(`No. not there`)
};

//
function coding(a, b) {
    return a + b;
};

console.log(coding(5, 5))




// write your code here

const fruits6 = ['Apple', 'Banana', 'Cherry'];
let uppercaseFruits = fruits6.map(fruit => fruit.toUpperCase());
console.log(uppercaseFruits);

for (let i = 0; i < Items.length; i++) { // this loop from 0 - 4
    console.log(Items[i])
    if(i === 3){
        break;
    }
};

let h = ['rice', 'beans', 'yam', 'potato', 'spagetti'];
let i = 'spagetti';

switch (false) {
    case h.includes(i):
        console.log(`${i} is included in the list of array`);
        break;
    default:
        console.log(`${i} is not included in the list of array`);
};
