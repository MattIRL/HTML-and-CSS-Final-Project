
// funtion to load an image url when clicked
function imageClickHandler(imageUrl) {
    window.location.href = imageUrl;
}

// hamburger menu functions //
const hamMenu = document.querySelector(".ham-menu");
                    
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});