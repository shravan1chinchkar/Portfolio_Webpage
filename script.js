
let aboutlink=document.getElementsByClassName("about-link");
let aboutnavcontent=document.getElementsByClassName("aboutnavcontent");

function openContent(tabname){
    for (const aboutlinks of aboutlink) {
        aboutlinks.classList.remove("active-link")
    }
    for (const aboutnavcontents of aboutnavcontent) {
        aboutnavcontents.classList.remove("active-content")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content"); 
}

let sidemeu=document.getElementById("sidemenu");

function openMenu(){
    sidemeu.style.right="0";
}

function closeMenu(){
    sidemeu.style.right="-40vw";
}


let prjcard=document.getElementById("prjcardrow2");
let seemmore=document.getElementById("seemore");
let seeless=document.getElementById("seeless");



function showMore(){
    prjcard.classList.toggle("projectcardrow2");
    seemmore.classList.add("seemorebutton");
    seeless.classList.remove("seelessbutton");
}

function showLess(){
    prjcard.classList.toggle("projectcardrow2");
    seemmore.classList.remove("seemorebutton");
    seeless.classList.add("seelessbutton");

}

