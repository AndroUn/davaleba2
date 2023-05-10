//დავალება 1

const arr = [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}];

for (let key of arr){
    while ( key.age == 21){
        console.log(key.name)
        break
    }
}


//დავალება 2

const user = {
    name: 'James',
    lastName: 'Bond',
    nickName: '007',
    profile: {
        age: 37,
        address: 'varketili'
    }
};

function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj){
        objCopy[key] = mainObj[key]
    }
    return objCopy;
}

const newUser= copy(user);

newUser.name = 'Andro';

console.log(user);
console.log(newUser);



//დავალება 3 

function randomNumber(){
    return parseInt(Math.random() * 10) +1
}

let a = randomNumber();
let b = randomNumber();

while (a !== 3 && b !==3){
    a = randomNumber()
    b = randomNumber()
    console.log(a,b)
    
    if (a == 3){
        console.log(`a მომხმარებელმა მოიგო`)
    }
    else if (b == 3){
        console.log(`b მომხმარებელმა მოიგო`)
    }
    else if (a == 3 || b == 3){
        console.log(`მეგობრობამ გაიმარჯვა`)
    }
}


