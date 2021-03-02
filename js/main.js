// ------------------- about section tab ------------

(()=>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");
    console.log("auto invoked");
    tabsContainer.addEventListener('click',(event)=>{
        // if one tab is active then rest of the tabs in about section will be inactive and display none
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // deactivate existing active
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // active new tab-item
            event.target.classList.add("active","outer-shadow")
             // deactivate existing active tab-content
             aboutSection.querySelector(".tab-content.active").classList.remove("active");
            //  activate new tab content
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();