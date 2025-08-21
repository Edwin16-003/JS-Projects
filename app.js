//switch statements practice Quiz 1
/*
let randomnumber = parseInt(prompt("Enter random numbers 0-5"));
let reward = "Great you have scored ";
switch (randomnumber) {
    case 0:
        console.log(reward + "1 point")
        break;
    case 1:
        console.log(reward + "20 points")
        break;
    case 2:
        console.log(reward + "40 points")
        break;
    case 3:
        console.log(reward + "60 points")
        break; 
    case 4:
        console.log(reward +  "80 points")
        break;  
    case 5:
        console.log(reward + "100 points")
        break;                 
    default:
        console.log("Try Again")
        break;
}       
*/
//Switch statements Practice Quiz 2
/*
let prize = parseInt(prompt("Select a number between 0 and 10"));
let add = "My Selection: ";
switch (prize) {
    case 0:
    case 1:
        console.log( add + "Cheap")
        break;
    case 2:
    case 3:
        console.log( add + "Less Cheap")
        break;
    case 4:
    case 5:    
        console.log( add + "medium")
        break; 
    case 6:
    case 7:    
        console.log( add + "Less Expensive")
        break; 
    case 8:
    case 9:    
        console.log( add + "Expensive")
        break; 
    default:
        console.log( add + "Unique")
        break;             
}
//switch statements chapter projects
//Friend checker game
let firstname = prompt("Enter your name here!");
let good = "Wow this is ";
switch (firstname) {
    case "John":
        console.log(good + "my friend")
        break;
    case "Mary":
        console.log(good + "my friend")
        break; 
    case "Lidya":
        console.log(good + "my friend")
        break;
    case "Enoch":
        console.log(good + "my friend")
        break;           
    default:
        console.log("NOT my friend")
        break;
}*/
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
//object and array project
const theList =["Laurence","Svekis",true,35,null,undefined,{test:"one",score:55},["one","two"]];
theList.pop();
theList.shift();
theList[0,0]="FIRST";
theList[1]="Svekis";
theList[2]="MIDDLE";
theList[3]="hello World";
theList[4]= "LAST";
theList.shift();
console.log(theList);
//company product catalog
const storeItems =[];
const item1 ={
    name:"T-shirt",design:"cotton",cost:100,quantity:20
};
const item2 ={
    name:"coffee mug",design:"ceramic",cost:10,quantity:10
};
const item3 ={
    name:"notebook",design:"kasuku",cost:50,quantity:30
};
let move =storeItems.push(item1,item2,item3);
console.log(storeItems);
let accessElement =storeItems[2];
console.log(accessElement);
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






