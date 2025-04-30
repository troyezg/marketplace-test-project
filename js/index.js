try {
window.addEventListener('scroll', () => {
    let Header = document.getElementById("header");
    let HeaderSection = document.getElementById("header-section");
    if (window.innerWidth >= 769) {
        if (window.scrollY < 100) {
            Header.className = "header-wrapper";
            HeaderSection.className = "header-section header-wrapper";
        } else {
            Header.classList.add("scrolled-active");
            HeaderSection.classList.add("scrolled-active");
        }
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

function MobilePopup() {
        const mobilePopupHtml = `        <div class="mobile-popup__info-block">
            <div class="mobile-popup__info-block__location-time">
                <div class="mobile-popup__info-line">
                    <img src="./images/location-icon.svg" class="mobile-popup__icon" alt="Location icon" />
                    <p class="mobile-popup__text hover-animation">г.Москва</p>
                </div>
                <div class="mobile-popup__info-line">
                    <img src="./images/time-icon.svg" class="mobile-popup__icon" alt="Time icon" />
                    <p class="mobile-popup__text hover-animation">Ежедневно&nbsp;&nbsp;9:00 — 21:00</p>
                </div>
            </div>
            <div class="mobile-popup__info-block__socials">
                <button class="socials__button">
                    <svg class="socials__button__icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4_1100)">
                        <path d="M19.6082 1.63862C19.45 1.49378 19.256 1.39369 19.0462 1.34862C18.8365 1.30355 18.6185 1.31514 18.4147 1.38218L0.829223 7.17909C0.349965 7.33706 0.0249649 7.76487 0.001254 8.2689C-0.0224179 8.77296 0.260981 9.2294 0.723246 9.43171L5.07227 11.3345L6.38442 17.4203C6.43891 17.6731 6.56723 17.8983 6.83907 17.9675C7.11403 18.0376 7.30828 17.8873 7.51344 17.7337L10.7408 15.3171L14.5138 18.4046C14.7336 18.5845 15.0022 18.6783 15.276 18.6783C15.4087 18.6782 15.5405 18.6563 15.6661 18.6136C16.0632 18.4789 16.3576 18.1548 16.4536 17.7467L19.9679 2.80519C20.0169 2.59632 20.0094 2.37818 19.9462 2.17316C19.883 1.96815 19.7663 1.78365 19.6082 1.63862ZM7.79457 12.4249C7.79243 12.43 7.79032 12.4357 7.78832 12.4426L7.06082 14.9843L6.24895 11.2189L11.8316 8.1171L7.92848 12.1983C7.86727 12.2627 7.82148 12.3402 7.79457 12.4249ZM8.02547 15.8829L8.3559 14.7284L8.67196 13.6241L9.80442 14.5508L8.02547 15.8829ZM18.8244 2.5362L15.3102 17.4777C15.3084 17.4851 15.3061 17.4953 15.2889 17.5012C15.2718 17.5069 15.2636 17.5003 15.2577 17.4955L11.1291 14.1171L11.1288 14.1168L9.21598 12.5515L15.3614 6.12577C15.4585 6.02421 15.516 5.8912 15.5234 5.75087C15.5309 5.61054 15.4877 5.4722 15.4018 5.36097C15.316 5.24972 15.1931 5.17295 15.0554 5.14461C14.9178 5.11626 14.7745 5.13821 14.6517 5.20648L5.55203 10.2623L1.19411 8.35554C1.18082 8.34976 1.17352 8.34651 1.17457 8.32405C1.17563 8.30167 1.18321 8.29913 1.19696 8.2946L18.7824 2.49773C18.7909 2.49495 18.8005 2.49175 18.8147 2.50464C18.8288 2.51761 18.8265 2.52745 18.8244 2.5362Z" fill="currentColor"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4_1100">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>                        
                </button>
                <button class="socials__button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4_1095)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7747 2.72484C15.0205 0.968642 12.6877 0.00102539 10.2023 0C5.08112 0 0.913171 4.16783 0.911121 9.29042C0.910417 10.928 1.33818 12.5265 2.15129 13.9355L0.833191 18.75L5.75861 17.4579C7.11576 18.1983 8.64368 18.5884 10.1985 18.5889H10.2025C15.3231 18.5889 19.4915 14.4207 19.4934 9.29786C19.4945 6.81518 18.529 4.48096 16.7747 2.72484ZM10.2023 17.0197H10.1991C8.81348 17.0191 7.45449 16.6468 6.26864 15.9433L5.9868 15.7759L3.06397 16.5426L3.84409 13.6929L3.6604 13.4008C2.88737 12.1712 2.47915 10.7501 2.47985 9.29097C2.48146 5.0332 5.94582 1.5692 10.2054 1.5692C12.2681 1.56987 14.2071 2.37416 15.665 3.83385C17.123 5.29353 17.9255 7.23378 17.9248 9.29727C17.923 13.5554 14.4589 17.0197 10.2023 17.0197ZM14.4382 11.236C14.2062 11.1197 13.0647 10.5583 12.8518 10.4807C12.6392 10.4032 12.4843 10.3646 12.3297 10.597C12.1748 10.8293 11.73 11.3523 11.5945 11.5071C11.459 11.6621 11.3237 11.6815 11.0915 11.5653C10.8593 11.4491 10.1113 11.2039 9.22454 10.413C8.53446 9.79737 8.06858 9.03714 7.93308 8.80485C7.79782 8.57229 7.93191 8.45877 8.03492 8.33103C8.28622 8.01896 8.53788 7.69177 8.61526 7.53694C8.69272 7.38196 8.65393 7.24637 8.5958 7.13021C8.53788 7.01405 8.07362 5.87135 7.8802 5.40638C7.69162 4.95389 7.50037 5.01498 7.35778 5.00792C7.22251 5.00115 7.06768 4.99977 6.91285 4.99977C6.7581 4.99977 6.50656 5.05778 6.29372 5.29034C6.08096 5.52278 5.48131 6.08434 5.48131 7.22704C5.48131 8.36973 6.31317 9.47361 6.42921 9.62856C6.54523 9.78354 8.06629 12.1284 10.395 13.1339C10.9489 13.3733 11.3813 13.516 11.7186 13.623C12.2747 13.7997 12.7807 13.7748 13.1808 13.715C13.6268 13.6483 14.5542 13.1534 14.7478 12.6111C14.9412 12.0688 14.9412 11.604 14.8831 11.5071C14.8252 11.4103 14.6703 11.3523 14.4382 11.236Z" fill="currentColor"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4_1095">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>                                          
                </button>
            </div>
        </div>
        <div class="mobile-popup__buttons-wrapper">
            <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Каталог')">
                <span class="buttons-wrapper__left-wrapper">
                    <img src="./images/menu-small-icon.png" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
                    <span class="buttons-wrapper__left-wrapper__text">Каталог</span>
                </span>
                <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                                     
            </button>
            <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Акции')">
                <span class="buttons-wrapper__left-wrapper">
                    <img src="./images/fire-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
                    <span class="buttons-wrapper__left-wrapper__text">Акции</span>
                </span>
                <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                                     
            </button>
            <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Горячее предложение')">
                <span class="buttons-wrapper__left-wrapper">
                    <img src="./images/lighting-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
                    <span class="buttons-wrapper__left-wrapper__text">Горячее предложение</span>
                </span>
                <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                                     
            </button>
            <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Подарочные наборы')">
                <span class="buttons-wrapper__left-wrapper">
                    <img src="./images/small-chest-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
                    <span class="buttons-wrapper__left-wrapper__text">Подарочные наборы</span>
                </span>
                <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                                     
            </button>
            <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('События')">
                <span class="buttons-wrapper__left-wrapper">
                    <img src="./images/scroll-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
                    <span class="buttons-wrapper__left-wrapper__text">События</span>
                </span>
                <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                                     
            </button>
            <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Наши бренды')">
                <span class="buttons-wrapper__left-wrapper">
                    <img src="./images/troll-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
                    <span class="buttons-wrapper__left-wrapper__text">Наши бренды</span>
                </span>
                <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                                     
            </button>
        </div>
        <button class="mobile-popup__pc-button">
            <span class="pc-button__create-pc-wrapper">
                <svg class="create-pc-wrapper__plus-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                    
                <span class="create-pc-wrapper__text">Собрать компьютер</span>
            </span>
        </button>
        <nav class="mobile-popup__navigation">
            <div class="mobile-popup__navigation__container">
                <p class="mobile-popup__navigation__text">Доставка</p>
            </div>
            <div class="mobile-popup__navigation__container">
                <p class="mobile-popup__navigation__text">Оплата</p>
            </div>
            <div class="mobile-popup__navigation__container">
                <p class="mobile-popup__navigation__text">Контакты</p>
            </div>
        </nav>
    `;
    let popup = document.getElementById('mobile-popup');
    if (popup.style.display == 'flex') {
        popup.style.display = 'none';
        document.body.style.overflow = 'visible';
        popup.style.overflow = 'visible';
        popup.innerHTML = mobilePopupHtml;
        document.getElementById("mobile-menu-button").style.background = "#4888FF";
        document.getElementById("mobile-burger-menu").style.display = "block";
        document.getElementById("mobile-burger-cross").style.display = "none";
    } else {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        popup.style.overflow = 'scroll';
        document.getElementById("mobile-menu-button").style.background = "#E8E8E8";
        document.getElementById("mobile-burger-menu").style.display = "none";
        document.getElementById("mobile-burger-cross").style.display = "block";
    }

}

function MobileOpenCategorie(name) {
    let title = '<div class="mobile-popup__title-wrapper"><svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);"><path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg> <p class="mobile-popup__title">' + name + '</p></div>'
    let popupButtonsHtml = `
  <div class="mobile-popup__buttons-wrapper">
    <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Каталог')">
      <span class="buttons-wrapper__left-wrapper">
        <img src="./images/menu-small-icon.png" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
        <span class="buttons-wrapper__left-wrapper__text">Каталог</span>
      </span>
      <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Акции')">
      <span class="buttons-wrapper__left-wrapper">
        <img src="./images/fire-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
        <span class="buttons-wrapper__left-wrapper__text">Акции</span>
      </span>
      <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Горячее предложение')">
      <span class="buttons-wrapper__left-wrapper">
        <img src="./images/lighting-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
        <span class="buttons-wrapper__left-wrapper__text">Горячее предложение</span>
      </span>
      <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Подарочные наборы')">
      <span class="buttons-wrapper__left-wrapper">
        <img src="./images/small-chest-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
        <span class="buttons-wrapper__left-wrapper__text">Подарочные наборы</span>
      </span>
      <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('События')">
      <span class="buttons-wrapper__left-wrapper">
        <img src="./images/scroll-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
        <span class="buttons-wrapper__left-wrapper__text">События</span>
      </span>
      <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="mobile-popup__buttons-wrapper__button" onclick="MobileOpenCategorie('Наши бренды')">
      <span class="buttons-wrapper__left-wrapper">
        <img src="./images/troll-icon.svg" class="buttons-wrapper__left-wrapper__icon" alt="Small menu icon" />
        <span class="buttons-wrapper__left-wrapper__text">Наши бренды</span>
      </span>
      <svg class="buttons-wrapper__button__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
    `;

    document.getElementById('mobile-popup').innerHTML = '';
    document.getElementById('mobile-popup').innerHTML += title;
    document.getElementById('mobile-popup').innerHTML += popupButtonsHtml;
}