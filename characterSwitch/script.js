// PROBLEM:- Replace every occurrence of a given character in a string with another. For Example-


const characterSwitch = (letter1, letter2, string) =>{
    const array = string.split('')
    const newArray = array.map(e=>{
      if(e=== letter1){
        return letter2
      }else{
        return e
      }
    })
    console.log(newArray.join(''))
  }
  
  characterSwitch("a", "b", "This is the way")