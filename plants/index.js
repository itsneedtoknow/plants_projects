// ---------------------------BURGER DROPDOWN--------------
const header__burger = document.querySelector('.header__burger'),
header__menu = document.querySelector('.header__menu'),
burger__container = document.querySelector('.burger__container'),
body = document.querySelector('body'),
overlay = document.querySelector('.overlay')


function burgerActive(){    
        header__burger.classList.toggle('active');
        header__menu.classList.toggle('active');
        burger__container.classList.toggle('active');
        body.classList.toggle('lock');
        overlay.classList.toggle('active');
    }


header__burger.addEventListener('click', burgerActive);

header__menu.addEventListener('click', burgerActive);

overlay.addEventListener('click', burgerActive);


// -------------------------PRICE ACCORDION--------------
const priceItems = Array.from(document.querySelectorAll('.price__item'));
    for (let i = 0; i < priceItems.length; i++){
        priceItems[i].addEventListener('click', function(e){
            e = e.target;
            let content = e.nextElementSibling;
            if(content.classList.contains('active')){
                document.querySelectorAll('.item__content').forEach((el) => {
                    el.classList.remove('active')
                })
            }
            else{
                document.querySelectorAll('.item__content').forEach((el)=>{el.classList.remove('active')});
                content.classList.add('active')
            }
            })  
        
        }

// -------------------SERVICE FILTER BLUR---------------------
const buttons = document.querySelectorAll('.services__header__button'), 
catButtons = document.querySelector('.services__header__buttons'),
    cards = document.querySelectorAll('.service__card'),
    //создаю массив, в котором будут лежать все кнопки (allButtons) и активные кнопки (activeButtons)
        allButtons = [],
        activeButtons= [];
    let blockedButton = '';

        // собрать в один массив все категории-фильтры
        buttons.forEach((btn)=>{
            allButtons.push(btn.dataset.filter)

        // по клику на кнопку проверяю, есть ли категория нажатой кнопки в массиве "активные кнопки"
            btn.addEventListener('click', (e)=>{
                // если есть, убираю
            if(activeButtons.includes(e.target.dataset.filter)){
                activeButtons.splice(activeButtons.indexOf(e.target.dataset.filter), 1)
            }else{
                activeButtons.push(e.target.dataset.filter)
            }
            })
        })
    
    //код для одной категории
    function filter(category, items){
        items.forEach((item)=>{
            const isItemFiltered = !item.classList.contains(category);
            if(isItemFiltered){
                item.classList.add('blur');
               
            }else{
                item.classList.remove('blur')
            }
        })
    }

    function activeButton(e){
        e.target.classList.toggle('active');
    }
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const currentFilter = btn.dataset.filter;
            filter(currentFilter, cards);
            // 
        })

    })

// ---------------------SELECT-CITY---------------
const selectHeader = document.querySelector('.select-city__header'),
    selectContent = document.querySelector('.select-city__content'),
    selectCity = document.querySelectorAll('.select-city__item'),
    activeCity = document.querySelector('.select-city__current'),
    cityCards = document.querySelectorAll('.city__card'),
    cityCard = document.querySelector('.city__card'),
    dropdownWindow = document.querySelector('.contacts__cities'),
    contactsImage = document.querySelector('.contacts__img'),
    contactsHeader = document.querySelector('.contacts__header')
    

// открываю дропдаун
    selectHeader.addEventListener('click', () =>{
        selectContent.classList.toggle('active');        
        cityCard.classList.remove('active');        
    })
 
// кликаю по названию города
    selectCity.forEach((city) => {
        city.addEventListener('click', selectChose);// при клике на название города-оно переносится в дефолтную строку   
        city.addEventListener('click', (e) =>{
            selectContent.classList.remove('active');// по клику на название города выводится карта контактов и скрывается дропдаун   
            contactsHeader.classList.add('active');
            contactsImage.classList.add('disabled');
        })
        city.addEventListener('click', () => {
            const currentFilter = city.dataset.filter;
            filterCity(currentFilter, cityCards);
        })
        dropdownWindow.classList.add('active');
    })
    
    
    // функция переноса названия города в дефолтную строку
    function selectChose(){
        let text = this.innerText;
        currentText = this.closest('.contacts__cities').querySelector('.current__select');
        currentText.innerText = text;
    }

    function filterCity(btnCategory, cards){
        cards.forEach((card)=>{
            const isCardSelected = card.classList.contains(btnCategory);
            if(isCardSelected){
                card.classList.add('active');
            }else{
                card.classList.remove('active')
            }
        })
    }

