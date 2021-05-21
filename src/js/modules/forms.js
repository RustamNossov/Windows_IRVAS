import {postData} from '../services/services';
import {popupClose} from './popup';

export function forms(formSelector, popup_engineer) {

    const forms = document.querySelectorAll(formSelector),
          message = {
              loading: 'assets/img/form/spinner.svg',
              success: 'Спасибо! Скоро мы с вами свяжемся.',
              failure: 'Что-то пошло не так. Попробуйте позже.'
          };
        let flag = 0;

    forms.forEach(element => {
        bindPostData(element);
    });
   


    function bindPostData(form) {
        form.addEventListener( 'submit', (e) => {
            e.preventDefault();
            flag = 1;
            if (!form.querySelector('input[name="user_phone"]').classList.contains('notADigit')) {

                    let statusMessage = document.createElement('img');

                    statusMessage.classList.add('status');
                    statusMessage.src = message.loading;
                    statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                    `;
                    form.querySelector('.form_notice').insertAdjacentElement('afterend', statusMessage);

                    const formData = new FormData(form);

                    
                    let object = {};
                    if (popup_engineer === document.querySelector('.popup_calc_end')) {
                        formData.forEach(function(value, key){
                            object[key]= value;
                        });
                        object.balconyType = localStorage.getItem('balconyType');
                        object.balconyShapeType = localStorage.getItem('balconyShapeType');
                        object.dataSlickIndex = localStorage.getItem('dataSlickIndex');
                        object.viewType = localStorage.getItem('viewType');
                        object.height = localStorage.getItem('height');
                        object.wight = localStorage.getItem('wight');

                    } else {
                        formData.forEach(function(value, key){
                            object[key]= value;
                        });
                    }


                    


                    postData('assets/server.php', object)
                    .then( data => {
                        statusMessage.remove();
                        if (data.status == 200) {
                            thanksModal(message.success, popup_engineer);
                        } else {
                            thanksModal(message.failure, popup_engineer);
                        }
                    })
                    .catch(()=> {
                        thanksModal(message.failure, popup_engineer);
                        form.reset();
                        statusMessage.remove();
                    })
                    .finally(() => {
                        form.reset();
                   });

            }


        });
    }

    

}

function thanksModal(message, popup_engineer) {

    popupClose(popup_engineer);

    const thanksModal = document.createElement('div');
    
    thanksModal.classList.add('messagePopup');
    thanksModal.innerHTML = `
        <div class="popup_dialog">
            <div class="popup_content text-center">
                <div class="popup_message">
                    <h2>${message}</h2>
                </div>
            </div>
        </div>
        `;
    thanksModal.querySelector('.popup_content').style.cssText = 'border-radius: 1rem; padding: 0px 20px; border: 1.5px solid #ededed;';

    document.querySelector('script').insertAdjacentElement('beforebegin', thanksModal);

    setTimeout( () => {
        thanksModal.remove();
    }, 2000);
}