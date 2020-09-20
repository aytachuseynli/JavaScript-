 // If/else statement
var firstName = 'John';
var civilStatus = `single`;

if (civilStatus === `married`) {
    console.log(firstName + ` is married!`);

} else {
    console.log(firstName + ` will hopefully marry soon :)`);

}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ` is married!`);

} else {
    console.log(firstName + ` will hopefully marry soon ;)`);
}

var massMark = 53; //kg
var heightMark = 1.72; // meters

var massJohn = 100; 
var heightJohn = 182;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark\`s BMI is higher than John\`s.`);

} else {
    console.log(`John\`s BMI is higher than Mark\`s.`);
}

//Boolean Logic

var firstName = `John`;
var age = 15;

if (age < 13) {
    console.log(firstName + ` is a boy.`);
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ` is a teenager.`);
} else if (age > 20 && age < 30) {
    console.log(firstName + ` is a young man.`);
} else {
    console.log(firstName + ` is a man.`);
}


//The Thernary Operator and Switch Statements

var firstName = `John`
var age = 16;

age >= 16 ? console.log(firstName + ` drinks beer.`)
: console.log(firstName + ` drinks juice.`);

var drink = age >= 18 ? `beer` : `juice`;
console.log(drink);

if (age >= 18) {
    var drink = `beer`;
} else {
    var drink = `juice`;
}

//Switch statement
var job = `teacher`;
switch (job) {
    case `teacher`:
        console.log(firstName + ` teachers kids how to code.`);
    break;
    case `driver`:
        console.log(firstName + ` drives an uber in Lisbon.`);
    break;
    case `designer`:
        console.log(firstName + ` designs beautiful websites.`);
    break;
default:
    console.log(firstName + ` does something else.`);
}

age = 56;

switch (true) {
     case age < 13:
     console.log(firstName + ` is a boy.`);
     break;
     case age >= 13 && age < 20:
     console.log(firstName + ` is a teenager.`);
     break;
     case age >= 20 && age < 30:
     console.log(firstName + ` is a young man.`);
     break;
     default:
     console.log(firstName + ` is a man.`);
}

// Truthy and Falsy values and equality operators

 var height;
  
height = ``;

if (height || height === 0) {
    console.log(`Variable is defined`);
} else {
    console.log(`Variable has NOT been defined`);
}

// Equality operators
if (height === `23`) {
    console.log(`The == operator does type coercion!`);
}



// Challenge

var scoreJohn = (95 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) 
{
    console.log(`John\`s team wins with ` + scoreJohn + ` points`);
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) 
{
    console.log(`Mike\`s team wins with ` + scoreMike + ` points`);
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) 
{   console.log(`Mike\`s team wins with ` + scoreMike + ` points`);
} else {
    console.log(`There is a draw`);
}


//Functions

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

   if (retirement > 0) {
    console.log(firstName + ` retires in ` + retirement + ` years.`);    
   } else {
    console.log(firstName + ` is already retired.`)
   }
}

yearsUntilRetirement(1998, `John`);
yearsUntilRetirement(1948, `Mike`);
yearsUntilRetirement(1969, `Jane`);


//Function Statements and Expressions

 var whatDoYouDo = function(job, firstName) {
     switch(job) {
         case `teacher`:
             return firstName + ` teaches kids how to code`;
         case `driver`:
             return firstName + ` drives a cab in Lisbon.`;
         case `designer`:
             return firstName + ` designs beautiful websites.`;
         default:
              return firstName + ` does something else.`;
     }
 }

 console.log(whatDoYouDo(`teacher`, `John`));
 console.log(whatDoYouDo(`designer`, `Jane`));
 console.log(whatDoYouDo(`retired`, `Mark`));


 //Arrays

 var names = [`John`, `Mark`, `Jane`];
 var years = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 names[1] = `Ben`;
 names[names.length] = `Mary`;
 console.log(names);

//Different data types

var john = [`John`, `Smith`, 1990, `teacher`, false];

john.push(`blue`);
john.unshift(`Mr.`);
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf(`designer`) === -1 ?
 `John is NOT a designer` : `John Is a designer`;
 console.log(isDesigner);

 //Challenge

 function tipCalculator(bill) {
     var percentage;
     if (bill < 50) {
         percentage = .2;
     } else if (bill >= 50 && bill < 200) {
         percentage = .15;
     } else {
         percentage = .1;
     }
     return percentage + bill;
 }

 var bills = [124, 48,268];
 var tips = [tipCalculator(bills[0]),
             tipCalculator(bills[1]),
             tipCalculator(bills[2])];
        
 var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);


//Objects

var john = {
    firstName: `John`,
    lastName: `Smith`,
    birthYear: 1990,
    family: [`Jane`, `Mark`, `Bob`, `Emily`],
    job: `teacher`,
    isMarried: false
};

console.log(john.firstName);
console.log(john[`lastName`]);
var x = `birthYear`;
console.log(john[x]);

john.job = `designer`;
john[`isMarried`] = true;
console.log(john);

var jane = new Object();
jane.firstName = `Jane`;
jane.birthYear = 1969;
jane[`lastName`] = `Smith`;
console.log(jane);

//Objects and methods

var john = {
    firstName: `John`,
    lastName: `Smith`,
    birthYear: 1990,
    family: [`Jane`, `Mark`, `Bob`, `Emily`],
    job: `teacher`,
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

//Challenge

var john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.85,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ` has a higher BMI of ` + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ` has a higher BMI of ` + mark.bmi);
} else {
    console.log(`They have the same BMI`);
}

// Loops and iteration

for (var i=1; i <+ 20; i += 2) {
    console.log(i);
}

var john = [`John`, `Smith`, 1990, `designer`, false, `blue`];
for (var i=0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


//Challenge

var john = {
    fullName:`John Smith`,
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) 
        { 
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill <200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: `Mark Miller`,
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i=0; i < this.bills.length; i++)
        { 
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) 
            {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) 
            {
                percentage = .15;
            } else 
            {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) 
    {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + `\`s family pays higher tips, with an average of $` + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + `\`s family pays higher tips, with an average of $` + mark.average);
}





