var again = true;
function Show(){
    if(again == true){
    document.getElementById('goo').style.display='block';
    }
    else if(again == false){
        document.getElementById('goo').style.display='none';
    }
}
function reset(){
    again =!again;
}
