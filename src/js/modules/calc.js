import {redIfNotDigit} from './ifDigits';
import {calcProfile} from './calcProfile';

 export function calc() { 
  
        const calculateBtn = document.querySelectorAll('.glazing_price_btn'),
            popupCulc = document.querySelector('.popup_calc'),
            balkonyIcon = document.querySelectorAll('.balcon_icons_img'),
            bigImg = document.querySelectorAll('.big_img img'),
            close = popupCulc.querySelector('.popup_calc_close'),
            nextBtn = popupCulc.querySelector('.popup_calc_button'),
            width = document.querySelector('#width'),
            height = document.querySelector('#height');


// Открытие окна калькулятора
        calculateBtn.forEach( btn => {
            btn.addEventListener( 'click', () => {
                popupCulc.style.display = 'inline-block';
                //let iconType = 'Тип1';
                bigImg[0].style.display = 'inline-block';
                removeClass(balkonyIcon, 'do_image_more');
                addClass(balkonyIcon[0], 'do_image_more');
                //localStorage.setItem('balconyType', btn.getAttribute('balcony-type')) ;
                localStorage.setItem('balconyShapeType', 'Тип1');
                width.value = '';
                height.value ='';
            });
        });


// выбор формы балкона
        balkonyIcon.forEach( icon => {
            icon.addEventListener( 'click', ()=> {
                removeClass(balkonyIcon, 'do_image_more');
                addClass(icon, 'do_image_more');

                bigImg.forEach( imgItem => {
                    if (icon.querySelector('img').getAttribute('alt') === imgItem.getAttribute('alt')) {
                        imgItem.style.display = 'inline-block';
                    } else {
                        imgItem.style.display = 'none';
                    }
                });

                localStorage.setItem('balconyShapeType', icon.querySelector('img').getAttribute('alt'));
            });
            

        });
        
        close.addEventListener('click', () => {
            culcClose(popupCulc, bigImg);
        });
        
        popupCulc.addEventListener('click', (e)=> {
            if (e.target == popupCulc) {
                culcClose(popupCulc, bigImg);
            }
        });

// проверка введенных значений в поля ширина и высота   
    redIfNotDigit(width);
    redIfNotDigit(height);

// при нажатии кнопки Далее
    nextBtn.addEventListener('click', () => {
        if ( !(width.classList.contains('notADigit') || height.classList.contains('notADigit')) &&  width.value && height.value) {
            localStorage.setItem('wight', width.value);
            localStorage.setItem('height', height.value);
            popupCulc.style.display = 'none';
            calcProfile(document.querySelector('.popup_calc_profile'));
            bigImg.forEach( imgItem => {
                imgItem.style.display = 'none';
            });
            
        }
    });
}       

export function removeClass(itemList, className) {
    itemList.forEach( item => {
        item.classList.remove(className);
    });
}

function addClass(item, className) {
    item.classList.add(className);
}

export function culcClose(calc, bigImg) {
    
    bigImg.forEach( imgItem => {
        imgItem.style.display = 'none';
    });
    calc.style.display = 'none';
}


