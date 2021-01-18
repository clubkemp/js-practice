// PROBLEM:- write a function that will return an array without duplicate values in the array.

const test1 = [1,2,3,4, "foo", "bar"]
const test2 = [1,1,3,4, "foo","foo", "bar"]

const noDups =  (array) => {
  const newArray = []
  newArray.push(array[0])
  array.forEach(e=>{
    let count = 0
    newArray.forEach(j =>{
      if(j === e){
        count++
      }
    })
    if(count === 0){
      newArray.push(e)
    }

  })
  console.log(newArray)

}

// OR
// const noDups =  (array) => {
//     let result = [...new Set(array)]
//     return result
//   }

noDups(test1);