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

    if (document.getElementById("big-popup").style.display == 'flex') {
        document.getElementById("big-popup").style.display = 'none';
        document.getElementById("popup-closer").style.display = 'none';
        document.getElementById('big-popup-items').innerHTML = '';
    }
});

} catch (error) {
    console.error(error);
}

let CurrentButton = 0;
let Events = ' <button class="small-popup__button"><span class="hover-animation">ИгроМИР</span></button><button class="small-popup__button"><span class="hover-animation">Мероприятия</span></button><button class="small-popup__button"><span class="hover-animation">Мастер-классы</span></button>'

function SmallPopUp(button) {
    let ButtonElement = document.getElementById('offer-' + button);
    let position = ButtonElement.getBoundingClientRect();

    if (button) {
        document.getElementById("small-popup").innerHTML = Events;
    }

    const x = position.left + window.scrollX;
    document.getElementById("small-popup").style.left = x + 'px';
    document.getElementById("small-popup").style.display = 'flex';
    document.getElementById("popup-closer").style.display = 'block';
    CurrentButton = button;
}

function ClosePopUps() {
    document.getElementById("small-popup").style.display = 'none';
    document.getElementById("big-popup").style.display = 'none';
    document.getElementById("popup-closer").style.display = 'none';
    document.getElementById('big-popup-items').innerHTML = '';
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

function BigPopUp() {
    let popup = document.getElementById("big-popup");
    if (popup.style.display == 'flex') {
        popup.style.display = 'none';
        document.getElementById("popup-closer").style.display = 'none';
    } else {
        popup.style.display = 'flex';
        document.getElementById("popup-closer").style.display = 'block';
    }
}

function OpenCategorie(id) {
    const ExampleDataOne = `
<div class="items__categories-nested">
  <h3 class="categories-nested__title">Смартфоны</h3>
  <div class="categories-nested__text-wrapper">
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">Apple iPhone&nbsp;<span class="categories-nested__text__amount">123</span></p>
    </div>
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">Смартфоны&nbsp;<span class="categories-nested__text__amount">227</span></p>
      <svg class="stroke-wrapper__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">iPhone 16&nbsp;<span class="categories-nested__text__amount">120</span></p>
    </div>
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">Складные&nbsp;<span class="categories-nested__text__amount">30</span></p>
    </div>
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">realme&nbsp;<span class="categories-nested__text__amount">120</span></p>
    </div>
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">Huawei Mate X6&nbsp;<span class="categories-nested__text__amount">100</span></p>
    </div>
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">Кнопочные&nbsp;<span class="categories-nested__text__amount">23</span></p>
    </div>
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">Домашние&nbsp;<span class="categories-nested__text__amount">17</span></p>
    </div>
    <div class="categories-nested__line-wrapper" onclick="OpenCategorie(2)">
      <p class="categories-nested__text">Samsung&nbsp;<span class="categories-nested__text__amount">27</span></p>
    </div>
  </div>
</div>
`;

const ExampleDataTwo = `
<div class="items__categories-nested">
<h3 class="categories-nested__title">Гаджеты</h3>
<div class="categories-nested__text-wrapper">
    <div class="categories-nested__line-wrapper">
    <p class="categories-nested__text">Смарт-часы&nbsp;<span class="categories-nested__text__amount">15</span></p>
    </div>
    <div class="categories-nested__line-wrapper">
    <p class="categories-nested__text">Смарт-кольца&nbsp;<span class="categories-nested__text__amount">34</span></p>
    </div>
    <div class="categories-nested__line-wrapper">
    <p class="categories-nested__text">Наушники&nbsp;<span class="categories-nested__text__amount">21</span></p>
    </div>
    <div class="categories-nested__line-wrapper">
    <p class="categories-nested__text">Гарнитуры&nbsp;<span class="categories-nested__text__amount">12</span></p>
    </div>
    <div class="categories-nested__line-wrapper">
    <p class="categories-nested__text">Портативное аудио&nbsp;<span class="categories-nested__text__amount">42</span></p>
    </div>
    <div class="categories-nested__line-wrapper">
    <p class="categories-nested__text">Умные гаджеты&nbsp;<span class="categories-nested__text__amount">46</span></p>
    </div>
    <div class="categories-nested__line-wrapper">
    <p class="categories-nested__text">Очки VR&nbsp;<span class="categories-nested__text__amount">49</span></p>
    </div>
    <div class="categories-nested__line-wrapper">
    <p class="categories-nested__text">Для блогеров&nbsp;<span class="categories-nested__text__amount">32</span></p>
    </div>
</div>
</div>
`;

    if (id == 1) {
        document.getElementById('big-popup-items').innerHTML += ExampleDataOne;
    } 

    if (id == 2) {
        document.getElementById('big-popup-items').innerHTML += ExampleDataTwo;
    } 

}