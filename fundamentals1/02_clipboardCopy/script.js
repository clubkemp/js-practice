// Write a JavaScript program to copy a string to the clipboard
console.log("script linked")
const text = document.getElementById("text")
console.log(text)
text.select()
document.execCommand("copy")