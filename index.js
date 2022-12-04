/*Circles Spinner effect with 4 seconds after that main page will load*/
/*Global window object*/
window.onload = () =>{
    setTimeout(()=>{
        document.querySelector("body").classList.add("display")
    },4000);
}

/*Toggle effect on menu bar*/
document.querySelector(".hamburger-menu").
addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("change");
});
/*end of Toggle effect*/

/*scrollup arrow button, when we click it moves to top of the secction*/
document.querySelector("scroll-btn").addEventListener("click", ()=>{
    setTimeout(()=>{
    document.querySelector("html").style.scrollBehavior = "smooth";
    
        document.querySelector("html").style.scrollBehavior = "unset";
    },2000)
});