'use strict';

import "./slider";

import {popupRevial} from './modules/popup';

import {forms} from './modules/forms';

import {redIfNotDigit} from './modules/ifDigits';

import {activityClassSwitch} from './modules/slideItemSelection';

import {calc} from './modules/calc';

import {tabs} from './modules/tabs';

import {timer} from './modules/timer';

import {pictureSizeChanging} from './modules/pictures';

import {openBigPicture} from './modules/openBigPicture';


// запуск таймера

export let timerPopup = setTimeout( ()=>{
    document.querySelector('.popup').style.display = 'inline-block';
    
}, 60000);

window.addEventListener('DOMContentLoaded', () => {
    


    // открытие всплывающего окна  ТЗ-1

    const popupEngineer = document.querySelector('.popup_engineer'),
        btnPopupEngineer = document.querySelector('.popup_engineer_btn'),
        popupClose = popupEngineer.querySelector('.popup_close');

    popupRevial(popupEngineer, btnPopupEngineer, popupClose);



    // открытие окна Обратный звонок ТЗ-2

    const popupCallbtn = document.querySelectorAll('.phone_link'),
        popupCall = document.querySelector('.popup'),
        popupCallClose = popupCall.querySelector('.popup_close'); 

    popupRevial(popupCall, popupCallbtn, popupCallClose);


// проверка что пользователь вводит цифры
const phoneNumberField = document.querySelectorAll('input[name="user_phone"]');
redIfNotDigit(phoneNumberField);


// TЗ-3-4 

forms('.form', popupEngineer);


// ТЗ-5 изменение стиля элементов слайдера
const slideItem = document.querySelectorAll('.glazing_block');
activityClassSwitch(slideItem);


//ТЗ-6
calc();

//ТЗ-7 переключение табов
const tabsList = document.querySelectorAll('.no_click');

tabs(tabsList);

// реализация таймера

timer({
    year: 2022,
     month: 8, 
     date: 25, 
     hour: 23, 
     minutes: 45, 
     seconds: 0,
     timerClaass: '.timer1'
});

//   увеличение превью
//pictureSizeChanging('http://192.168.64.5/windows/dist/assets/img/our_works/big_img/1.png');

const previewCollection = document.querySelectorAll('.preview');
openBigPicture(previewCollection);




//-------------
});




