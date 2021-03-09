/*-------------- toggle style switch ----------------*/
const styleSwitcherToogler = document.querySelector(".style-switcher-toogler");
styleSwitcherToogler.addEventListener("click",()=>{
   document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


/*--------------------theme colors ----------------------*/
const alternateStyles  = document.querySelectorAll(".alternate-style");
let loadColor = localStorage.getItem("color")
if(loadColor !== null){
    alternateStyles.forEach((style)=>{
        if(loadColor === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}

function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
            localStorage.setItem("color",color);
        }else{
            style.setAttribute("disabled","true");
        }
    })
}



/*----------------theme light and dark mode----------------*/
const navMenu = document.querySelector(".nav-menu"),
closeNavBtn = navMenu.querySelector(".close-nav-menu");
closeNavBtn.style.color = "#eff0f4";
let theme = localStorage.getItem("theme");
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        localStorage.setItem("theme","light");
        closeNavBtn.style.color = "#222327";
        
    }else{
        document.body.classList.add("dark");
        localStorage.setItem("theme","dark");
        closeNavBtn.style.color = "#eff0f4";
    }
})

window.addEventListener("load", ()=>{
    if(theme !== null){
        if(theme === "light"){
            dayNight.querySelector("i").classList.add("fa-moon");
            document.body.classList.remove("dark");
            closeNavBtn.style.color = "#222327";
        }else{
            document.body.classList.add("dark");
            dayNight.querySelector("i").classList.add("fa-sun");
            closeNavBtn.style.color = "#eff0f4";
            
        }
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
        closeNavBtn.style.color = "#222327";
    }

})
