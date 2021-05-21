export function timer({year, month, date, hour, minutes, seconds, timerClaass}) {
    
    const deadLine = new Date(year, month-1, date, hour, minutes, seconds),
          timer = document.querySelector(timerClaass),
          daysField = timer.querySelector('#days'),
          hoursField = timer.querySelector('#hours'),
          minutesField = timer.querySelector('#minutes'),
          secondsField = timer.querySelector('#seconds');

    let betweenDateSec = (deadLine - new Date())/1000;
    if (betweenDateSec > 0) {
        setInterval(()=>{
            betweenDateSec = (deadLine - new Date())/1000;
            let days = Math.floor(betweenDateSec / 86400),
                hours = Math.floor( ( (betweenDateSec - days * 86400) / 3600 ) ),
                minutes = Math.floor( ( (betweenDateSec - days * 86400 - hours * 3600) / 60 ) ),
                sec = Math.floor( (betweenDateSec - days * 86400 - hours * 3600 - minutes * 60) );

            addingZero(days, daysField);
            addingZero(hours, hoursField);
            addingZero(minutes, minutesField);
            addingZero(sec, secondsField);
        }, 1000);
    }
    
    
function addingZero(timeAmount, field) {
    if (timeAmount >= 10) {
        field.innerText = timeAmount;
    } else {
        field.innerText = '0'+timeAmount;
    }
}


}