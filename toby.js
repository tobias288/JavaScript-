
function a(b, c) {
    return (b + c + " is a software developer.");
};

let e = a("Tobias ", "Uche");
console.log(e)

// function

function user(name, course) {
    console.log("Hello " + name, "you are " + course);
}

user("Tobias", "FrontEnd");

//

function r(q, t, o) {
    return q + t - o;
};

console.log(r(20, 2, 1));

//function expression
let j = [5, 10, 15, 20, 25, 26, 27, 28, 29, 30]
let t = function() {
    if (j == 20) {
        return "you can run";
    } else {
        return "wow! try again";
    };
};

console.log(t());


let z = 0;

while (z < 5) {
    console.log(`${z}  I love you`);
    z++;
}

// for loop
const Items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape'];

for (let a = 0; a < Items.length; a++) {
    console.log(a);
};


for (let b = 0; b < 5; b ++) {
    console.log(b);

}

const tobias = 'Orange';
const ifeoma = ['rice', 'beans', 'yam', 'Orange'];

switch (true) {
    case ifeoma.includes(tobias):
        console.log(`${tobias} i love you`)
        break;
    default:
        console.log(`${tobias} Love is wicked`)

}


// let i = 0;
// while (i < 5) {
//     console.log(i); // Output: 0, 1, 2, 3, 4
//     i++;
// }

// let h = ['rice', 'beans', 'yam', 'potato', 'spagetti'];
// let i = 'spagetti';

// switch (false) {
//     case h.includes(i):
//         console.log(`${i} is included in the list of array`);
//         break;
//     default:
//         console.log(`${i} is not included in the list of array`);
// };


// for (let p = 0; p < 5; p++) {
//     console.log(`${p} the number race`);
// };

// increment function

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























// function b() {

//     return function() {
//         a ++;
//         return a;
//     };

// };

// let c = b();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
































// let tobias2 = 0;

// function tobiasUche() {

//     return function() {
//         tobias2++;
//         return tobias2;
//     };
// };

// let tobias3 = tobiasUche();
// console.log(tobias3());
// console.log(tobias3());
// console.log(tobias3());

// //another code challenge

// function workingLove() {
//     let manU = 0;

//     function workMe() {
//         manU++
//         return manU;
//     };

//     return workMe;
// };

// let manUU = workingLove();
// console.log(manUU());
// console.log(manUU());
// console.log(manUU());
