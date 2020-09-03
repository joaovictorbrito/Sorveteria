rellax = new Rellax('.rellax');

function Open(){ 
    var nav = document.querySelector('.menu-mobile')
    nav.classList.add("menu_open");
   
}
function Closed(){
    var nav2 = document.querySelector('.menu-mobile')
    nav2.classList.remove("menu_open");
}
function Passar() {
    var cor = document.querySelector('.git').style.color ='black';
    
}

function Sair() {
    var cor = document.querySelector('.git').style.color ='white'
}

