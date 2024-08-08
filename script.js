console.log("Script running...")
// Task 1: Button One Flow
// Select the first button

let btn1 = document.querySelector("#buttonOne")
// Select the first p tag under that button
let p1 = document.querySelector("#textOne")

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"

btn1.addEventListener("click", function (event){
  p1.textContent = "You guessed wrong!"
})

// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags

let button2 = document.querySelector("#buttonTwo")
let para2 = document.querySelector("#textTwo")


// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"

button2.addEventListener("click", function (event){
  para2.textContent = "You guessed right!"
})

// Task 3: Dog image flow
// Select the dog image
let doggy = document.querySelector("#dog")

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click

doggy.addEventListener("mouseover", function (event){
  doggy.src = "post-boop.png"
})


// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this


doggy.addEventListener("mouseout", function (event){
  doggy.src = "pre-boop.png"
})

// Task 4: Secret code flow
// Select the input

let input = document.querySelector("#code")
input.addEventListener("keypress", function(event){
  console.log(input.value)
})

// Add an event listener to the input such that when a key is pressed, you console log the value
// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)

if (input.value === "racoon"){
  let racoon = document.querySelector("#popup-image")
racoon.src = "raccoon.jpg"
}


//i give up bro bye.



