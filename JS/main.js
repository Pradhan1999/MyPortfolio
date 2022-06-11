
// ______________typing animation___________

var typed = new Typed(".typing", {
    strings: ["", "Mechanical Engineer", "", "Web Developer"],
    typeSpeed: 80,
    BackSpeed: 60,
    loop: true
})

// _____preloader______
$(window).on('load', function () {
    setTimeout(function () {
        $("#preloader").fadeOut('slow');
    }, 1500)
})

// _____________aside________________________
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) 
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function ()
        {
            for (let i = 0; i < totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
            for (let j = 0; j < totalNavList; j++)
            {
                if (navList[j].querySelector("a").classList.contains("active"))
                {
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if (window.innerWidth < 1200)
            {
                asideSectionToggleBtn();
            }
        })
    }
    function showSection(element)
    {
        for (let i = 0; i < totalSection; i++) 
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    const navToggleBtn = document.querySelector(".nav-toggle"),
        aside = document.querySelector(".aside");
        navToggleBtn.addEventListener("click", () => 
        {
            asideSectionToggleBtn();
        })

        function asideSectionToggleBtn() 
        {
            aside.classList.toggle("open");
            navToggleBtn.classList.toggle("open");

            for (let i = 0; i < totalSection; i++) 
            {
                allSection[i].classList.toggle("open");
            }
        }
