import {pictureSizeChanging} from './pictures';

export function openBigPicture(previewCollection) {
     
    previewCollection.forEach( preview => {
        //console.log(preview.parentNode);
        
        preview.parentNode.addEventListener( 'click', (e) => {
            e.preventDefault();

            pictureSizeChanging(preview.parentNode.getAttribute('href'));
            //console.log(preview.parentNode.getAttribute('href'));

        });
    });

}