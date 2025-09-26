//small quiz program
const arrQuestion=[{questions:"",answer:""},
    {questions:"",answer:""}
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
 if(array.answer === userAnswer){
    console.log("Correct answer");
 }else{
    console.log("Oops!,try again");
 }
 return userAnswer;
}