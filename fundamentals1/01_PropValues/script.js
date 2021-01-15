// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one
const obj1 = {thing1:1, thing2:"chair"}
const obj2 = {thing1:1, thing2:"chair"}
const obj3 = {thing1:3, thing2:"chair"}
const obj4 = {thing2:1, thing3:"chair"}

// first need to check to see if the objects have the same lengh
const check = (first, second) =>{
    const obj1Array = Object.keys(first)
    const obj2Array = Object.keys(second)
    console.log(obj1Array, obj2Array)
    if(obj1Array.length === obj2Array.length){
        console.log("same length")
        for(let i=0; i < obj1Array.length; i++){
            const key1 = obj1Array[i]
            const key2 = obj2Array[i]
            console.log(first[key1], second[key2])
            if(obj1Array[i] != obj2Array[i]){
                return false
            }else if (first[key1] != second[key2]){
                
                return false
            }
        }
        return true
    }else{
        return false
    }
}
// then check to see if they have the same keys
// then check to see if the keys have the same values
console.log(check(obj1,obj4));