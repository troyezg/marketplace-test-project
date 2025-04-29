try {
window.addEventListener('scroll', () => {
    let Header = document.getElementById("header");
    if (window.scrollY < 100) {
        console.log("Открываем!");
        Header.className = "header-wrapper";
    } else {
        console.log("Прячем!");
        Header.classList.add("scrolled-active");
    }
});

} catch (error) {
    console.error(error);
}
