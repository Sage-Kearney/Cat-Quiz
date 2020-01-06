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

let buttonA = document.querySelectorAll('.button-A');
const buttonB = document.querySelectorAll('.button-B');
const finalAButton = document.querySelector('.finalbutton-A');
const finalBButton = document.querySelector('.finalbutton-B');
const resultWindow = document.querySelector('.hidden');

// console.log(finalAButton);

let results= [];

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



let resultCatName = document.querySelector('.result-cat-name');

// event listener for final A button
let finalResult = results.join('');

    // event listener to add a or b to results array
    finalAButton.addEventListener("click", buttonAClick);

    // event listener to display results window
    finalAButton.addEventListener("click", finalAClick);

    function finalAClick(){
        resultWindow.style.display = "block";
        if (results === "A", "A", "A", "A", "A"){
            resultCatName.innerText = 'Maine Coon';
        } else if (results === "A", "A", "A", "A", "A"){
            resultCatName.innerText = 'take the quiz again';
        }
    }

