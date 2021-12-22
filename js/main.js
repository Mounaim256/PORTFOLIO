const links = [...document.querySelectorAll(".links > li > a")];

const addActiveClass = (event) => {
    const activeLink = document.querySelector(".links > li > a.active");
    activeLink.classList.remove("active");
    event.target.classList.add("active");
};

links.forEach(link => {
    link.addEventListener("click",addActiveClass);
});


const menu = document.getElementById("menu");
menu.onclick = (event) => {
    const header = document.querySelector(".header");
    event.target.classList.toggle("fa-times");
    header.classList.toggle("toggle");
}


const scroll = document.getElementById("scroll");

window.onscroll = function() {
    if(this.scrollY > this.innerHeight){
        scroll.classList.remove("d-none");
    }
    else{
        scroll.classList.add("d-none");
    }
}

scroll.onclick = function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}