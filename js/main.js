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
    document.body.classList.toggle("stop-scrolling");
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
            slideIndex = 0;
            console.log(screenshots);
            popupToggle();
            popupSlideshow();
        }

    });

    closeBtn.addEventListener('click',()=>{
        popupToggle();
    });

    function popupToggle(){
        popup.classList.toggle("open");
        bodyScrollingToggle()
    }
    function popupSlideshow(){
        const imgscr = screenshots[slideIndex];
    }

})();