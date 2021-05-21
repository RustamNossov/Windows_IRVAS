import {popupCalcEnd} from './popupCalcEnd';


export function calcProfile(popupCalcProfile ) {
    popupCalcProfile.style.display = 'inline-block';

    const viewSelect = document.querySelector('#view_type'),
          cold = document.querySelector('#cold'),
          warm = document.querySelector('#warm'),
          CalcEnd = document.querySelector('.popup_calc_end'),
          nextBtn = document.querySelector('.popup_calc_profile_button');
   
          
// предустановка флага типа профиля

function coldBalcony() {
    warm.style.background = '';
    cold.style.background = 'url(assets/img/modal_calc/check.png) center center no-repeat';
    localStorage.setItem('balconyType', cold.id) ;
}

function warmBalcony() {
    cold.style.background = '';
    warm.style.background = 'url(assets/img/modal_calc/check_warm.png) center center no-repeat';
    localStorage.setItem('balconyType', warm.id) ;
}

    if (localStorage.getItem('balconyType') === 'warm') {
        warmBalcony();
    } else {
        coldBalcony();
    }

// переключения флага вида профиля
    cold.addEventListener( 'click', () => {
        if (!cold.style.background) {
            coldBalcony();
        } 
    });

    warm.addEventListener( 'click',  () => {
        if (!warm.style.background) {
            warmBalcony();
        } 
    });
    

    //сохранение типа остекленения в localStorage
    localStorage.setItem('viewType', document.querySelector('#view_type').value);

    // запись изменения типа остекленения
    viewSelect.addEventListener('change', () => {
        localStorage.setItem('viewType', document.querySelector('#view_type').value);
    });
    //закрытие окна 
    const close = document.querySelector('.popup_calc_profile_close');

    close.addEventListener('click', () => {
        calcProfileClose(popupCalcProfile);
    });
    
    popupCalcProfile.addEventListener('click', (e)=> {
        if (e.target == popupCalcProfile) {
            calcProfileClose(popupCalcProfile);
        }
    });

    //при нажатиина кнопку Далее
    nextBtn.addEventListener('click', ()=> {
        calcProfileClose(popupCalcProfile);
        popupCalcEnd(CalcEnd);
        

    });

}



export function calcProfileClose(popup) {
    popup.style.display = 'none';
}