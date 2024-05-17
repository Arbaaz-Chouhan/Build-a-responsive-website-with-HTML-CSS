const navToggle = document.querySelectore(".mobile-nav-toggle");
const primary = document.querySelectore(".primary-navigation");

navToggle.addEventListsener("click", () => {
    primaryNav.hasAttribute("date-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("date-visible");
    primaryHeader.toggleAttribute("data.overlay")
});

const slider = new A11YSlider(document.querySelectore( "slider"), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        480: {
            dots: false,// dots enabled 1280px end up

        },
    },
})  
