const guess=Math.floor((Math.random()*10))+1
function ask(){
    let user_guess=parseInt(prompt("Guess a number"))
    if (user_guess<guess) {
    console.log("Your guess is lower try again")
    ask()
}
else if (user_guess>guess) {
    console.log("Your guess is higher try again")
    ask()
}
else{
    console.log("Your guess was correct ")
}
}
ask()