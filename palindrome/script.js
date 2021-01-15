// Write a function that will check the string is a palindrome or not.
const pal1 = "tacocat"
const pal2 = "Mam"
const str1 = "Jonny"
const str2 = "Not Pali"

const  palCheck = (string) =>{
    console.log(string.length)
    // starting index of 1
    let i = 0
    // ending index of the word length
    let j = string.length -1
    // check to see if the starting index equals the ending index then work in
    for(i; i<string.length; i++){
      console.log(i, j)
      console.log(string[i].toLocaleLowerCase(), string[j].toLowerCase())
      // Let's add in case sensitivity after we get the core functionality working
      if(string[i].toLowerCase() != string[j].toLowerCase() ){
          console.log("this is not a palindrome bruh - Bye")  
          return false
        }else {
          console.log(`${string[i]} is the same as ${string[j]}`)
        }
        j--
    }
    console.log(`Whoa, ${string} is totally the same front to back`)
    return true
}

palCheck(pal2);

// Using the more concise reverse built in method// 

// const  palCheck = (string) =>{
//   const lwrString = string.toLowerCase();
//   const reverse = lwrString.split('').reverse().join('');
//   console.log(reverse === lwrString);
// }

// palCheck(pal2);