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
const questionsArray = document.querySelectorAll('.js-question');
const nextButton = document.querySelector('.nextButton');
const welcomeWindow = document.querySelector('.welcomeWindow');
const startButton = document.querySelector('.startButton');
const resultsImage = document.querySelector('.result-cat-image');

let currentQuestion = 0;
let results = [];

// event listener for A button's
    buttonA.forEach(button => button.addEventListener("click", buttonAClick));

    function buttonAClick(){
        results.push("A");
        buttonA.forEach(button => button.style.background = "rgba(220, 203, 203, .3)");
    }


// event listener for B button's
    buttonB.forEach(button => button.addEventListener("click", buttonBClick));

    function buttonBClick() {
        results.push("B");
        buttonB.forEach(button => button.style.background = "rgba(220, 203, 203, .3)");
    }

// event listener for hover effect for A button's

buttonA.forEach(button => button.addEventListener("mouseover", function(){
    buttonA.forEach(button => button.style.background = "rgba(220, 203, 203, .3)");
}));



// event listener to display results window
    
    submitButton.addEventListener("click", submitButtonClick);

    function submitButtonClick(){
        questionsWindow.style.display = "none";
        submitButton.style.display = "none";
        resultWindow.style.display = "block";

        let finalResult = results.join('');
        
        if (finalResult === "AAAAA"){
            resultCatName.innerText = 'Maine Coon';
            resultsImage.src = "elements/Maine-Coon.png";
        } else if (finalResult === "AAAAB"){
            resultCatName.innerText = 'Japanese Bobtail';
            resultsImage.src = "elements/Japanese-Bobtail.png";
        } else if (finalResult === "AAABA"){
            resultCatName.innerText = 'Selkirk Rex';
            resultsImage.src = "elements/Selkirk-Rex.png";
        } else if (finalResult === "AAABB") {
            resultCatName.innerText = 'Siberian';
            resultsImage.src = "elements/Siberian.png";
        } else if (finalResult === "AABAA") {
            resultCatName.innerText = 'Ragdoll';
            resultsImage.src = "elements/Ragdoll.png";
        } else if (finalResult === "AABAB") {
            resultCatName.innerText = 'Birman';
            resultsImage.src = "elements/Birman.png";
        } else if (finalResult === "AABBA") {
            resultCatName.innerText = 'Russian Blue';
            resultsImage.src = "elements/Russian-Blue.png";
        } else if (finalResult === "AABBB") {
            resultCatName.innerText = 'Himalayan';
            resultsImage.src = "elements/Himalayan.png";
        } else if (finalResult === "ABAAA") {
            resultCatName.innerText = 'Burmese';
            resultsImage.src = "elements/Burmese.png";
        } else if (finalResult === "ABAAB") {
            resultCatName.innerText = 'Oriental';
            resultsImage.src = "elements/Oriental.png";
        } else if (finalResult === "ABABA") {
            resultCatName.innerText = 'Persian';
            resultsImage.src = "elements/Persian.png";
        } else if (finalResult === "ABABB") {
            resultCatName.innerText = 'Tonkinese';
            resultsImage.src = "elements/Tonkinese.png";
        } else if (finalResult === "ABBAA") {
            resultCatName.innerText = 'Scotish Fold';
            resultsImage.src = "elements/Scottish-Fold.png";
        } else if (finalResult === "ABBAB") {
            resultCatName.innerText = 'Sphynx';
            resultsImage.src = "elements/Sphynx.png";
        } else if (finalResult === "ABBBA") {
            resultCatName.innerText = 'Bombay';
            resultsImage.src = "elements/Bombay.png";
        } else if (finalResult === "ABBBB") {
            resultCatName.innerText = 'Balinese';
            resultsImage.src = "elements/Balinese.png";
        } else if (finalResult === "BAAAA") {
            resultCatName.innerText = 'Pixie Bob';
            resultsImage.src = "elements/Pixie-Bob.png";
        } else if (finalResult === "BAAAB") {
            resultCatName.innerText = 'Siamese';
            resultsImage.src = "elements/Siamese.png";
        } else if (finalResult === "BAABA") {
            resultCatName.innerText = 'Ocicat';
            resultsImage.src = "elements/Ocicat.png";
        } else if (finalResult === "BAABB") {
            resultCatName.innerText = 'Snowshoe';
            resultsImage.src = "elements/Snowshoe.png";
        } else if (finalResult === "BABAA") {
            resultCatName.innerText = 'Savannah';
            resultsImage.src = "elements/Savannah.png";
        } else if (finalResult === "BABAB") {
            resultCatName.innerText = 'Chausie';
            resultsImage.src = "elements/Chausie.png";
        } else if (finalResult === "BABBA") {
            resultCatName.innerText = 'American Wirehair';
            resultsImage.src = "elements/American-Wirehair.png";
        } else if (finalResult === "BABBB") {
            resultCatName.innerText = 'Norwegian Forest Cat';
            resultsImage.src = "elements/Norwegian-Forest.png";
        } else if (finalResult === "BBAAA") {
            resultCatName.innerText = 'Somali';
            resultsImage.src = "elements/Somali.png";
        } else if (finalResult === "BBAAB") {
            resultCatName.innerText = 'Turkish Angora';
            resultsImage.src = "elements/Turkish-Angora.png";
        } else if (finalResult === "BBABA") {
            resultCatName.innerText = 'Chartreux';
            resultsImage.src = "elements/Chartreux.png";
        } else if (finalResult === "BBABB") {
            resultCatName.innerText = 'Toyger';
            resultsImage.src = "elements/Toyger.png";
        } else if (finalResult === "BBBAA") {
            resultCatName.innerText = 'Manx';
            resultsImage.src = "elements/Manx.png";
        } else if (finalResult === "BBBAB") {
            resultCatName.innerText = 'British Shorthair';
            resultsImage.src = "elements/British-Shorthair.png";
        } else if (results === "BBBBA") {
            resultCatName.innerText = 'York Chocolate';
            resultsImage.src = "elements/York-Chocolate.png";
        } else if (results === "BBBBB") {
            resultCatName.innerText = 'Nebelung';
            resultsImage.src = "elements/Neblung.png";
        } else {
            resultCatName.innerText = 'You are a meyowstery';
            resultsImage.src = "elements/Meowstry.png";
        }
    }


// event listener to show questions (Esin gave me the idea, Jen helped me get the functionality to work)

    nextButton.addEventListener("click", showQuestion);

    function showQuestion(){
        const previousQuestion = currentQuestion - 1;
        const current = questionsArray[currentQuestion];
        const previous = questionsArray[previousQuestion];
        welcomeWindow.style.display = "none";
        current.style.display = "block";
        nextButton.innerText = "next";
        nextButton.classList.add("new-button-style");
        buttonA.forEach(button => button.style.background = "none");
        buttonB.forEach(button => button.style.background = "none");


        if (previous){
            previous.style.display = "none";
        }
        
        const questionNum = questionsArray.length - 1;
        if (currentQuestion === questionNum){
            nextButton.style.display = "none";
            submitButton.style.display = "block";
        }

        currentQuestion += 1;
    }











    // User clicks start
    // Question one displays
    // User clicks either a or b
        // result of click gets stored in variable
        // Question two displays
    // Repeat until last question(5)
        // submit button appears
    // User clicks submit
    // Results page appears


        