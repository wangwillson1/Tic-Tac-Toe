var can0;
var can1;
var can2;
var can3;
var can4;
var can5;
var can6;
var can7;
var can8;
var ctx0;
var ctx1;
var ctx2;
var ctx3;
var ctx4;
var ctx5;
var ctx6;
var ctx7;
var ctx8;
var board = [
    " ", //0
    " ", //1
    " ", //2
    " ", //3
    " ", //4
    " ", //5
    " ", //6
    " ", //7
    " ", //8
];
var current_player = "X"
var user_play = ""

function setup(){
    can0 = document.getElementById("can0");
    can1 = document.getElementById("can1");
    can2 = document.getElementById("can2");
    can3 = document.getElementById("can3");
    can4 = document.getElementById("can4");
    can5 = document.getElementById("can5");
    can6 = document.getElementById("can6");
    can7 = document.getElementById("can7");
    can8 = document.getElementById("can8");
    ctx0 = can0.getContext('2d')
    ctx1 = can1.getContext('2d')
    ctx2 = can2.getContext('2d')
    ctx3 = can3.getContext('2d')
    ctx4 = can4.getContext('2d')
    ctx5 = can5.getContext('2d')
    ctx6 = can6.getContext('2d')
    ctx7 = can7.getContext('2d')
    ctx8 = can8.getContext('2d')
    can0.addEventListener("click", handleClick0);
    can1.addEventListener("click", handleClick1);
    can2.addEventListener("click", handleClick2);
    can3.addEventListener("click", handleClick3);
    can4.addEventListener("click", handleClick4);
    can5.addEventListener("click", handleClick5);
    can6.addEventListener("click", handleClick6);
    can7.addEventListener("click", handleClick7);
    can8.addEventListener("click", handleClick8);
}

function handleClick0(){
    checkWin();
    if (board[0] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx0.moveTo(20, 20);
        ctx0.lineTo(155, 155);
        ctx0.stroke();
        ctx0.moveTo(155, 20);
        ctx0.lineTo(20, 155);
        ctx0.stroke(); 
        current_player = "O"
        board[0] = "X"
        checkWin();
    } else {
        ctx0.beginPath();
        ctx0.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx0.stroke();
        current_player = "X"
        board[0] = "O"
        checkWin();
    }

}

function handleClick1(){
    checkWin();
    if (board[1] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx1.moveTo(20, 20);
        ctx1.lineTo(155, 155);
        ctx1.stroke();
        ctx1.moveTo(155, 20);
        ctx1.lineTo(20, 155);
        ctx1.stroke(); 
        current_player = "O"
        board[1] = "X"
        checkWin();
    } else {
        ctx1.beginPath();
        ctx1.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx1.stroke();
        current_player = "X"
        board[1] = "O"
        checkWin();
    } 
}

function handleClick2(){
    checkWin();
    if (board[2] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx2.moveTo(20, 20);
        ctx2.lineTo(155, 155);
        ctx2.stroke();
        ctx2.moveTo(155, 20);
        ctx2.lineTo(20, 155);
        ctx2.stroke(); 
        current_player = "O"
        board[2] = "X"
        checkWin();
    } else {
        ctx2.beginPath();
        ctx2.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx2.stroke();
        current_player = "X"
        board[2] = "O"
        checkWin();
    } 
}

function handleClick3(){
    checkWin();
    if (board[3] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx3.moveTo(20, 20);
        ctx3.lineTo(155, 155);
        ctx3.stroke();
        ctx3.moveTo(155, 20);
        ctx3.lineTo(20, 155);
        ctx3.stroke();
        current_player = "O" 
        board[3] = "X"
        checkWin();
    } else {
        ctx3.beginPath();
        ctx3.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx3.stroke();
        current_player = "X"
        board[3] = "O"
        checkWin();
    } 
}

function handleClick4(){
    checkWin();
    if (board[4] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx4.moveTo(20, 20);
        ctx4.lineTo(155, 155);
        ctx4.stroke();
        ctx4.moveTo(155, 20);
        ctx4.lineTo(20, 155);
        ctx4.stroke(); 
        current_player = "O"
        board[4] = "X"
        checkWin();
    } else {
        ctx4.beginPath();
        ctx4.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx4.stroke();
        current_player = "X"
        board[4] = "O"
        checkWin();
    } 
}

function handleClick5(){
    checkWin();
    if (board[5] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx5.moveTo(20, 20);
        ctx5.lineTo(155, 155);
        ctx5.stroke();
        ctx5.moveTo(155, 20);
        ctx5.lineTo(20, 155);
        ctx5.stroke(); 
        current_player = "O"
        board[5] = "X"
        checkWin();
    } else {
        ctx5.beginPath();
        ctx5.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx5.stroke();
        current_player = "X"
        board[5] = "O"
        checkWin();
    } 
}

function handleClick6(){
    checkWin();
    if (board[6] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx6.moveTo(20, 20);
        ctx6.lineTo(155, 155);
        ctx6.stroke();
        ctx6.moveTo(155, 20);
        ctx6.lineTo(20, 155);
        ctx6.stroke(); 
        current_player = "O"
        board[6] = "X"
        checkWin();
    } else {
        ctx6.beginPath();
        ctx6.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx6.stroke();
        current_player = "X"
        board[6] = "O"
        checkWin();
    } 
}

function handleClick7(){
    checkWin();
    if (board[7] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx7.moveTo(20, 20);
        ctx7.lineTo(155, 155);
        ctx7.stroke();
        ctx7.moveTo(155, 20);
        ctx7.lineTo(20, 155);
        ctx7.stroke(); 
        current_player = "O"
        board[7] = "X"
        checkWin();
    } else {
        ctx7.beginPath();
        ctx7.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx7.stroke();
        current_player = "X"
        board[7] = "O"
        checkWin();
    } 
}

function handleClick8(){
    checkWin();
    if (board[8] != " ")
        alert("Can't move there, idiot.")
    else if (current_player == "X"){
        ctx8.moveTo(20, 20);
        ctx8.lineTo(155, 155);
        ctx8.stroke();
        ctx8.moveTo(155, 20);
        ctx8.lineTo(20, 155);
        ctx8.stroke(); 
        current_player = "O"
        board[8] = "X"
        checkWin();
    } else {
        ctx8.beginPath();
        ctx8.arc(87, 87, 65, 0, 2 * Math.PI);
        ctx8.stroke();
        current_player = "X"
        board[8] = "O"
        checkWin();
    } 
}

function checkWin(){
    if (board[0] == board[1] && board[1] == board[2] && board[0] == "X"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("X Player wins!")
    }
    if (board[3] == board[4] && board[4] == board[5] && board[3] == "X"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("X Player wins!")
    }
    if (board[6] == board[7] && board[7] == board[8] && board[8] == "X"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("X Player wins!")
    }
    if (board[0] == board[3] && board[3] == board[6] && board[0] == "X"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("X Player wins!")
    }
    if (board[1] == board[4] && board[4] == board[7] && board[1] == "X"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("X Player wins!")
    }
    if (board[2] == board[5] && board[5] == board[8] && board[2] == "X"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("X Player wins!")
    }
    if (board[0] == board[4] && board[4] == board[8] && board[0] == "X"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("X Player wins!")
    }
    if (board[2] == board[4] && board[4] == board[6] && board[2] == "X"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("X Player wins!")
    }
    if (board[0] == board[1] && board[1] == board[2] && board[0] == "O"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("O Player wins!")
    }
    if (board[3] == board[4] && board[4] == board[5] && board[3] == "O"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("O Player wins!")
    }
    if (board[6] == board[7] && board[7] == board[8] && board[8] == "O"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("O Player wins!")
    }
    if (board[0] == board[3] && board[3] == board[6] && board[0] == "O"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("O Player wins!")
    }
    if (board[1] == board[4] && board[4] == board[7] && board[1] == "O"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("O Player wins!")
    }
    if (board[2] == board[5] && board[5] == board[8] && board[2] == "O"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("O Player wins!")
    }
    if (board[0] == board[4] && board[4] == board[8] && board[0] == "O"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("O Player wins!")
    }
    if (board[2] == board[4] && board[4] == board[6] && board[2] == "O"){
        for(var i = 0; i < board.length; i++){
            board[i] = ""
        }
        alert("O Player wins!")
    }
}

function buttonRestart(){
    location.reload();
}

setup();