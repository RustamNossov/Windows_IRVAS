import {calcProfileClose} from './calcProfile';
import {forms} from './forms';

//popup_calc_end
export function popupCalcEnd(popup) {
    popup.style.display = 'inline-block';

    const close = document.querySelector('.popup_calc_end_close'),
          popupForm = popup.querySelector('form');


    popupForm.addEventListener('submit', (e)=> {
        e.preventDefault();

    });

    forms('.form', popup);

    //закрытие окна
    close.addEventListener('click', () => {
        calcProfileClose(popup);
    });
    
    popup.addEventListener('click', (e)=> {
        if (e.target == popup) {
            calcProfileClose(popup);
        }
    });



}

