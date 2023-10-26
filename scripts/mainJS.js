let btnCopy = document.querySelector('#btnCopy');
let getH4 = document.querySelector('h4');
let textToCopy = document.querySelector('#textToCopy');

btnCopy.addEventListener('click', () => {

    const value = textToCopy.value;

    navigator.clipboard.writeText(value);
    
    
})