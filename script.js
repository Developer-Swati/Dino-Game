const dia = document.getElementById("animal");
const cactus = document.getElementById("cactus1");
const Board = document.getElementById("scoreBoard");
let score = 0;
flag = true;

function jump() {
  if (dispatchEvent.classList != "jump") {
    dia.classList.add("jump");
    // remove jump class when animal has jumped once to restart animation
    setTimeout(function () {
      dia.classList.remove("jump");
      if (flag != false) {
        score = score + 1;
      }
    }, 300);
  }
}

// check for collision 
let checkColl = setInterval(function () {

  let diaTop = parseInt(window.getComputedStyle(dia).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  // console.log(cactusLeft);

  if (cactusLeft > 0 && cactusLeft < 90 && diaTop >= 400) {
    dia.style.animationPlayState = "paused";
    cactus.style.animationPlayState = "paused";
    flag = false;
    // alert("Game Over!!! Score is "+score);
    Board.classList.add("board");
    Board.innerHTML = ` Game Over!! Score is ${score}`;
    Board.style.padding = "10px";
    window.location.reload;
    // cactus.classList.add("path");
  }
}, 10);



document.addEventListener('keydown', function (event) {
  if (event.key == " " || event.code == "Space") {
    jump();
    console.log(event.code);
  }
});



