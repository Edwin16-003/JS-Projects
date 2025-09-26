//small quiz program
const arrQuestion=[{questions:"",answer:""},
    {questions:"",answer:""}
];
const quest =findQ(arrQuestion);
console.log();
function findQ(array){
    for(i=0;i<array.length;i++){
        let random=Math.floor(Math.random()*array.length);
        let selectedQ=array[random];
        return selectedQ;
    }
}