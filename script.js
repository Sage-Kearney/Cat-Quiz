/* PSEUDO CODE
    User selects either answer A or answer B
        answer gets stored in variable named catAnswer after every question
    
    Final Question: User selects either answer A or answer B
    'Looks like you're a..' (Results window appears- display block)
    catAnswer variable get's checked..
        if catAnswer = "AAAAA"
            cat type = whichever cat is associated with that key

        Results h2 innerText = cat type

*/

const buttonA = document.querySelectorAll('.button-A');
const buttonB = document.querySelectorAll('.button-B');
const submitButton = document.querySelector('.submit');
const questionsWindow = document.querySelector('.questions');
const resultWindow = document.querySelector('.hidden');
const resultCatName = document.querySelector('.result-cat-name');


let results = [];

// event listener for A button's
    buttonA.forEach(button => button.addEventListener("click", buttonAClick));

    function buttonAClick(){
        results.push("A");
    }


// event listener for B button's
    buttonB.forEach(button => button.addEventListener("click", buttonBClick));

    function buttonBClick() {
        results.push("B");
    }


// event listener to display results window
    
    submitButton.addEventListener("click", submitButtonClick);

    function submitButtonClick(){
        questionsWindow.style.display = "none";
        submitButton.style.display = "none";
        resultWindow.style.display = "block";

        let finalResult = results.join('');
        
        if (finalResult === "AAAAA"){
            resultCatName.innerText = 'Maine Coon';
        } else if (finalResult === "AAAAB"){
            resultCatName.innerText = 'Japanese Bobtail';
        } else if (finalResult === "AAABA"){
            resultCatName.innerText = 'Selkirk Rex';
        } else if (finalResult === "AAABB") {
            resultCatName.innerText = 'Siberian';
        } else if (finalResult === "AABAA") {
            resultCatName.innerText = 'Ragdoll';
        } else if (finalResult === "AABAB") {
            resultCatName.innerText = 'Birman';
        } else if (finalResult === "AABBA") {
            resultCatName.innerText = 'Russian Blue';
        } else if (finalResult === "AABBB") {
            resultCatName.innerText = 'Himalayan';
        } else if (finalResult === "ABAAA") {
            resultCatName.innerText = 'Burmese';
        } else if (finalResult === "ABAAB") {
            resultCatName.innerText = 'Oriental';
        } else if (finalResult === "ABABA") {
            resultCatName.innerText = 'Persian';
        } else if (finalResult === "ABABB") {
            resultCatName.innerText = 'Tonkinese';
        } else if (finalResult === "ABBAA") {
            resultCatName.innerText = 'Scotish Fold';
        } else if (finalResult === "ABBAB") {
            resultCatName.innerText = 'Sphynx';
        } else if (finalResult === "ABBBA") {
            resultCatName.innerText = 'Bombay';
        } else if (finalResult === "ABBBB") {
            resultCatName.innerText = 'Balinese';
        } else if (finalResult === "BAAAA") {
            resultCatName.innerText = 'Pixie Bob';
        } else if (finalResult === "BAAAB") {
            resultCatName.innerText = 'Siamese';
        } else if (finalResult === "BAABA") {
            resultCatName.innerText = 'Ocicat';
        } else if (finalResult === "BAABB") {
            resultCatName.innerText = 'Snowshoe';
        } else if (finalResult === "BABAA") {
            resultCatName.innerText = 'Savannah';
        } else if (finalResult === "BABAB") {
            resultCatName.innerText = 'Chausie';
        } else if (finalResult === "BABBA") {
            resultCatName.innerText = 'American Wirehair';
        } else if (finalResult === "BABBB") {
            resultCatName.innerText = 'Norwegian Forest Cat';
        } else if (finalResult === "BBAAA") {
            resultCatName.innerText = 'Somali';
        } else if (finalResult === "BBAAB") {
            resultCatName.innerText = 'Turkish Angora';
        } else if (finalResult === "BBABA") {
            resultCatName.innerText = 'Chartreux';
        } else if (finalResult === "BBABB") {
            resultCatName.innerText = 'Toyger';
        } else if (finalResult === "BBBAA") {
            resultCatName.innerText = 'Manx';
        } else if (finalResult === "BBBAB") {
            resultCatName.innerText = 'British Shorthair';
        } else if (results === "BBBBA") {
            resultCatName.innerText = 'York Chocolate';
        } else if (results === "BBBBB") {
            resultCatName.innerText = 'Nebelung';
        } else {
            resultCatName.innerText = 'You are a meyowstery';
        }
    }








    /* grab questions/buttons & put them in array with querySelectorAll(js-question)

    loop thorugh the array and set thier display to none to start(could also do in css)

    currentQuestion variable to refer to index number of questionsArry[currentQuestion].style.display = "block"
        increment to next question (++) */

        