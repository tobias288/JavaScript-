function counter() {
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

let e = counter();

let b = document.getElementById('increment');
let c = document.getElementById('increaseButton');
let d = document.getElementById('decreaseButton');

function f() {
    b.textContent = e.getCounter();
};

increaseButton.addEventListener('click', () => {
    e.increment();
    f();
});

decreaseButton.addEventListener('click', () => {
    e.decrement();
    f();
});



