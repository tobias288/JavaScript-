//document.write
//window.alert
//console.log
//document.getElementById

/*
multi
line
comments
*/

//document.write('working with javascript');
//window.alert('working with javascript');
//console.log('working with javascript');
// document.getElementById('info').innerHTML = "Welcome to Toby Tech World"; //string data type
//document.getElementById('info2').innerHTML = 555; //number data type

//let a = "My first javascript class";
//let b = "Jonny James";
//let c;
//let d = 100;
//let e = 5353535353535353535353535335535353535335n;
//let f = true;

//document.getElementById('info3').innerHTML = b + " " + a;
//document.getElementById('info3').innerHTML = c;
//c = "it's fun working with javascript"; //reassigned value
//document.getElementById('info5').innerHTML = c;
//document.getElementById('info6').innerHTML = d < e;
//document.getElementById('info7').innerHTML = typeof a;
//document.getElementById('info8').innerHTML = typeof e;

//let person = {
  //  fname: 'John',
    //lname: 'James',
    //gender: 'male',
    //age: '25',
    //email: 'tobiasuche7@gmail.com'
// };

//let cars = ['Toyota', 'BWM', 'Honda', 'Lexus', 'Mercedes'] //an array data type

//document.getElementById("info").innerHTML = "My name is: " + person.fname + " " + person.lname + ". My email is: " + person.email;
//document.getElementById('info2').innerHTML = typeof person;
//document.getElementById('info3').innerHTML = typeof cars;
//document.getElementById('info4').innerHTML = cars.length;
//cars.push('Venza');
//document.getElementById('info5').innerHTML = cars.length;
//document.getElementById('info6').innerHTML = cars;


//arithmetic operators + - * / % ++ -- **
//assignemtn operators = += -+ *= /= %= **=
//comparison operators ==(checking the comparison) ===(checking the comparison & data type) !=(not equals to) !== > < >= <=
//logical operators &&(and) ||(or) !(not)
//string operators +(concatenate)
//type operators typeof
//bitwise operators & | ~
//ternary operators ?


//let b = '500';
//let c = 500;

//document.getElementById('info7').innerHTML = b === c;//example of checking the comparison & data type
//document.getElementById('info8').innerHTML = b == c;//example of checking the comparison

function myInfo() {
    alert('First name: Tobias');
    alert("Middle name: Joseph");
    alert('Last name: Uchechukwu');
    alert('DoB: April 22');
    alert('Gender: Male');
    alert('Email: tobiasuche7@gmail.com');
    document.getElementById('demo').innerHTML = 'First Name: Tobias <br> Middle Name: Joseph <br> Last Name: Uchechukwu';
};

//myInfo()


let fruit = 'Orange';

switch (fruit) {
  case 'Apple':
    console.log(`This matched the name ${fruit}`);
    break;
  case 'Banana':
    console.log(`This matched the name ${fruit} `);
    break;
  case 'Orange':
    console.log(`Wow! Congrats, you made it ${fruit} `);
    break;
  default:
    console.log(`This matched the name ${fruit} `);
}


