// ------------------- about section tab ------------

(()=>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");
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

function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
}

/*--------------------------- portfolio filter and popup -------------------------*/
(()=>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;

    // filter portfolio items
    filterContainer.addEventListener('click',(event)=>{
        if(event.target.classList.contains('filter-item') &&  !event.target.classList.contains("active")){
            // deactivate existing active
            filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // active new tab-item
            event.target.classList.add("active","outer-shadow")
            const target = event.target.getAttribute("data-target");
            // console.log(target);
            portfolioItems.forEach((item,i)=>{
                let catagory = item.getAttribute('data-catagory');
                if( catagory === target || target === 'all'){
                    // item.classList.add()
                    item.classList.remove('hide');
                    item.classList.add('show');
                //    console.log(portfolioItems[i],i);
                } 
                else{
                    item.classList.add('hide');
                    item.classList.remove('show');
                }
            })
           
        }
        else{
            console.log('false');
        }
    });

    portfolioItemsContainer.addEventListener('click',(event)=>{
        if(event.target.closest(".portfolio-item-inner")){
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            // console.log(portfolioItem.parentElement.children);
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            // console.log(intemIndex);
            // console.log(portfolioItems[intemIndex]);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            console.log(screenshots);
            // convert screen shots into array
            screenshots = screenshots.split(',');
            if(screenshots.length == 1){
                prevBtn.style.display="none";
                nextBtn.style.display="none";
            }else{
                prevBtn.style.display="block";
                nextBtn.style.display="block";
            }
            slideIndex = 0;
            console.log(screenshots);
            popupToggle();
            popupSlideshow();
            popupDetails();
        }

    });

    closeBtn.addEventListener('click',()=>{
        popupToggle();
        projectDetailsBtn.querySelector("i").classList.add("fa-plus");
        projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
        projectDetailsContainer.classList.remove("active");
        projectDetailsContainer.style.maxHeight = 0;
    });

    function popupToggle(){
        popup.classList.toggle("open");
        bodyScrollingToggle()
    }
    function popupSlideshow(){
        const imgscr = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");

        /*activate loader until the popupImg loaded*/
        popup.querySelector(".pp-loader").classList.add("active")
        popupImg.src = imgscr;
        popupImg.onload = ()=>{
            /*Deactivate loader*/
            popup.querySelector(".pp-loader").classList.remove("active")
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
    }

    nextBtn.addEventListener('click',()=>{
        slideIndex++;
        if(slideIndex === screenshots.length){
            slideIndex = 0;
        }
        popupSlideshow();
    })
    prevBtn.addEventListener('click',()=>{
        slideIndex--;
        if(slideIndex === -1){
            slideIndex = screenshots.length-1;
        }
        popupSlideshow();
    })

    function popupDetails(){
        // if no project detail exist
        if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
            projectDetailsBtn.style.display = "none";
            return;
        }
        projectDetailsBtn.style.display = "block";
        // get the project details portfolio-item-title
        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        popup.querySelector(".pp-project-details").innerHTML = details;
        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
        popup.querySelector(".pp-title h2").innerHTML = title;
        const catagory = portfolioItems[itemIndex].getAttribute("data-catagory");
        popup.querySelector(".pp-project-category").innerHTML = catagory;

    }

    projectDetailsBtn.addEventListener('click',()=>{
        popupDetailsToggle();
        console.log("hit");
    });

    function popupDetailsToggle(){
        if(projectDetailsContainer.classList.contains("active")){
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0;
        }else{
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");
            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
        }
    }

})();