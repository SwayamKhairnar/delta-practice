let userseq = [];
let gameseq = [];
let h3 = document.querySelector("h3");
let boxe = ["pink", "green", "purple", "orange"];
let started = false;
let level = 0;

// Start the game on any click
document.addEventListener("click", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

// All color buttons
let allBtns = document.querySelectorAll(".box");

// Attach click events to each box
allBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    let clickedColor = btn.id;
    userseq.push(clickedColor);
    boxFlash(btn);
    checkAnswer(userseq.length - 1);
  });
});

function levelUp() {
  userseq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let rndIdx = Math.floor(Math.random() * 4);
  let rndClr = boxe[rndIdx];
  let btnFlsh = document.querySelector(`#${rndClr}`);
  gameseq.push(rndClr);
  boxFlash(btnFlsh);
}

function boxFlash(btn) {
  if (!btn) return;
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function checkAnswer(index) {
  if (userseq[index] === gameseq[index]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerText = `Game Over! Click to Restart`;
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 100);

    resetGame();
  }
}

function resetGame() {
  started = false;
  level = 0;
  gameseq = [];
  userseq = [];
}
