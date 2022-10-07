////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers
let num1 = 22, num2 = 53

if(num1 > num2){
  console.log(num1)
}else if(num2 > num1){
  console.log(num2)
}else{
  console.log("The numbers are equivalent")
}
/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */
let studentGrade = 62

if(studentGrade >= 90){
  console.log("You got an A!")
}else if(studentGrade < 90 && studentGrade >= 80){
  console.log("You got a B!")
}else if(studentGrade < 80 && studentGrade >= 70){
  console.log("You got a C")
}else if(studentGrade >= 55){
  console.log("You got a D...")
}else{
  console.log("You got a F... :<")
}

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
let time = 1450

if((time >= 500) && (time <= 1159)){
  console.log("Good morning!")
}else if((time >= 1200) && (time <= 1600)){
  console.log("Good afternoon!")
}else{
  console.log("Hey there.")
}
////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let nameString = "Sabrina"
console.log(nameString.charAt(4))

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

/*Unicode is a global encoding standard for text that assigns characters from across different languages a
standardized and unique number, and allows for those characters to be displayed on systems around the world*/
nameString = "Teddy"
console.log(nameString.charCodeAt(2))


// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(100))

// Take your first and last name and concat()
let firstName = "Vogue", lastName = "Doesong", fullName = firstName.concat(" ",lastName)
console.log(fullName)

// Create a string and make it return true using startsWith()
let trueString = "Jolyne Kujo is the best Joestar"
console.log(trueString.startsWith("Jolyne"))

// Now use any variable with endsWith() and return false
console.log(trueString.endsWith("Jotaro"))

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, and it wept.'
console.log(ozgur.includes("looked"))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log("Josh's cow is at index " + joshHadALittleLambOopsCow.indexOf("cow"))

////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b > a != d)


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for(i = 0; i <= 10; i++){
  if(i == 0){
    console.log("Ken: Everything feels fine for now! :)")
  }else{
    console.log("Ken: It feels like the room has spun " + i + " times...I don't feel so good...")
  }
}

// // Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for(i = 0; i <= 20; i++){
  if(i == 0){
    console.log("Teo: Hahaha, that was funny af, for real")
  }else if(i < 10){
    console.log("Teo: My vision is spinning...feels like  " + i + " times...I don't feel so good...")
  }else{
    console.log("Teo: Who keeps spinning me?? It's been like... " + i + "times!! This suuuuucks :<")
  }
}

// // But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
for(i = 1; i <= 20; i++){
  console.log("Teo: I'M SORRY!!!!!")
}
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
    thing1: 'shoes',
    thing2: 'clothes',
    thing3: 'gaming console'
  }
  
  for (let thingThatIOwn in whateverQueenBeySaid){
    console.log(whateverQueenBeySaid[thingThatIOwn] + " in a box to the left~")
  }

  // Using (FOR IN LOOP), print the indexes of the array.
  const lana = ['l', 'a', 'n', 'a']

  for(let index in lana){
    console.log(lana[index])
  }
  
  // USE (FOR OF LOOP)!
  const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  let sentence = ""

  for(let theWords of tia){
    sentence += theWords + " "
  }
  console.log(sentence)

  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
  const perscholas = ['Amira', 'Arely', 'Jonathan']

  function printPerScholas(psName){
    var psString = "PS"
    psString += " " + psName
    console.log(psString)
  }

  perscholas.forEach(printPerScholas)
  

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push() adds an element to the end of an array
// pop() removes the last element in an array
// unshift() adds an elemenent to the begininning of an array
// shift() removes an element from the beginning of an array
// concat() joins multiple arrays together into a new array
// splice() add/remove a number of elements to/from an array, able to specify starting index and # of elements
// slice() allows for copying elements from an array using an initial index (inclusive) and an ending index (noninclusive) without modifying the original array
// sort() sorts the elements of an array. Alphabetical order for strings. A compare function may be needed to correctly sort numbers
// includes() Returns true/false based on if the array contains the specified value
// indexOf() Returns the first index containing the specified value, or a -1 if the value is not found
// length Returns the # of elements in an array

/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];

shoppingList.push("Hendricks gin")
console.log(shoppingList)

//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"]
var motivational = ""
console.log(yoda.reverse().toString())

//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = ""

while(waitList.length != 0){
  nowServing = waitList.shift()
  console.log("Now Serving: " + nowServing)
  console.log("The current queue is: " + waitList)
}


//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

var shoe = ["just", "do", "it"];
var shoeString = shoe.toString()
console.log(shoeString)

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

