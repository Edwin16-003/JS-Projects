//Js intro
//create an array
const choices = ["Rock","Paper","Scissors"];
//generate random choices
const player = Math.floor(Math.random()* 3);
const computer = Math.floor(Math.random()* 3);
//get choices and prepare results
const playerChoice = choices[player];
const computerChoice =choices[computer];
let resultMessage = `The player choose  ${playerChoice} and the computer ${computerChoice} `;
//game conditions
if (player === computer) {
    resultMessage += "it is a tie!";
}else if(
    player === 0 && computer === 2){
    resultMessage +=" Player wins";//rock beats scissors
}else if(
    player === 1 && computer === 0){
    resultMessage +=" Player wins";//paper beats rock
}else if(
    player === 2 && computer === 1){
    resultMessage +=" Player wins";//scissors beats paper
}else{
    resultMessage +="Computer wins";
}
console.log(resultMessage);
//array exercise
let shopList =[];
let add = shopList.push("Milk","Bread","Apples");
console.log(shopList);
let update =shopList.splice(1,0,"Bananas","Eggs");
let remove=shopList.pop(4);
let arrange =shopList.sort();
let search = shopList.includes("Milk");
let add2 = shopList.splice(0,0,"Carrots","Lettuce");
console.log(shopList);
//new list
let newShopList =["Juice","Pop","Juice","Pop"];
shopList.push(newShopList);
let lastIndex = shopList.lastIndexOf();
//Object exercise
const myCar  ={make:"Steel",model:"BMW",};
myCar.color ="black";
console.log(myCar);
//objects and array
const people ={friends:[]};
let friend1 ={
    firstName:"Peter",
    lastName:"Mike",
    admis:300
};
let friend2 ={
    firstName:"Rose",
    lastName:"Chao",
    admis:500
};
let friend3 ={
    firstName:"Doreen",
    lastName:"Kai",
    admis:100
};
people.friends.push(friend1,friend2,friend3);
console.log(people);
//student management system mini project
const students =[
    {name:"Edu",age:21,grade:[50,60,54,80,72]}
];
function addStudent(name,age,grade){
    const student = {name,age,grade};
    students.push(student);
}
addStudent("Rose",19,[70,80,90,100]);
function addGrade(name,grade){
    for(let i=0;i<students.length;i++){
        if(students[i].name === name){
            students[i].grade.push(grade);
        }
    }
}
addGrade("Edu",85,95,75,65,53);
function getAverageGrade(name){
    for(let i=0;i<students.length;i++){
        if(students[i].name === name){  
            const grades = students[i].grade;
            const total = grades.reduce((acc,cur)=> acc + cur,0);
            const average = total / grades.length;
            return average;
        }
    }
    return null;
}
function displayStudentInfo(name){
    for(let i=0;i<students.length;i++){
        if(students[i].name === name){
            const averageGrade = getAverageGrade(name);
            console.log(`Name: ${students[i].name}, Age: ${students[i].age}, Average Grade: ${averageGrade}`);
            return;
        }
    }
    console.log("Student not found");
}

//declare variables
let userAge =parseInt(prompt("Enter your age"));
let userMessage =`Your age is: ${userAge} `;
//conditions
if(userAge > 21){
 userMessage +="You can enter the venue and purchase an alcohol";
}else if(userAge >= 19){
 userMessage +="You can enter the venue but No purchasing an alcohol";
}else{
    userMessage +="No entry";
}
console.log(userMessage);
//Javascript typeof variables
let str1 ="Edu";
let str2 ="Rose";
let val1 =undefined;
let val2 = null;
let myNum = 40;
let rain = true;
//display using typeof
console.log(typeof str1);//string
console.log(typeof str2);//string
console.log(typeof val1);//undefined
console.log(typeof val2);//null
console.log(typeof myNum);//number
console.log(typeof rain);//boolean
/* arithmetic operation-exercise calculate the hypotenuse
of a triangle*/
let a = 4*2;
let b = 12*2;
let c = (a + b)*2;
console.log(c);
//date method
const myDay= Date();
let myYear =myDay.getYear();
let myMonth = myDay.getMonth();
//output date
console.log(myDay);
console.log(myYear);
console.log(myMonth);
//function exercise
//arrays
const myTools =["pen","pencil","eraser"];
//call a function
getMyTool(myTools);
function getMyTool(tools){
    tools[1]="marker";
    console.log(tools);
}
//objects
const myBudget ={
    product:"laptop",price:500
}
//call a function
getMyBudget(myBudget,myBudget.price);
function getMyBudget(myBudget,doublePrice){
   myBudget.doublePrice = doublePrice *2;
   console.log(myBudget);
}
//simple shopping list project
const myShoppingList =[];//create an array
//call a function
getToAddItems(myShoppingList);
//function to add items
function getToAddItems(shoppingList){
    shoppingList.push("Milk","Bread","Apples");
    console.log(shoppingList);
}
//remove items from the existing array
//call a function
getToRemoveItems(myShoppingList);
//function to remove items
function getToRemoveItems(removeItem){
    removeItem.pop();
    console.log(removeItem);
}
//diplay the final list
//call a function
displayList(myShoppingList);
//function to display the final list    
function displayList(finalList){
    console.log(finalList);
}
//Clear the list
//call a function
clearList(myShoppingList);
function clearList(clearAll){
    clearAll.length =0;
    console.log(clearAll);
}
//end of app.js
// --- IGNORE ---