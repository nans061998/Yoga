window.addEventListener('DOMContentLoaded',function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabConten = document.querySelectorAll('.info-tabcontent');
    function hideTabContent(a){
        for (let i = a; i < tabConten.length; i++){
            tabConten[i].classList.remove('show');
            tabConten[i].classList.add('hide');
        }

    }
    hideTabContent(1);

    function showTabContent(b){
        if (tabConten[b].classList.contains('hide')){
            tabConten[b].classList.remove('hide');
            tabConten[b].classList.add('show');
    
     }}

    info.addEventListener('click',function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

//Таймер

let deadline = "2019-10-21";
function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t/(1000*60*60)));

        return{
            'total': t,
            'hours':hours,
            'minutes': minutes,
            'seconds': seconds
        };
    

}

function setClock(id, endtime){
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateclock,1000);

       

    
        function updateclock(){
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
}

setClock('timer',deadline);
    
//Modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');
more.addEventListener('click',function(){
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click',function(){
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

//Form
let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так!"
};

let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    statusMesage = document.createElement('div');
    statusMesage.classList.add('status');

form.addEventListener('submit', function(event){
    event.preventDefault();
    form.appendChild(statusMesage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let formData = new FormData(form);
    request.send(formData);
});




});
