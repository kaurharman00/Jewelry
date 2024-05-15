var today = new Date();
var offerDate = new Date();

offerDate.setDate(today.getDate() + 2);

let timer = document.querySelectorAll('.timer');

function timeDown(){
    let closeDate = new Date(offerDate);
    let todayDate = new Date();

    let timeLeft = (closeDate - todayDate)/1000;

    let getDay = (Math.floor(timeLeft / 3600 / 24));
    let getHour = (Math.floor(timeLeft / 3600)%24);
    let getMin = (Math.floor(timeLeft/60)%60);
    let getSec = (Math.floor(timeLeft)%60);

    timer[0].textContent = getDay;
    timer[1].textContent = getHour;
    timer[2].textContent = getMin;
    timer[3].textContent = getSec;
}

setInterval(timeDown, 1000);

function changeOfferBtn(x){
    x.style.color = 'rgb(112, 110, 110)';
    x.style.border = '0.2rem solid rgb(112, 110, 110)';
    x.style.background = '#eee';
}

function normalOfferBtn(x){
    x.style.color ='white';
    x.style.background = 'rgb(112, 110, 110)';
}

function changeCatBtn(x){
    x.style.color ='white';
    x.style.border = 'none';
    x.style.background = 'rgb(112, 110, 110)';
}

function normalCatBtn(x){
    x.style.color = 'black';
    x.style.border = '0.2rem solid black';
    x.style.background = 'none';
}

