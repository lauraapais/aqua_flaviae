 /*gsap.registerPlugin(Draggable);

    Draggable.create(".newsGeneral", {
        type: "x",
        bounds: ".newsDiv",
        inertia: true,
        edgeResistance: 0.65
    });

    const newsContainer = document.querySelector(".newsGeneral");
    const nextArrow = document.getElementById("nextArrowNews");
    const backArrow = document.getElementById("backArrowNews");
    const newsItemWidth = document.querySelector(".news").offsetWidth;
    const containerWidth = document.querySelector(".newsDiv").offsetWidth;

    nextArrow.addEventListener("click", function () {
        scrollNews(newsItemWidth, containerWidth, "forward");
    });

    backArrow.addEventListener("click", function () {
        scrollNews(newsItemWidth, containerWidth, "backward");
    });

    function scrollNews(itemWidth, containerWidth, direction) {
        let currentX = gsap.getProperty(newsContainer, "x");
        let maxScroll = -newsContainer.scrollWidth + containerWidth;
        let scrollDistance = direction === "forward" ? -itemWidth : itemWidth;

        let newX = currentX + scrollDistance;
        newX = newX < maxScroll ? maxScroll : newX;
        newX = newX > 0 ? 0 : newX;

        gsap.to(newsContainer, {
            x: newX,
            duration: 0.5,
            ease: "power2.inOut"
        });
    }






    Draggable.create(".agendaGeneral", {
        type: "x",
        bounds: ".newsDiv",
        inertia: true,
        edgeResistance: 0.65
    });

    const agendaContainer = document.querySelector(".agendaGeneral");
    const nextAgenda = document.getElementById("nextArrowAgenda");
    const backAgenda = document.getElementById("backArrowAgenda");
    const agendaItemWidth = document.querySelector(".agenda").offsetWidth;
    const containerAgendaWidth = document.querySelector(".agendaDiv").offsetWidth;
*/
