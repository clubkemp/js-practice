// Definition:- Fibonacci sequence is basically a sequence of number where every number in the sequence is the sum of the two previous one. A Fibonacci sequence is something look like this — 0,1,1,2,3,5,8,13,21

// PROBLEM:- write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as an argument to the function.

const fibo = (num) => {
    let fibArray = [0,1,1];
    if(num < fibArray.length){
      console.log(fibArray[num])
    //start the sequence at 0 and build the array from there   
    }else{
      while(fibArray.length <= num){
        const newNum = fibArray[fibArray.length-1] + fibArray[fibArray.length-2]  
        fibArray.push(newNum)
      }
      return fibArray.pop()
    }
    //need to have a working index that steps up to the number
  }
    
  console.log(fibo(24));

//   Mo betta
// const fibo = (num) => {
//     let fibArray = [0,1];
//     for(let i = 2; i < num; i++){
//       const number = fibArray[i-1] + fibArray[i-2]
//       fibArray.push(number)
//     }
//     return(fibArray.pop())
//   }
//   console.log(fibo(24));