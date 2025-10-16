//small quiz program
const arrQuestion=[{questions:"What is an array?",answer:"non-primitive value"},
    {questions:"Name one array method that can enter some elements into an empty array",answer:"push method"}
];
//call a function to get a random question
const quest =findQ(arrQuestion);
//display the question to the console
console.log("The question is:",quest.questions);
//use the function to randomly select a question
function findQ(array){
    for(i=0;i<array.length;i++){
        let random=Math.floor(Math.random()*array.length);
        let selectedQ=array[random];
        return selectedQ;
    }
}
//call a function to get the answer from the user
findAnswer(arrQuestion);
//check if the answer is correct
function findAnswer(array){
 let userAnswer=prompt("What is your answer?");
 if(quest.answer === userAnswer){
    console.log("Correct answer");
 }else{
    console.log("Oops!,try again");
 }
 return array;
}
//Bank Account Manager
//create an object
const account ={
    onwerName:"Edwin",
    balance:10000,
    accountNumber:"1234567890"
};
//use function to deposit money
//call the function
deposit(account,1000);
//function
function deposit(bank,depo){
    let myBalance =bank.balance;
    return myBalance + depo;
}
//use function to withdraw money
//call the function
withdraw(account,5000);
//function
function withdraw(bank,withdraw){
    let myNewBalance =bank.balance;
    return myNewBalance - withdraw;
}
//use function to check balance
//call the function
checkBalance(account);
//function
function checkBalance(Bank){
    return Bank.balance;
}
