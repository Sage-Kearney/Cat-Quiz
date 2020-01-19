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
const body = document.querySelector('body');
const imgCredit = document.querySelector('.results-img-src');
const imgCreditWords = document.querySelector('.img-Credit-words');
const resultsImageSource = document.querySelector('.results-img-src');

let currentQuestion = 0;
let results = [];

// event listener for A button's
    buttonA.forEach(button => button.addEventListener("click", buttonAClick));

    function buttonAClick(e){
        results.push("A");
        e.target.style.background = "rgba(220, 203, 203, .3)";
    }
    
// event listener for B button's
    buttonB.forEach(button => button.addEventListener("click", buttonBClick));
    
    function buttonBClick(e) {
        results.push("B");
        e.target.style.background = "rgba(220, 203, 203, .3)";
            
    }
    


// event listener to display results window
    
    submitButton.addEventListener("click", submitButtonClick);

    function submitButtonClick(){
        questionsWindow.style.display = "none";
        submitButton.style.display = "none";
        resultWindow.style.display = "block";
        body.style.overflow = "auto";
        resultsImageSource.style.display = "inline-block";
        let finalResult = results.join('');
        
        if (finalResult === "AAAAA"){
            resultCatName.innerText = 'Maine Coon';
            resultsImage.src = "elements/Maine-Coon.png";
            imgCredit.href = "https://www.amazon.com/Maine-Coon-Calendar-Organizer-Appointment/dp/1080782303";

        } else if (finalResult === "AAAAB"){
            resultCatName.innerText = 'Japanese Bobtail';
            resultsImage.src = "elements/Japanese-Bobtail.png";
            imgCredit.href = "https://www.petguide.com/breeds/cat/japanese-bobtail/";

        } else if (finalResult === "AAABA"){
            resultCatName.innerText = 'Selkirk Rex';
            resultsImage.src = "elements/Selkirk-Rex.png";
            imgCredit.href = "https://i.pinimg.com/originals/58/68/dc/5868dc4e913d2f509dc1b02043a19624.jpg";

        } else if (finalResult === "AAABB") {
            resultCatName.innerText = 'Siberian';
            resultsImage.src = "elements/Siberian.png";
            imgCredit.href = "https://cats.lovetoknow.com/image/246623~siberian-cat.jpg";

        } else if (finalResult === "AABAA") {
            resultCatName.innerText = 'Ragdoll';
            resultsImage.src = "elements/Ragdoll.png";
            imgCredit.href = "https://www.purrfectpost.com/the-specific-scratching-needs-of-the-ragdoll-cat/";

        } else if (finalResult === "AABAB") {
            resultCatName.innerText = 'Birman';
            resultsImage.src = "elements/Birman.png";
            imgCredit.href = "http://birmanbc.org/colors.html";

        } else if (finalResult === "AABBA") {
            resultCatName.innerText = 'Russian Blue';
            resultsImage.src = "elements/Russian-Blue.png";
            imgCredit.href = "http://purina-arabia.com";

        } else if (finalResult === "AABBB") {
            resultCatName.innerText = 'Himalayan';
            resultsImage.src = "elements/Himalayan.png";
            imgCreditWords.innerText = "Photo by iStock";
            imgCredit.style.display = "none";

        } else if (finalResult === "ABAAA") {
            resultCatName.innerText = 'Burmese';
            resultsImage.src = "elements/Burmese.png";
            imgCredit.href = "https://www.certapet.com/burmese-cat/";

        } else if (finalResult === "ABAAB") {
            resultCatName.innerText = 'Oriental';
            resultsImage.src = "elements/Oriental.png";
            imgCreditWords.innerText ="Photo by Alan Thompson, Animal Photography";
            imgCredit.style.display = "none";

        } else if (finalResult === "ABABA") {
            resultCatName.innerText = 'Persian';
            resultsImage.src = "elements/Persian.png";
            imgCreditWords.innerText = "Photo by© mdorottya | fotolia.com";
            imgCredit.style.display = "none";

        } else if (finalResult === "ABABB") {
            resultCatName.innerText = 'Tonkinese';
            resultsImage.src = "elements/Tonkinese.png";
            imgCredit.href = "https://google.com";

        } else if (finalResult === "ABBAA") {
            resultCatName.innerText = 'Scotish Fold';
            resultsImage.src = "elements/Scottish-Fold.png";
            imgCreditWords.innerText = "Photo by muratkoc / E + / Getty Images";
            imgCredit.style.display = "none";

        } else if (finalResult === "ABBAB") {
            resultCatName.innerText = 'Sphynx';
            resultsImage.src = "elements/Sphynx.png";
            imgCreditWords.innerText = "Photo by Getty Image";
            imgCredit.style.display = "none";

        } else if (finalResult === "ABBBA") {
            resultCatName.innerText = 'Bombay';
            resultsImage.src = "elements/Bombay.png";
            imgCredit.href = "http://www.catbreedsjunction.com/bombay-cats.html";

        } else if (finalResult === "ABBBB") {
            resultCatName.innerText = 'Balinese';
            resultsImage.src = "elements/Balinese.png";
            imgCredit.href = "https://cattime.com/cat-breeds/balinese-cats#/slide/1";

        } else if (finalResult === "BAAAA") {
            resultCatName.innerText = 'Pixie Bob';
            resultsImage.src = "elements/Pixie-Bob.png";
            imgCredit.href = "http://pixie-bobs.net/";

        } else if (finalResult === "BAAAB") {
            resultCatName.innerText = 'Siamese';
            resultsImage.src = "elements/Siamese.png";
            imgCredit.href = "https://bowwowinsurance.com.au/cats/cat-breeds/siamese/";

        } else if (finalResult === "BAABA") {
            resultCatName.innerText = 'Ocicat';
            resultsImage.src = "elements/Ocicat.png";
            imgCredit.href = "https://www.veterinarians.com/features/a-guide-to-the-ocicat-cat";

        } else if (finalResult === "BAABB") {
            resultCatName.innerText = 'Snowshoe';
            resultsImage.src = "elements/Snowshoe.png";
            imgCredit.href = "https://www.vetwest.com.au/pet-library/snowshoe";

        } else if (finalResult === "BABAA") {
            resultCatName.innerText = 'Savannah';
            resultsImage.src = "elements/Savannah.png";
            imgCredit.innerText = "Photo by Helmi Flick";
            imgCredit.style.display = "none";

        } else if (finalResult === "BABAB") {
            resultCatName.innerText = 'Chausie';
            resultsImage.src = "elements/Chausie.png";
            imgCredit.href = "https://www.thehappycatsite.com/chausie-cat/";

        } else if (finalResult === "BABBA") {
            resultCatName.innerText = 'American Wirehair';
            resultsImage.src = "elements/American-Wirehair.png";
            imgCredit.innerText = "Photo by Tetsu Yamazaki";
            imgCredit.style.display = "none";

        } else if (finalResult === "BABBB") {
            resultCatName.innerText = 'Norwegian Forest Cat';
            resultsImage.src = "elements/Norwegian-Forest.png";
            imgCredit.href = "https://www.royalcanin.com/us/cats/breeds/breed-library/norwegian-forest-cat";

        } else if (finalResult === "BBAAA") {
            resultCatName.innerText = 'Somali';
            resultsImage.src = "elements/Somali.png";
            imgCredit.href = "https://www.catster.com/cats-101/somali-cat-facts";

        } else if (finalResult === "BBAAB") {
            resultCatName.innerText = 'Turkish Angora';
            resultsImage.src = "elements/Turkish-Angora.png";
            imgCredit.href = "https://www.pinterest.com/pin/178384835223540580/?lp=true";

        } else if (finalResult === "BBABA") {
            resultCatName.innerText = 'Chartreux';
            resultsImage.src = "elements/Chartreux.png";
            imgCredit.href = "https://www.petsbest.com/blog/cat-breed-guide-chartreux/";

        } else if (finalResult === "BBABB") {
            resultCatName.innerText = 'Toyger';
            resultsImage.src = "elements/Toyger.png";
            imgCredit.innerText = "Photo by Helmi Flick";
            imgCredit.style.display = "none";

        } else if (finalResult === "BBBAA") {
            resultCatName.innerText = 'Manx';
            resultsImage.src = "elements/Manx.png";
            imgCredit.href = "https://www.petfinder.com/cat-breeds/manx/";

        } else if (finalResult === "BBBAB") {
            resultCatName.innerText = 'British Shorthair';
            resultsImage.src = "elements/British-Shorthair.png";
            imgCredit.href = "https://www.gccfcats.org/Breeding-Information/Analysis-of-Breeds-Registered";

        } else if (results === "BBBBA") {
            resultCatName.innerText = 'York Chocolate';
            resultsImage.src = "elements/York-Chocolate.png";
            imgCredit.innerText = "Photos by Warren Photographic";
            imgCredit.style.display = "none";

        } else if (results === "BBBBB") {
            resultCatName.innerText = 'Nebelung';
            resultsImage.src = "elements/Neblung.png";
            imgCredit.innerText = "Photos Bantees";
            imgCredit.style.display = "none";

        } else {
            resultCatName.innerText = 'You are a meyowstery';
            resultsImage.src = "elements/Meowstry.png";
            imgCredit.href = "https://google.com";
        }
        resultsImage.style.backgroundSize = "cover";
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


        