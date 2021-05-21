import {timerPopup} from '../main';

export function popupRevial(popup, btn, close) {
   

    if (Object.keys(btn).length == 0) {
        
        popupShowing(popup, btn, close, timerPopup);
        
        
    } else {
        btn.forEach( element => {       
            popupShowing(popup, element, close, timerPopup);
        });
        
    }

    

}

function popupShowing(popup, btn, close, timerPopup) {
    btn.addEventListener('click', () => {
        clearTimeout(timerPopup);
        popup.style.display = 'inline-block';
        
    });


    


    
    close.addEventListener('click', () => {
        popupClose(popup);
    });
    
    popup.addEventListener('click', (e)=> {
        if (e.target == popup) {
            popupClose(popup);
        }
    });
}

function popupClose(popup) {
    popup.style.display = 'none';
    popup.querySelector('.form').reset();
    popup.querySelector('input[name="user_phone"]').classList.remove('notADigit');
}

export {popupClose};