let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn1=true; // O's player
const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("box was clicked!!");
        if(turn1)
        {
            box.innerText= "O";
            turn1=false;
        }
        else{
            box.innerText = "X";
            turn1=true;
        }
        box.disabled=true;
        count++;

        let iswinner=winner();
        if (count === 9 && !iswinner) {
            gameDraw();
          }
        
    });

});

const winner=() => {
    for (p of patterns)
    {
    let pos1Val = boxes[p[0]].innerText;
    let pos2Val = boxes[p[1]].innerText;
    let pos3Val = boxes[p[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;

      }
    }
}
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

  const resetGame = () => {
    turn1 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

  newGameBtn.addEventListener("click", resetGame);
  resetbtn.addEventListener("click", resetGame);