let turn="X";
var arr=[];
for(var i=1;i<=9;i++){
    arr[i]=(document.getElementById(i.toString()))
}
var heading=document.getElementsByClassName("heading")[0];
function declareWinner(){
    //Horizontal
    var x=0,o=0;
    for(var i=1;i<=9;i+=3){
        for( var j=i;j<=i+2;j++){
            if(arr[j].innerHTML=="X"){
                x++;
                console.log(x);
            }else if(arr[j].innerHTML=="O"){
                o++;
                console.log(o);
            }
        }
        if(x==3){
            heading.innerHTML="X WINS";
            disableAllBtn();
            break;
        }else if(o==3){
            heading.innerHTML="O WINS";
            disableAllBtn();
            break;
        }else{
            x=0;
            o=0;
        }
    }
    //vertical
    var x=0,o=0;
    for(var i=1;i<=3;i++){
        for( var j=i;j<=9;j+=3){
            if(arr[j].innerHTML=="X"){
                x++;
                console.log(x);
            }else if(arr[j].innerHTML=="O"){
                o++;
                console.log(o);
            }
        }
        if(x==3){
            heading.innerHTML="X WINS";
            disableAllBtn();
            break;
        }else if(o==3){
            heading.innerHTML="O WINS";
            disableAllBtn();
            break;
        }else{
            x=0;
            o=0;
        }
    }
    //Diagonal 1
    var x=0,o=0;
    for(var i=1;i<=9;i+=4){
            if(arr[i].innerHTML=="X"){
                x++;
                console.log(x);
            }else if(arr[i].innerHTML=="O"){
                o++;
                console.log(o);
            }
        }
    if(x==3){
        heading.innerHTML="X WINS";
        disableAllBtn();
    }else if(o==3){
        heading.innerHTML="O WINS";
        disableAllBtn();
    }else{
            x=0;
            o=0;
    }
    //Diagonal 2
    var x=0,o=0;
    for(var i=3;i<=9;i+=2){
            if(arr[i].innerHTML=="X"){
                x++;
                console.log(x);
            }else if(arr[i].innerHTML=="O"){
                o++;
                console.log(o);
            }
        }
    if(x==3){
        heading.innerHTML="X WINS";
        disableAllBtn();
    }else if(o==3){
        heading.innerHTML="O WINS";
        disableAllBtn();
    }else{
            x=0;
            o=0;
    }
}
function play(btnId){
    var button =document.getElementById(btnId);
    if (turn=="X"){
        button.innerHTML="X";
        button.style.color="red";
        button.disabled=true;
        turn="O";
    }else if (turn=="O"){
        button.innerHTML="O";
        button.style.color="blue";
        button.disabled=true;
        turn="X";
    }
    declareWinner();
}
function disableAllBtn(){
    for(var i=0;i<9;i++){
        document.getElementsByTagName("button")[i].disabled=true;
    }
}