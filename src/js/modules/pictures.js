export function pictureSizeChanging(pictureSrc) {

    const popupPicture = document.createElement('div'),
            picture = document.createElement('img');
    
    popupPicture.style.cssText = `
        display: inline-block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.5);
    `;
    popupPicture.classList.add('popup_picture');

    picture.src = pictureSrc;
    picture.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%)
    `;
    //popupPicture.insertAdjacentElement('beforeend', picture);

    document.querySelector('script').insertAdjacentElement('beforebegin', popupPicture);

    const popupPictureSelector = document.querySelector('.popup_picture');

    popupPictureSelector.insertAdjacentElement('beforeend', picture);

    popupPictureSelector.addEventListener( 'click', (e)=> {
        if (e.target === popupPictureSelector) {
            popupPictureSelector.remove();
        }
    })



}