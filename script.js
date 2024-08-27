let btn = document.querySelectorAll(".button-option");
let popup = document.querySelector(".pop");
let newgamebtn = document.getElementById("new-game");
let restartbtn = document.getElementById("restart");
let msg = document.getElementById("message");

let winpattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
    ];
    let Xturn = true;
    let count = 0;

    const disableButtons = () => {
        btn.forEach((element)=>(element.disabled=true));

        popup.classList.remove("hide")
    };

    const Enablebuttons = () =>{
        btn.forEach((element)=>{
            element.innerText = "";
            element.disabled = false;

        });
        popup.classList.add("hide");
    };


    const winFunction =(letter) => {
        disableButtons();
        if(letter === "X"){
            msg.innerHTML = "&#x1F389<br> 'X' Wins ";
        }
        else{
            msg.innerHTML =  "&#x1F389<br> 'O' Wins ";
        }
    };

    const drawFunction = () => {
        disableButtons();
        msg.innerHTML = "&#x1F60E<br> It's a Draw!";
       
    };

    const  wincheck = ()=>{
        for(let i of winpattern){
            let[element1,element2,element3] = [
                btn[i[0]].innerText,
                btn[i[1]].innerText,
                btn[i[2]].innerText,
            ];

            if(element1 !== "" &&(element2 !== "")&& (element3!=="")){
                if(element1===element2&& element2===element3){
                    winFunction(element1);
                }
            }
        }
    }

    btn.forEach((element) =>{
        element.addEventListener("click",() => {
            if(Xturn){
                Xturn=false;
                element.innerText = "X";
                element.disabled = true;

        }
        else{
            Xturn=true;
            element.innerText = "O";
            element.disabled = true;

        }
        count += 1;
        if(count==9){
        drawFunction();
        }
        wincheck();
    });
});


    newgamebtn.addEventListener("click", () => {
        count = 0;
        Enablebuttons();
    });
    
    restartbtn.addEventListener("click", () => {
        Enablebuttons();
    });

window.onload = Enablebuttons;
       
 
