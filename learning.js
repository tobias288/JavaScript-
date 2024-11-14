

let tobias2 = 0;

function tobiasUche() {

    return function() {
        tobias2++;
        return tobias2;
    };
};

let tobias3 = tobiasUche();
console.log(tobias3());
console.log(tobias3());
console.log(tobias3());

//another code challenge

function workingLove() {
    let manU = 0;

    function workMe() {
        manU++
        return manU;
    };

    return workMe;
};

let manUU = workingLove();
console.log(manUU());
console.log(manUU());
console.log(manUU());
