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
function findAnswer(){

}