// PROBLEM:- Write a function which takes a string of two or more word and capitalize the first letter of each word.

// Check to see the string is more than one word
// find the index of spaces
// capatilize the letters

const stringCap = (string) =>{
    let capWords = []
    const array = string.split(' ')
    array.forEach(e=>{
      const word = e.split('')
      word.splice(0,1,word[0].toUpperCase())
      console.log(word)
      const capString = word.join('')
      capWords.push(capString)
    })
    console.log(capWords)
    return capWords.join(' ')
  }
  
  console.log(stringCap("foo bar"))
  