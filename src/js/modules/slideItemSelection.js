export function activityClassSwitch(slideItem) {
    const glazingContent = document.querySelectorAll('.glazing_content');

    slideItem.forEach( item => {
        item.addEventListener( 'click', (e) => {
            activeClassRemove(slideItem, 'active');
            item.querySelector('a').classList.add('active');
            localStorage.setItem('dataSlickIndex', item.parentNode.parentNode.getAttribute('data-slick-index')) ;
            //console.log(e.target.parentNode.parentNode.parentNode.getAttribute('data-slick-index'));


            glazingContent.forEach( item => {
                item.style.display = 'none';
            });
            glazingContent[e.target.parentNode.parentNode.parentNode.getAttribute('data-slick-index')].style.display = 'block';


        });
    });
}

function activeClassRemove(itemsCollection, className) {
    itemsCollection.forEach( item => {
        item.querySelector('a').classList.remove(className);
    });
}
