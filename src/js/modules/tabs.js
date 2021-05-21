import {removeClass} from './calc';

export function tabs(tabList) {

    const typeOfDecoration = document.querySelectorAll('.decoration_type');

    tabList.forEach(tab => {
        
        tab.addEventListener('click', (e)=> {
            removeClass(tabList, 'after_click');
            tab.classList.add('after_click');

            typeOfDecoration.forEach( item => {
                item.style.display = 'none';
                if ( tab.classList.value.includes(item.classList[0]) ) {
                    item.style.display = 'block';
                } 
            });

            
        });
    
    });

    

}



