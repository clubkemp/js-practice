// Write a function that will pair up the array element whose sum is equal to a given number.

const pairs = (arr, sum) =>{
    const pairs = []
    arr.forEach(e =>{
      const set =[e]
      console.log(set)
      arr.forEach(j =>{
        if(set.length === 2){
            return
          }
        if(e+j === sum){
          set.push(j)
          console.log(set)
        }
      })
      pairs.push(set.sort())
      
    })
  }
  
  pairs([3,1,5,4,2,3],6)