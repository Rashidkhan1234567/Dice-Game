const btn = document.getElementById("guss_btn");
const input = document.getElementById("guss_name");
const result = document.getElementById("result");
let count = 10;
const turn = document.getElementById("turns");
turn.innerHTML = `Your left turns is ${count}`;
let allDiv = [
  document.getElementById("dice-1"),
  document.getElementById("dice-2"),
  document.getElementById("dice-3"),
  document.getElementById("dice-4"),
  document.getElementById("dice-5"),
  document.getElementById("dice-6"),
];
btn.addEventListener("click",  game)
function game(){
  const name = input.value;
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  let selectBox = document.getElementById(`dice-${randomNumber}`);
  if (name.length === 0 || name >= 6 || name.length == 2) {
    alert("You can only enter less than 6 number");
    return;
  }

  for (let i = 0; i < allDiv.length; i++) {
    if (name == randomNumber) {
      result.innerHTML = `You Win 🏆`;
      result.style.backgroundColor = "green";
      result.style.boxShadow = " inset 0px 0px 20px rgb(0, 68, 0)";
      selectBox.classList.add("green");
    } 
    if (name != randomNumber){
      result.innerHTML = `You Lose ❌`;
      result.style.backgroundColor = "red";
      result.style.boxShadow = " inset 0px 0px 20px rgb(104, 0, 0)";
      selectBox.classList.add("red");
    }
  }

  if (name !== randomNumber) {
    count--;
    turn.innerHTML = `Your left turns is ${count}`;
  } else {
    count++;
    turn.innerHTML = `Your left turns is ${count}`;
  }
  if (count == 0) {
    btn.disabled = true;
    alert("game over");
  }
};
