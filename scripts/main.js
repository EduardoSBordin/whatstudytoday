let getBtnModal = document.querySelector('#btnModal');
let linksNavMobileModal = document.querySelector('#linksNavMobileModal');

let displayJS = document.querySelector('#displayJS');
let displayPhp = document.querySelector('#displayPhp');

let count = 0;

getBtnModal.addEventListener('click', () => {

    count++;
    if(count <= 1){
        getBtnModal.textContent = "x";
    }else{

        count = 0;
        getBtnModal.textContent = "=";
    }

    linksNavMobileModal.classList.toggle('active');
    getBtnModal.classList.toggle('active');

})

let getDate = new Date();

let getDay = getDate.getDay();

function getDayFunction(){


    if(getDay == 0){
    
        console.log('Sunday');
    
        displayJS.style.display = "flex";
        displayPhp.style.display = "none";
    }
    else if(getDay == 1){
    
        console.log('Monday');
    
        displayJS.style.display = "none";
        displayPhp.style.display = "flex";
    }
    else if(getDay == 2){
    
        console.log('Tuesday');
    
        displayJS.style.display = "flex";
        displayPhp.style.display = "none";
    }
    else if(getDay == 3){
    
        console.log('Wednsday');
    
        displayJS.style.display = "none";
        displayPhp.style.display = "flex";
    }
    else if(getDay == 4){
    
        console.log('Thursday');
    
        displayJS.style.display = "flex";
        displayPhp.style.display = "none";
    }
    else if(getDay == 5){
    
        console.log('Friday');
    
        displayJS.style.display = "none";
        displayPhp.style.display = "flex";
    }
    else if(getDay == 6){
    
        console.log('Saturday');
    
        displayJS.style.display = "flex";
        displayPhp.style.display = "none";
    }
}
getDayFunction();