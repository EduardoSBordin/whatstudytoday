let getBtnModal = document.querySelector('#btnModal');
let linksNavMobileModal = document.querySelector('#linksNavMobileModal');

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

})