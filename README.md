# Cat Personality Quiz
If you've been longing to know what kind of cat you would be if you so happen you reincarnate into one, boy oh boy do I have a treat for you! Developed for the inner cat in all of us, this quiz was designed with the intention of not only helping you finally discover your inner meow, but providing you with the stepping off point to fully embrace all of your wild, feline power. 


![Cat Personality Quiz by Sage Kearney](https://user-images.githubusercontent.com/56275819/72128001-647b9b80-333f-11ea-99bb-3641e3d28d1a.png)


## How do I know if this quiz is for me?
Well, most likely yes, but here's who I had in mind when I created this quiz:
Millinial ladies who like to joke around with their friends and take funny quizes during their lunch break (because these ladies are taking charge of their financials & bring home the bacon).

If you don't identify yourself as a perky, clever young lady, no worries, I still think you could find this quiz amusing.


## So, what can I expect?
- A fully responsive design (because let's be honest, we're always on our phones)
- Fonts & a fun color pallet to make you purr
- 5 interesting questions followed by your quiz results
- An occasional kitty appearence


## How do I actually take the quiz?
Great question- just follow this link girlfran https://Sage-Kearney.github.io/cat-quiz

# If you are interested in the nitty gritty... 

To develop this quiz I used the holy grail - HTML, CSS, & Javascript

## The process...

Let's start at the beginning...

Before I created any wireframes or even started dreaming about design elements, I had to sort out the beginning stages of the logic. So pen & paper it was! ..until I realized how much time it would take to write out every potential quiz result. So then to the Illustrator I went & mapped out all the potential results in the form of a giant web. Once I fleshed out all of the results it was much easier to create the logic & ajoining wireframes for the quiz. I used a large (very large) if statement to filter through each event listener.
![Logic Web](https://user-images.githubusercontent.com/56275819/72132507-21c0c000-334d-11ea-98d5-33f94be56e20.png)

  ### Wireframe 
  I have to say my wireframe was a tad agressive for my bronze level MVP. Right off of the bat I wanted to have a 'scroll' effect with the questions displaying one at a time. Great idea- and I was able to accomplish that look/logic in my silver level, but starting things off as having all of the questions displaying on the page at one time was the best first step for my MVP level app. Aside from that, my original wireframe was very do able- everything centered, questions with two options (that would be buttons), and some sort of submit button.
![Wireframe](https://user-images.githubusercontent.com/56275819/72132504-1ec5cf80-334d-11ea-8653-39a6a65ca318.png) 


### Originally.. (bronze)
When I first created this quiz, it was pretty basic. All of the content was displayed on the page at the same time. The color pallet was super boooring - white, black, & a touch of grey. The buttons were static. The font was.. readable. The results displayed under all of the content that was already on the page. It worked, which was beautiful in it's own sense, but I knew I could do better for my furry friends.
![Bronze Level ](https://user-images.githubusercontent.com/56275819/72168286-d7fec680-339a-11ea-993e-bea09095fcc7.png)

### Then (silver)
So once I was able to get the quiz working, I spruced things up a little bit (functionality wise). With the help of Esin Saribudak & Jennifer Meade, we were able to map out the logic to have one question appear at a time with the incorporation of a 'next' button. Additionallly I was able to add a welcome page, start button, and results page. Things were starting to look pretty legit at that point! But I knew I could do better for my users & I needed to 'prettify' the quiz. So I decided on a color scheme, chose a google font pairing, and slaped together a few graphic elements. But this wasn't the end.

![Silver Screen Rec](https://user-images.githubusercontent.com/56275819/72171354-cd473000-33a0-11ea-9d10-ade9e43ee59d.gif)

![Screen Shot 2020-01-10 at 1 57 33 AM](https://user-images.githubusercontent.com/56275819/72132510-25544700-334d-11ea-8702-a1ab6b4db686.png)

![Web Design Mockup](https://user-images.githubusercontent.com/56275819/72166122-ad127380-3396-11ea-8d92-9db491752cad.png)


### Finally (goldish..gold leafed?)
By this point, the quiz was functioning & starting to look like an actual, legitimite quiz! Yay! But I knew I could spice it up even more. To do this I really dialed in on my CSS, making sure the designs were sleek throughout the entire quiz by utilizing media querries & all sorts of other CSS properties (think margin, padding, alignment, positioning, letter spacing.. all the things). I also sourced images for all of my katz and javascripted an image to appear with the results page by using my event listeners already in place. Lastly, I incorporated cat illustrations that I found online (<a href="https://www.freepik.com/free-photos-vectors/icon">Icon vector created by terdpongvector - www.freepik.com</a>) by Terdpongvector (yep, doesn't get much more professional than that) for the cherry on top! 

![Goldish Screen Recording](https://user-images.githubusercontent.com/56275819/72172264-bd305000-33a2-11ea-8273-3bb56a1170ce.gif)

## Going forward
I am reletively very pleased with how this project turned out, however there are some things I would either add or revisit if I had to do things again..
- [ ] Refracter my code. My code is certainly not dry & I would love to try to condense down that giant if statement, or come up with new logic to that has the same functionality with less lines of code & or code that is easier to add to/manipulate in the future.
- [ ] Css cat animations. For some reason I was having a hard time with the background image & the cat images intermingling with each other. Ideally, I would be able to have cats pooping out of the 'colored blobs' instead of the side of the screen. 
- [ ] Figure out a way to add a nice transtion between my questions. 
- [ ] Nix the next button and have the answer buttons carry the functionality of the 'next button. For example, the user would just have to click on the answer to the question & then they would be led to the next question. It would also be nice to incorporate an animation on the button after the user selects the button, but before the next question is displayed.
- [ ] And lastly, I would like to build out the results more- add a message & a link to restart the game.

## Wouldn't be here without..
Big shoutout to the following people for helping me overcome all of the hurdles that cropped up during the process of making this quiz! Seriously wouldn't have made it without you guys :) 

- Esin Saribudak
- Jennifer Meade
- Jerrica Bombadilla
- Jarred Morgan
- My GA Squad 
- Stack Overflow
- Css tricks
