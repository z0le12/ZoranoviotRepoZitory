function codingChallengeOne() {
    let markHeight = 1.92;
    let johnHeight = 1.85;

    let markWeight = 93;
    let johnWeight = 90;

    let markBMI = markWeight / (Math.pow(markHeight, 2));
    let johnBMI = johnWeight / (johnHeight ** 2);

    let resultBMI =  markBMI > johnBMI;

    console.log(`Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}. Therefore, is Mark's BMI higher than John's? NO, the result is ${resultBMI}`);
}
// codingChallengeOne()

function codingChallengeTwo() {
    johnGameOnePoints = 89;
    johnGameOnePoints = 120;
    johnGameOnePoints = 103;
    johnAverageGamePoints = (johnGameOnePoints + johnGameOnePoints + johnGameOnePoints ) / 3;

    mikeGameOnePoints = 116;
    mikeGameTwoPoints = 94;
    mikeGameThreePoints = 123;
    mikeAverageGamePoints = (mikeGameOnePoints + mikeGameTwoPoints + mikeGameThreePoints ) / 3;

    maryGameOnePoints = 97;
    maryGameOnePoints = 134;
    maryGameOnePoints = 105;
    maryAverageGamePoints = (maryGameOnePoints + maryGameOnePoints + maryGameOnePoints ) / 3;

    if(johnAverageGamePoints > mikeGameOnePoints && johnAverageGamePoints > maryAverageGamePoints) {
        console.log(`John's team is the winner, because John's team scores ${johnAverageGamePoints} on average, while Mike's team scores ${mikeAverageGamePoints} points and Mary's team scores ${maryAverageGamePoints} points on average`);
    } else if(mikeGameOnePoints > johnAverageGamePoints && mikeGameOnePoints > maryAverageGamePoints) {
        console.log(`Mikes's team is the winner, because Mike's team scores ${mikeAverageGamePoints} points on average, while John's team scores ${johnAverageGamePoints} points and Mary's team scores ${maryAverageGamePoints} points on average`);
    } else if(maryAverageGamePoints > johnAverageGamePoints && maryAverageGamePoints > mikeGameOnePoints) {
        console.log(`Mary's team is the winner, because Mary's team scores ${maryAverageGamePoints} points on average, while John's team scores ${johnAverageGamePoints} points and Mikes's team scores ${mikeAverageGamePoints} points on average`);
    } else {
        console.log(`There is no winner, because both of the teams scores the same points on average, Mike's team scores ${mikeAverageGamePoints} and John' team scores ${johnAverageGamePoints} on average`);
    };
};
// codingChallengeTwo()

function codingChallengeThree() {
    let firstName = 'John';
    let billOne = 124;
    let billTwo = 48;
    let billThree = 268;

    let tips = [];
    let totalAmounts = [];

    let determineTip = function(bill) {
        if(bill < 50) {
            let tip = Math.round(bill * 0.2);
            console.log(`The tip that ${firstName} gave was ${tip}$`);
            tips.push(tip);
            let expenditure = bill + tip;
            console.log(`The total amount spent by ${firstName} and his family was ${expenditure}`);
            totalAmounts[totalAmounts.length] = expenditure;
        }  else if (bill >= 50 && bill < 200) {
            let tip = Math.round(bill * 0.15);
            console.log(`The tip that ${firstName} gave was ${tip}$`);
            tips.push(tip);
            let expenditure = bill + tip;
            console.log(`The total amount spent by ${firstName} and his family was ${expenditure}`);
            totalAmounts[totalAmounts.length] = expenditure; 
        } else if (bill > 200) {
            let tip = Math.round(bill * 0.1);
            console.log(`The tip that ${firstName} gave was ${tip}$`);
            tips.push(tip);
            let expenditure = bill + tip;
            console.log(`The total amount spent by ${firstName} and his family was ${expenditure}`);
            totalAmounts[totalAmounts.length] = expenditure;
        } else {
            console.log(`${firstName} gave no tip`);
        }
    };
    determineTip(billOne);
    determineTip(billTwo);
    determineTip(billThree);
    console.log(`Tips ${tips}, total amounts ${totalAmounts}`);
};
// codingChallengeThree();

function _test1() {
    let john = {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false,
        calcAge: function() {
           return john.age = new Date().getFullYear() - john.birthYear;
        }
    };
    john.calcAge();
    console.log(john);
}
// _test1();

function codingChallengeFour() {
    let mark = {
        firstName: 'Mark',
        mass: 93,
        height: 1.92,

        calcBMI: function() {
            return mark.mass / (mark.height ** 2);
        }
    };

    let john = {
        firstName: 'John',
        mass: 90,
        height: 1.85,

        calcBMI: function() {
            return this.mass / (this.height ** 2);
        }
    };

    if(mark.calcBMI() > john.calcBMI()) {
        console.log(`${mark.firstName} has a greater BMI index of ${mark.calcBMI()} than ${john.firstName}'s ${john.calcBMI()}`);
    } else if(mark.calcBMI() < john.calcBMI()) {
        console.log(`${john.firstName} has a greater BMI index of ${john.calcBMI()} than ${mark.firstName}'s ${mark.calcBMI()}`);
    } else {
        console.log(`Both ${john.firstName} and ${mark.firstName} have the same BMI index`)
    };
};
// codingChallengeFour();

function _test2() {
    //променување на let и вар во for-от!!!
    for(let i = 0; i <= 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
}
// _test2();

function littleCodingChallenge() {
    let john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

    for(let i = john.length - 1; i >= 0; i--) {
        console.log(john[i]);
    }
}
// littleCodingChallenge();

function codingChallengeFive() {
    

    let johnFamily = {
        bills: [124, 48, 268, 180, 42],
        tips: [],
        totalAmounts: [],

        tipCalc: function() {
            for(let i = 0; i < this.bills.length; i++) {
                if(this.bills[i] < 50) {
                    this.tips.push(Math.round(this.bills[i] * 0.2));
                    this.totalAmounts.push(this.bills[i] + Math.round((this.bills[i] * 0.2)));
                } else if(this.bills[i] >= 50 && this.bills[i] < 200) {
                    this.tips.push(Math.round(this.bills[i] * 0.15));
                    this.totalAmounts.push(this.bills[i] + Math.round((this.bills[i] * 0.15)));
                } else if (this.bills[i] >= 200) {
                    this.tips.push(Math.round(this.bills[i] * 0.1));
                    this.totalAmounts.push(this.bills[i] + Math.round((this.bills[i] * 0.1)));
                } else {
                    this.tips.push('No tip was given');
                }
            };
        }
    };
    johnFamily.tipCalc();
    console.log(`Tips are equal to ${johnFamily.tips}, and the total amounts paid are equal to ${johnFamily.totalAmounts}`);

    let markFamily = {
        bills: [77, 375, 110, 45],
        tips: [],
        totalAmounts: [],

        tipCalc: function() {
            for(let i = 0; i < this.bills.length; i++) {
                if(this.bills[i] < 100) {
                    this.tips.push(Math.round(this.bills[i] * 0.2));
                    this.totalAmounts.push(this.bills[i] + Math.round((this.bills[i] * 0.2)));
                } else if(this.bills[i] >= 100 && this.bills[i] <= 300) {
                    this.tips.push(Math.round(this.bills[i] * 0.1));
                    this.totalAmounts.push(this.bills[i] + Math.round((this.bills[i] * 0.15)));
                } else if (this.bills[i] > 300) {
                    this.tips.push(Math.round(this.bills[i] * 0.1));
                    this.totalAmounts.push(this.bills[i] + Math.round((this.bills[i] * 0.1)));
                } else {
                    this.tips.push('No tip was given');
                }
            };
        }

    };
    markFamily.tipCalc();
    console.log(`Tips are equal to ${markFamily.tips}, and the total amounts paid are equal to ${markFamily.totalAmounts}`);

    function tipingAverages() {
        let tipAverageJohn = 0;
        let tipAverageMark = 0;

        for(let i = 0; i < johnFamily.tips.length; i++) {
            tipAverageJohn = tipAverageJohn + johnFamily.tips[i];
            if(markFamily.tips[i] === undefined) {
                continue;
            } else {
                tipAverageMark = tipAverageMark + markFamily.tips[i];
            }
        };
        tipAverageJohn = tipAverageJohn / johnFamily.tips.length;
        tipAverageMark = tipAverageMark /  markFamily.tips.length;

        if(tipAverageJohn > tipAverageMark) {
        console.log(`John has tiped more on average, because his tip average is equal to ${tipAverageJohn}, while Mark's is ${tipAverageMark}`);
        } else if(tipAverageJohn < tipAverageMark) {
            console.log(`Mark has tiped more on average, because his tip average is equal to ${tipAverageMark}, while John's is ${tipAverageJohn}`);
        } else {
            console.log(`There is no bigger tipster, both John and Mark have tipped equaly`)
        }
    }
    tipingAverages();
};
// codingChallengeFive();

function _test3() {
    let a = '1';
    let b = 1;
    console.log('1' + 1);
    console.log(1 + '1');
}
// _test3();

function objects() {
    function Person(name, birthYear, occupation) {
        this.name = name;
        this.birthYear = birthYear;
        this.occupation = occupation;

        this.calcAge = function() {
            return console.log(new Date().getFullYear() - this.birthYear);
        };
    };

    // function Adult() {
    //     this.work = function() {
    //         return console.log(`${this.name} is working as a ${this.occupation}`);
    //     };
    //     // this.__proto__ = new Person('John', 1989, 'teacher');
    //     // this.__proto__ = new Person('Mark', 2003, 'student');
    // };

    // function Minor() {
    //     this.activity = function() {
    //         return console.log(`${this.name} is a ${this.occupation}`)
    //     };
    // };

    function Minor(name, birthYear, occupation){
        Person.call(this, name, birthYear, occupation);
        this.activity = function() {
          return console.log(`${this.name} is a ${this.occupation}`)
        };
    };

    // Adult.prototype = new Person;
    // Minor.prototype = new Person;
    // let John = new Adult('John', 1989, 'teacher');
    let Mark = new Minor('Mark', 2003, 'student');
    // console.log(John);
    console.log(Mark);
};
// objects();

function _test4() {
    let a = 23;
    let b = a;
    a = 33;

    console.log(a);
    console.log(b);

    let objOne = {
        name: 'John',
        age: 23
    };

    let objTwo = objOne;
    objOne.age = 33;

    console.log(objOne);
    console.log(objTwo);
};
// _test4();

function _test5() {
    function retirement(retirementAge) {
        let a = ` years until retirement`;
        return function(yearOfBirth) {
            let now = new Date().getFullYear();
            console.log(retirementAge - (now - yearOfBirth) + a);
        }
    }
    retirement(65)(1990);
};
// _test5();

function _test6() {
    let a = document.querySelectorAll(`.sucking, .heading`);
    console.log(a);
    let b = Array.prototype.slice.call(a);
    console.log(b);
};
// _test6();

function _test7() {
    let pre = null;
    document.addEventListener('keypress', (evt) => {   
        if(evt.keyCode === 13) {
            let dice = Math.floor(Math.random() * 6) + 1;        
            console.log(`previous ${pre}, generiran ${dice}`);
            pre = dice;
        };
    });
};
// _test7();

// var color = 'Green';
// var position = 1;

function _test8() {
    // this.color = 'Green';
    // this.position = 1;

    var Box5 = {
        color: 'Green',
        position: 1,

        a: console.log(this),

        clickMe: function() {
            console.log(this);
            document.querySelector('.sucking').addEventListener('click', function() {
                console.log(this);
                alert('This is box number ' + this.position + ' and it is of color ' + this.color);
            }.bind(this));
        }
    };
    Box5.clickMe();
};
// _test8();

function _test9() {
    const clickMe = document.getElementsByClassName('click-me');
    console.log(clickMe);
    const click = Array.prototype.forEach.call(clickMe, function (e, i) {
        e.onclick = function () {
            window.location.href = `../../IPHome&Office website/portfolio-item.html?${i}`;
        };
    });
};
_test9();