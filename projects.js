<<<<<<< HEAD
// small quiz program
const arrQuestion = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" }
];

const quest = findQ(arrQuestion);
if (quest) {
    console.log("Selected question:", quest.question);
} else {
    console.log("No question available");
}

function findQ(array) {
    if (!Array.isArray(array) || array.length === 0) return null;
    // pick a single random element
    const random = Math.floor(Math.random() * array.length);
    return array[random];
=======
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
>>>>>>> 03659d62e84f7fa32582d7c834b1e10cc5fd995f
}