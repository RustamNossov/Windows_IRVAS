export function redIfNotDigit(inputSelector) {
    if (inputSelector.length > 1) {
        inputSelector.forEach( (element) => {
            element.addEventListener('input', ()=>{
                if (/\D/.test(element.value)) {
                    element.classList.add('notADigit');
                } else {
                    element.classList.remove('notADigit');
                }
            });
        });
    } else {
        inputSelector.addEventListener('input', ()=>{
            if (/\D/.test(inputSelector.value)) {
                inputSelector.classList.add('notADigit');
            } else {
                inputSelector.classList.remove('notADigit');
            }
        });
    }
}