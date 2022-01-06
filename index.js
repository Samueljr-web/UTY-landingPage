const menuBar = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const totop = document.querySelector('.totop');

isOpen = false;
menuBar.addEventListener('click', () => {
    menu.classList.toggle('openMenu')
    if( !isOpen){
        menuBar.classList.add('open');
        isOpen = true;
    }else{
        menuBar.classList.remove('open');
        isOpen = false;
    }
});

window.onscroll = () => {scroll()};
function scroll(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        totop.style.opacity = "1";
        totop.style.display = "block";
    }else {
        totop.style.opacity= "0";
        totop.style.display = "none";
    }
}

totop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})