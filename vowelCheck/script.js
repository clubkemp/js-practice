// PROBLEM:- write a function that takes a string as an argument and returns the number of vowels contained in that string.

const vowelCheck = (string) =>{
    //sometimes y?
    let vowelCount = 0
    const strArray = string.split("")
    strArray.forEach(e=>{
      if(e=== 'a' || e==='e' || e==='i' || e==='o' || e==='u'){
        vowelCount++
      }
    })
    if(vowelCount === 0){
      strArray.forEach(e=>{
      if(e=== 'y'){
        vowelCount++
      }
    })
    }
    return vowelCount
  }
  
  console.log(vowelCheck('fly'))