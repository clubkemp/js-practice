 // write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation.


// anagram('gainly', 'lying') //true;
// anagram('listen', 'bye')  // false;

const anagram = (string1, string2) =>{
    //turn string into an array with only characters
    // let new1 = string1.split("")
    string1 = string1.replace(/\W/g, '').toLocaleLowerCase()
    string2 = string2.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase()
    console.log(string1, string2)
    
    const array1 = string1.split('').sort()
    const array2 = string2.split('').sort()
    console.log(array1,array2)
    if(array1.length === array2.length){
      for(let i=0; i<array1.length; i++){
        if(array1[i] != array2[i]){
          return false
        }
      }
      return true
    }else{
      return false
    }
    //sort arraylet a
    //for loop to compare each letter
  }
  
  console.log(anagram('listen', 'bye')) // true;