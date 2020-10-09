var activeButtonId = false;
var activeButtonsQuantity = 0; 

function _1Button(){
    if(activeButtonId == 'div.button1'){
        contentHide();
    } else if(activeButtonId != false){
        contentHide();
        contentShow('div.button1', 4);
    }  else if(activeButtonId == false){
        contentShow('div.button1', 4);
    }
}
function _2Button(){
    if(activeButtonId == 'div.button2'){
        contentHide();
    } else if(activeButtonId != false){
        contentHide();
        contentShow('div.button2', 3);
    }  else if(activeButtonId == false){
        contentShow('div.button2', 3);
    }
}
function _3Button(){
    if(activeButtonId == 'div.button3'){
        contentHide();
    } else if(activeButtonId != false){
        contentHide();
        contentShow('div.button3', 6);
    }  else if(activeButtonId == false){
        contentShow('div.button3', 6);
    }
}
function _4Button(){
    if(activeButtonId == 'div.button4'){
        contentHide();
    } else if(activeButtonId != false){
        contentHide();
        contentShow('div.button4', 1);
    }  else if(activeButtonId == false){
        contentShow('div.button4', 1);
    }
}
function _5Button(){
    if(activeButtonId == 'div.button5'){
        contentHide();
    } else if(activeButtonId != false){
        contentHide();
        contentShow('div.button5', 6);
    }  else if(activeButtonId == false){
        contentShow('div.button5', 6);
    }
}
function _6Button(){
    if(activeButtonId == 'div.button6'){
        contentHide();
    } else if(activeButtonId != false){
        contentHide();
        contentShow('div.button6', 3);
    }  else if(activeButtonId == false){
        contentShow('div.button6', 3);
    }
}
function contentShow(id, quantity){
    for(var i = 0; i < quantity; i++){
        //document.querySelectorAll(id)[i].classList.remove('hidden-animation');
        document.querySelectorAll(id)[i].classList.remove('hidden');  
        document.querySelectorAll(id)[i].classList.add('active-animation');
    }
    var string = id.split('.')
    document.querySelector('#' + string[1]).classList.add('afterclick');
    document.querySelector('#' + string[1]).classList.remove('not-active');
    activeButtonId = id; activeButtonsQuantity = quantity;
}
function contentHide(){
    for(var i = 0; i < activeButtonsQuantity; i++){
        //document.querySelectorAll(activeButtonId)[i].classList.add('hidden-animation');
        document.querySelectorAll(activeButtonId)[i].classList.add('hidden'); 
        document.querySelectorAll(activeButtonId)[i].classList.remove('active-animation');
    }
    document.querySelector('div.afterclick').classList.add('not-active');
    document.querySelector('div.afterclick').classList.remove('afterclick');
    activeButtonId = false; activeButtonsQuantity = 0;
}

var button1 = document.querySelector('#button1'); button1.onclick = _1Button;
var button2 = document.querySelector('#button2'); button2.onclick = _2Button;
var button3 = document.querySelector('#button3'); button3.onclick = _3Button;
var button4 = document.querySelector('#button4'); button4.onclick = _4Button;
var button5 = document.querySelector('#button5'); button5.onclick = _5Button;
var button6 = document.querySelector('#button6'); button6.onclick = _6Button;