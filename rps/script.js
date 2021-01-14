// setup options to pick from r, p, s
const options = ["r","p","s"];
const score ={
    wins: 0,
    losses: 0,
    ties: 0
}


// computer makes their pick
const compPick = () =>{
    const randomPick = Math.floor(Math.random() * 3)
    return options[randomPick]
}
// user makes their pick
const userPick = () =>{
    let userPick = prompt("What is you're choice? (r, p, s)")
    while(userPick != "r" && userPick != "p" && userPick != "s"){
        userPick = prompt ("Oops, that's not a valid option. Type r,p, or s")
    }
    return(userPick)
}

// logic to compare the two picks
const compareChoices = (computer, user) =>{
    console.log(computer, user)
    // add to scoreboard
    if(computer === user){
        score.ties++
    }else if((computer === "r" && user==="s") || (computer === "s" && user==="p") || (computer === "p" && user==="r")){
        score.losses++
    }else{
        score.wins++
    }
    console.log(score)
    
}
const runGame = (score) =>{
    alert("Let the games begin!")
    console.log(score)
    while(score.wins < 3 && score.losses < 3 ){
        console.log("game running")
        compareChoices(compPick(), userPick())
    }
    if (score.wins === 3){
        alert("Congrats you win")
    }else{
        alert("Wah Wah, you lose")
    }
}
runGame(score);
// logic to check the scoreboard
// endgame if criteria met