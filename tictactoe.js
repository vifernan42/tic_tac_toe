var win = 0;
var count = 0;
const id_arr = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];


function reset(){
    win = 0;
    count = 0;
    document.getElementById(id_arr[0]).innerHTML = " ";
    document.getElementById(id_arr[1]).innerHTML = " ";
    document.getElementById(id_arr[2]).innerHTML = " ";
    document.getElementById(id_arr[3]).innerHTML = " ";
    document.getElementById(id_arr[4]).innerHTML = " ";
    document.getElementById(id_arr[5]).innerHTML = " ";
    document.getElementById(id_arr[6]).innerHTML = " ";
    document.getElementById(id_arr[7]).innerHTML = " ";
    document.getElementById(id_arr[8]).innerHTML = " ";
    document.getElementById("texto").innerHTML = " ";
    document.getElementById("reply").style.display = "none";
}
function check(){
    if ((document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[1]).innerHTML === "X" && document.getElementById(id_arr[2]).innerHTML === "X") ||
        (document.getElementById(id_arr[3]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[5]).innerHTML === "X") ||
        (document.getElementById(id_arr[6]).innerHTML === "X" && document.getElementById(id_arr[7]).innerHTML === "X" && document.getElementById(id_arr[8]).innerHTML === "X") ||
        (document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[3]).innerHTML === "X" && document.getElementById(id_arr[6]).innerHTML === "X") ||
        (document.getElementById(id_arr[1]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[7]).innerHTML === "X") ||
        (document.getElementById(id_arr[2]).innerHTML === "X" && document.getElementById(id_arr[5]).innerHTML === "X" && document.getElementById(id_arr[8]).innerHTML === "X") ||
        (document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[8]).innerHTML === "X") ||
        (document.getElementById(id_arr[6]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[2]).innerHTML === "X"))
    {
        document.getElementById("texto").innerHTML = "YOU WON!";
        document.getElementById("reply").style.display = "block";
        win = 1;
    }
    if ((document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[1]).innerHTML === "O" && document.getElementById(id_arr[2]).innerHTML === "O") ||
        (document.getElementById(id_arr[3]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[5]).innerHTML === "O") ||
        (document.getElementById(id_arr[6]).innerHTML === "O" && document.getElementById(id_arr[7]).innerHTML === "O" && document.getElementById(id_arr[8]).innerHTML === "O") ||
        (document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[3]).innerHTML === "O" && document.getElementById(id_arr[6]).innerHTML === "O") ||
        (document.getElementById(id_arr[1]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[7]).innerHTML === "O") ||
        (document.getElementById(id_arr[2]).innerHTML === "O" && document.getElementById(id_arr[5]).innerHTML === "O" && document.getElementById(id_arr[8]).innerHTML === "O") ||
        (document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[8]).innerHTML === "O") ||
        (document.getElementById(id_arr[6]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[2]).innerHTML === "O"))
    {
        document.getElementById("texto").innerHTML = "YOU LOST!";
        document.getElementById("reply").style.display = "block";
        win = 1;
    }
}

function fill(clicked_id){
    if (win == 0)
    {
        if (document.getElementById(clicked_id).innerHTML === " ")
        {
            document.getElementById(clicked_id).style.color = 'white';
            document.getElementById(clicked_id).innerHTML = "X";
            count++;
            if (count < 5)
            {
                check();
                if (win == 0)
                    player2();
            }
            else
            {
                document.getElementById("texto").innerHTML = "YOU TIE!";
                document.getElementById("reply").style.display = "block";
            }
        }
        else
            document.getElementById("texto").innerHTML = "Select other!";
        check();
    }
}

function player2(){
    let x = Math.floor((Math.random() * 8) + 0);

    if (document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[1]).innerHTML === "O" && document.getElementById(id_arr[2]).innerHTML === " ")
    {
        document.getElementById(id_arr[2]).style.color = 'grey';
        document.getElementById(id_arr[2]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[1]).innerHTML === " " && document.getElementById(id_arr[2]).innerHTML === "O")
    {
        document.getElementById(id_arr[1]).style.color = 'grey';
        document.getElementById(id_arr[1]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === " " && document.getElementById(id_arr[1]).innerHTML === "O" && document.getElementById(id_arr[2]).innerHTML === "O")
    {
        document.getElementById(id_arr[0]).style.color = 'grey';
        document.getElementById(id_arr[0]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[3]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[5]).innerHTML === " ")
    {
        document.getElementById(id_arr[5]).style.color = 'grey';
        document.getElementById(id_arr[5]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[3]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === " " && document.getElementById(id_arr[5]).innerHTML === "O")
    {
        document.getElementById(id_arr[4]).style.color = 'grey';
        document.getElementById(id_arr[4]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[3]).innerHTML === " " && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[5]).innerHTML === "O")
    {
        document.getElementById(id_arr[3]).style.color = 'grey';
        document.getElementById(id_arr[3]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === "O" && document.getElementById(id_arr[7]).innerHTML === "O" && document.getElementById(id_arr[8]).innerHTML === " ")
    {
        document.getElementById(id_arr[8]).style.color = 'grey';
        document.getElementById(id_arr[8]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === "O" && document.getElementById(id_arr[7]).innerHTML === " " && document.getElementById(id_arr[8]).innerHTML === "O")
    {
        document.getElementById(id_arr[7]).style.color = 'grey';
        document.getElementById(id_arr[7]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === " " && document.getElementById(id_arr[7]).innerHTML === "O" && document.getElementById(id_arr[8]).innerHTML === "O")
    {
        document.getElementById(id_arr[6]).style.color = 'grey';
        document.getElementById(id_arr[6]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[3]).innerHTML === "O" && document.getElementById(id_arr[6]).innerHTML === " ")
    {
        document.getElementById(id_arr[6]).style.color = 'grey';
        document.getElementById(id_arr[6]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[3]).innerHTML === " " && document.getElementById(id_arr[6]).innerHTML === "O")
    {
        document.getElementById(id_arr[3]).style.color = 'grey';
        document.getElementById(id_arr[3]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === " " && document.getElementById(id_arr[3]).innerHTML === "O" && document.getElementById(id_arr[6]).innerHTML === "O")
    {
        document.getElementById(id_arr[0]).style.color = 'grey';
        document.getElementById(id_arr[0]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[1]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[7]).innerHTML === " ")
    {
        document.getElementById(id_arr[7]).style.color = 'grey';
        document.getElementById(id_arr[7]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[1]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === " " && document.getElementById(id_arr[7]).innerHTML === "O")
    {
        document.getElementById(id_arr[4]).style.color = 'grey';
        document.getElementById(id_arr[4]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[1]).innerHTML === " " && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[7]).innerHTML === "O")
    {
        document.getElementById(id_arr[1]).style.color = 'grey';
        document.getElementById(id_arr[1]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[2]).innerHTML === "O" && document.getElementById(id_arr[5]).innerHTML === "O" && document.getElementById(id_arr[8]).innerHTML === " ")
    {
        document.getElementById(id_arr[8]).style.color = 'grey';
        document.getElementById(id_arr[8]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[8]).innerHTML === " ")
    {
        document.getElementById(id_arr[8]).style.color = 'grey';
        document.getElementById(id_arr[8]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === " " && document.getElementById(id_arr[8]).innerHTML === "O")
    {
        document.getElementById(id_arr[4]).style.color = 'grey';
        document.getElementById(id_arr[4]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === " " && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[8]).innerHTML === "O")
    {
        document.getElementById(id_arr[0]).style.color = 'grey';
        document.getElementById(id_arr[0]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[2]).innerHTML === " ")
    {
        document.getElementById(id_arr[2]).style.color = 'grey';
        document.getElementById(id_arr[2]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === "O" && document.getElementById(id_arr[4]).innerHTML === " " && document.getElementById(id_arr[2]).innerHTML === "O")
    {
        document.getElementById(id_arr[4]).style.color = 'grey';
        document.getElementById(id_arr[4]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === " " && document.getElementById(id_arr[4]).innerHTML === "O" && document.getElementById(id_arr[2]).innerHTML === "O")
    {
        document.getElementById(id_arr[6]).style.color = 'grey';
        document.getElementById(id_arr[6]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[1]).innerHTML === "X" && document.getElementById(id_arr[2]).innerHTML === " ")
    {
        document.getElementById(id_arr[2]).style.color = 'grey';
        document.getElementById(id_arr[2]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[1]).innerHTML === " " && document.getElementById(id_arr[2]).innerHTML === "X")
    {
        document.getElementById(id_arr[1]).style.color = 'grey';
        document.getElementById(id_arr[1]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === " " && document.getElementById(id_arr[1]).innerHTML === "X" && document.getElementById(id_arr[2]).innerHTML === "X")
    {
        document.getElementById(id_arr[0]).style.color = 'grey';
        document.getElementById(id_arr[0]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[3]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[5]).innerHTML === " ")
    {
        document.getElementById(id_arr[5]).style.color = 'grey';
        document.getElementById(id_arr[5]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[3]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === " " && document.getElementById(id_arr[5]).innerHTML === "X")
    {
        document.getElementById(id_arr[4]).style.color = 'grey';
        document.getElementById(id_arr[4]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[3]).innerHTML === " " && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[5]).innerHTML === "X")
    {
        document.getElementById(id_arr[3]).style.color = 'grey';
        document.getElementById(id_arr[3]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === "X" && document.getElementById(id_arr[7]).innerHTML === "X" && document.getElementById(id_arr[8]).innerHTML === " ")
    {
        document.getElementById(id_arr[8]).style.color = 'grey';
        document.getElementById(id_arr[8]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === "X" && document.getElementById(id_arr[7]).innerHTML === " " && document.getElementById(id_arr[8]).innerHTML === "X")
    {
        document.getElementById(id_arr[7]).style.color = 'grey';
        document.getElementById(id_arr[7]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === " " && document.getElementById(id_arr[7]).innerHTML === "X" && document.getElementById(id_arr[8]).innerHTML === "X")
    {
        document.getElementById(id_arr[6]).style.color = 'grey';
        document.getElementById(id_arr[6]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[3]).innerHTML === "X" && document.getElementById(id_arr[6]).innerHTML === " ")
    {
        document.getElementById(id_arr[6]).style.color = 'grey';
        document.getElementById(id_arr[6]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[3]).innerHTML === " " && document.getElementById(id_arr[6]).innerHTML === "X")
    {
        document.getElementById(id_arr[3]).style.color = 'grey';
        document.getElementById(id_arr[3]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === " " && document.getElementById(id_arr[3]).innerHTML === "X" && document.getElementById(id_arr[6]).innerHTML === "X")
    {
        document.getElementById(id_arr[0]).style.color = 'grey';
        document.getElementById(id_arr[0]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[1]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[7]).innerHTML === " ")
    {
        document.getElementById(id_arr[7]).style.color = 'grey';
        document.getElementById(id_arr[7]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[1]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === " " && document.getElementById(id_arr[7]).innerHTML === "X")
    {
        document.getElementById(id_arr[4]).style.color = 'grey';
        document.getElementById(id_arr[4]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[1]).innerHTML === " " && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[7]).innerHTML === "X")
    {
        document.getElementById(id_arr[1]).style.color = 'grey';
        document.getElementById(id_arr[1]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[2]).innerHTML === "X" && document.getElementById(id_arr[5]).innerHTML === "X" && document.getElementById(id_arr[8]).innerHTML === " ")
    {
        document.getElementById(id_arr[8]).style.color = 'grey';
        document.getElementById(id_arr[8]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[8]).innerHTML === " ")
    {
        document.getElementById(id_arr[8]).style.color = 'grey';
        document.getElementById(id_arr[8]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === " " && document.getElementById(id_arr[8]).innerHTML === "X")
    {
        document.getElementById(id_arr[4]).style.color = 'grey';
        document.getElementById(id_arr[4]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[0]).innerHTML === " " && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[8]).innerHTML === "X")
    {
        document.getElementById(id_arr[0]).style.color = 'grey';
        document.getElementById(id_arr[0]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[2]).innerHTML === " ")
    {
        document.getElementById(id_arr[2]).style.color = 'grey';
        document.getElementById(id_arr[2]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === "X" && document.getElementById(id_arr[4]).innerHTML === " " && document.getElementById(id_arr[2]).innerHTML === "X")
    {
        document.getElementById(id_arr[4]).style.color = 'grey';
        document.getElementById(id_arr[4]).innerHTML = "O";
    }
    else if (document.getElementById(id_arr[6]).innerHTML === " " && document.getElementById(id_arr[4]).innerHTML === "X" && document.getElementById(id_arr[2]).innerHTML === "X")
    {
        document.getElementById(id_arr[6]).style.color = 'grey';
        document.getElementById(id_arr[6]).innerHTML = "O";
    }
    else
    {
        if (document.getElementById(id_arr[x]).innerHTML === " ")
        {
            document.getElementById(id_arr[x]).style.color = 'grey';
            document.getElementById(id_arr[x]).innerHTML = "O";
        }
        else
            player2();
    }
    check();
}