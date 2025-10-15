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
}