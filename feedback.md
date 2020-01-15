# Project 1 Feedback

## Code Quality - Performing

Criteria: Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

-   Code is generally well-formatted and linted with proper indentations and semi-colons in the JS, and easy to read.
-   `script.js` is well-organized, with all variables declared at the top, followed by event listeners and functions.
-   Good use of comments to explain purpose of variables.
-   HTML and CSS files look great.

### Areas for Growth:

-   Extra indentations in the code after variables are declared (line 35 and below). Mixed use of single and double quotes. Reach out to troubleshoot Prettier linter if needed.
-   The `submitButtonClick` function is quite a long block of code, and could be broken up to be smaller. In general, if a function takes up more than a few lines of code, consider breaking it up to smaller functions. For example, the code after each `if` statement could be handled with a helper function that takes three parameters: catName, imgSrc, and imgCredit, and sets the `innerText`, `src`, and `href` of the results variables to whatever is passed into the function. (See the `script.js` file to see an example of how this could be implemented to DRY up code.)
-   Additionally, whenever there is an extended `if` statement, consider using a `switch` statement to DRY up the code even further. (Link)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch] to MDN documentation on `switch`.
-   Eventually consider refactoring the JS toward Object-Oriented-Programming, which has many benefits including fewer global variables floating around polluting the namespace.

## Technical Requirements - Performing

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

-   Great mix of event listeners, functions and DOM manipulation to create this project. Good use of functional programming to contain game logic.
-   Shows deep knowledge of CSS including use of media queries to create responsive design and pseudo-classes to create interactive elements.
-   Project is deployed to GH pages and renders in the browser with no errors. README includes excellent

### Areas for Growth:

-   `body` is an unnecessary variable. See the inline comment for further information.

## Creativity and Interface - Excelling

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

-   The design is creative, appealing, modern, and professional. Everything from the color palette to the typefaces work together to create an application that is visually stunning.
-   Particularly impressive that the CSS was written from scratch, as opposed to using a framework like Bootstrap or SASS.
-   Application is easy to navigate with well-thought out UI. Calls to action are clear, application is uncluttered, and functionality is very intuitive.
-   Works well in Chrome and Safari.
-   Application shows a personal touch and a sense of humor, with great use of cat puns.

### Areas for Growth:

-   As mentioned in your README, having the user's click on their answer automatically transition to the next question would make the UX even more intuitive and functional. Other than that, no growth suggestions at this time. :)

## Functionality - Performing

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

-   Application works as a fully developed quiz, with a landing introductory page, questions, and feedback.
-   Features are fully developed and responsive in both a desktop and mobile screen size.
-   No error messages observed in console.
-   Evidence of intense and detailed planning for the game logic and answer rationale.

### Areas for Growth:

-   There was mention of having more developed feedback to the user -- namely a paragraph with further information about what the user's cat breed means. This would be a great additional feature to implement and give the application an even more developed feel.

## Presentation - Excelling

Criteria: Is there adequate documentation? Is the repository well organized and free of clutter?

### Strengths:

-   Repo is well organized with an `elements` folder that contains all application assets.
-   Excellent documentation on the README, with a warm, reflective and welcoming tone.
-   Clear evidence of planning including wire-framing, feature levels, style development, and future plans.
-   Credit is given to the creators and sources of illustrations and images.
-   Acknowledgements at the end of the README to people and resources that helped you create this process adds an even more professional touch. As developers, we gain so much from the contributions of everyone in our community, and our community is really lucky to have you in it!

### Areas for Growth:

-   None at this time. :)

## Hard Requirements - Complete:

-   [x] The project is deployed to GitHub Pages or a custom domain
-   [x] The application renders in the browser and runs without errors
-   [x] The repo has a README that adequately documents the project

## Grade: Pass
