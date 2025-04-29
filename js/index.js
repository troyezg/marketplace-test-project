try {
window.addEventListener('scroll', () => {
    let Header = document.getElementById("header");
    if (window.scrollY < 100) {
        Header.className = "header-wrapper";
    } else {
        Header.classList.add("scrolled-active");
    }

    if (document.getElementById("small-popup").style.display == 'flex') {
        document.getElementById("small-popup").style.display = 'none';
        document.getElementById("popup-closer").style.display = 'none';
    }
});

} catch (error) {
    console.error(error);
}

let CurrentButton = 0;

function SmallPopUp(button) {
    let ButtonElement = document.getElementById('offer-' + button);
    let position = ButtonElement.getBoundingClientRect();

    const x = position.left + window.scrollX;
    document.getElementById("small-popup").style.left = x + 'px';
    document.getElementById("small-popup").style.display = 'flex';
    document.getElementById("popup-closer").style.display = 'block';
    CurrentButton = button;
}

function CloseSmallPopUp() {
    document.getElementById("small-popup").style.display = 'none';
    document.getElementById("popup-closer").style.display = 'none';
}

try {
    window.addEventListener('resize', () => {
        let ButtonElement = document.getElementById('offer-' + CurrentButton);
        let position = ButtonElement.getBoundingClientRect();
        const x = position.left + window.scrollX;
        document.getElementById("small-popup").style.left = x + 'px';
    });
} catch (error) {
    console.error(error);
}