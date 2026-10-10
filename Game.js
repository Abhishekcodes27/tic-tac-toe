let gameEnded = false;

console.log("WELCOME TO TIC TAC TOE");

let Audioturn = new Audio("click 2.mp3");
let music = new Audio("winning.mp3");

let turn = "X";

//  function to change the turn

const ChangeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// function to check for a win

  let box1 = document.querySelector(".box1");
  let box2 = document.querySelector(".box2");
  let box3 = document.querySelector(".box3");
  let box4 = document.querySelector(".box4");
  let box5 = document.querySelector(".box5");
  let box6 = document.querySelector(".box6");
  let box7 = document.querySelector(".box7");
  let box8 = document.querySelector(".box8");
  let box9 = document.querySelector(".box9");

  
let winningCombinations = [
    [box1, box2, box3], // Top row
    [box4, box5, box6], // Middle row
    [box7, box8, box9], // Bottom row

    [box1, box4, box7], // Left column
    [box2, box5, box8], // Middle column
    [box3, box6, box9], // Right column

    [box1, box5, box9], // Diagonal
    [box3, box5, box7]  // Opposite diagonal
];


const CheckWin = () => {

        for(let combination of winningCombinations){
            let [a,b,c] = combination;
            if(
                a.textContent !== "" &&
                a.textContent === b.textContent &&
                b.textContent === c.textContent 
            ){
                    gameEnded = true;

                document.querySelector("#result").textContent = a.textContent + " wins!";
                music.currentTime = 0;
                music.play();
              /* console.log(a.textContent + "Wins!");
               winningLine.style.display = "block";  */

               //  winning line //

             /*  let linePositions = {
                "1-2-3": { top: "280px", left: "129px", angle: "0deg" },
                "4-5-6": { top: "465px", left: "129px", angle: "0deg" },
                "7-8-9": { top: "650px", left: "129px", angle: "0deg" },

                "1-4-7": { top: "465px", left: "195px", angle: "90deg" },
                "2-5-8": { top: "465px", left: "395px", angle: "90deg" },
                "3-6-9": { top: "465px", left: "590px", angle: "90deg" },

                "1-5-9": { top: "465px", left: "385px", angle: "45deg" },
                "3-5-7": { top: "465px", left: "385px", angle: "-45deg" },
               };

                let winningPatterns = winningCombinations.findIndex(
                combo => combo[0] === a && combo[1] === b && combo[2] === c 
                );
                 
                let patternNames = [
                  "1-2-3", "4-5-6", "7-8-9",
                    "1-4-7", "2-5-8", "3-6-9",
                    "1-5-9", "3-5-7"
                        ];

                let position = linePositions[patternNames[winningPatterns]];
                 winningLine.style.top = position.top;
                 winningLine.style.left = position.left;
                 winningLine.style.transform = 'translate(-50%, -50%) rotate{$position angle})';   */      
        
               return a.textContent;         
            }
        }
        return null;
};    


 //  Game logic

let boxes = document.querySelectorAll(
    ".box1, .box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9"
);

let winningLine = document.querySelector(".winning-line");

boxes.forEach(element => {

    element.addEventListener("click", () => {

        if (element.textContent !== "" || gameEnded) {
            return;
        }
            element.textContent = turn;

            element.style.fontSize = "80px";

            element.style.textAlign = "center";

            Audioturn.currentTime = 0;
            Audioturn.play();

            CheckWin();
        
            if (gameEnded){     
            return;
        }
            turn = ChangeTurn();
        

    });

});