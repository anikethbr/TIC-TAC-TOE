let turn = "X";
var arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        arr[i][j] = (document.getElementById(i.toString().concat(j.toString())));
    }
}
var heading = document.getElementsByClassName("heading")[0];
function declareWinner() {
    //Horizontal
    var x = 0, o = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr[i][j].innerHTML == "X") {
                x++;
            } else if (arr[i][j].innerHTML == "O") {
                o++;
            }
        }
        if (x == 3) {
            heading.innerHTML = "X WINS";
            heading.style.color = "red";
            disableAllBtn();
            break;
        } else if (o == 3) {
            heading.innerHTML = "O WINS";
            heading.style.color = "blue";
            disableAllBtn();
            break;
        } else {
            x = 0;
            o = 0;
        }
    }
    //vertical
    var x = 0, o = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr[j][i].innerHTML == "X") {
                x++;
            } else if (arr[j][i].innerHTML == "O") {
                o++;
            }
        }
        if (x == 3) {
            heading.innerHTML = "X WINS";
            heading.style.color = "red";
            disableAllBtn();
            break;
        } else if (o == 3) {
            heading.innerHTML = "O WINS";
            heading.style.color = "blue";
            disableAllBtn();
            break;
        } else {
            x = 0;
            o = 0;
        }
    }
    //Diagonal 1
    var x = 0, o = 0;
    for (var i = 0; i < 3; i++) {
        if (arr[i][i].innerHTML == "X") {
            x++;
        } else if (arr[i][i].innerHTML == "O") {
            o++;
        }
    }
    if (x == 3) {
        heading.innerHTML = "X WINS";
        heading.style.color = "red";
        disableAllBtn();
    } else if (o == 3) {
        heading.innerHTML = "O WINS";
        heading.style.color = "blue";
        disableAllBtn();
    } else {
        x = 0;
        o = 0;
    }
    //Diagonal 2
    var x = 0, o = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 2; j >= 0; j--) {
            if (i + j == 2) {
                if (arr[i][j].innerHTML == "X") {
                    x++;
                } else if (arr[i][j].innerHTML == "O") {
                    o++;
                }
            }
        }
        if (x == 3) {
            heading.innerHTML = "X WINS";
            heading.style.color = "red";
            disableAllBtn();
        } else if (o == 3) {
            heading.innerHTML = "O WINS";
            heading.style.color = "blue";
            disableAllBtn();
        } else {
            x = 0;
            o = 0;
        }
    }
}
function play(btnId) {
    var button = document.getElementById(btnId);
    if (turn == "X") {
        button.innerHTML = "X";
        button.style.color = "red";
        button.disabled = true;
        turn = "O";
    } else if (turn == "O") {
        button.innerHTML = "O";
        button.style.color = "blue";
        button.disabled = true;
        turn = "X";
    }
    declareWinner();
}
function disableAllBtn() {
    for (var i = 0; i < 9; i++) {
        document.getElementsByTagName("button")[i].disabled = true;
    }
}
