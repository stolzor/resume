function burgerMenu() {
    let menu = document.querySelector(".burger-menu");
    let button = document.querySelector(".burger-menu__button");
    // let links = document.querySelector(".burger-menu__link");
    let overlay = document.querySelector(".sidebar__adaptiv__small");

	// console.log(menu, button, links, overlay);
    button.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });
    // [].forEach.call(links, function (el) {
    //     el.addEventListener("click", () => toggleMenu());
    // });
    overlay.addEventListener("click", (e) => {
        // e.preventDefault();
        toggleMenu();
    });
	
	console.log(overlay)

    function toggleMenu() {
        menu.classList.toggle("burger-menu_active");
        if (menu.classList.contains("burger-menu_active")) {
            document.body.style.overflow = "hidden";
			overlay.style.left = '0';
        } else {
            document.body.style.overflow = "visible";
			overlay.style.left = '-1000%';

        }
    }
}
burgerMenu();
