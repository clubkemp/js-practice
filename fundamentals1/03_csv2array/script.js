// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array
const splitFnc = (string) =>{
    const array = string.split(",")
    console.log(array);
}
const csv = "this, is, a, csv"
splitFnc(csv)