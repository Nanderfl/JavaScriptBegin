const addButton = document.querySelector('.button'); 
const container = document.querySelector('.container'); 
let beginNummer = 0; 
 
addButton.addEventListener('click', () => { 
    if (beginNummer >= 49) { 
        return; 
    } 

    const newElement = document.createElement('div'); 
    newElement.classList.add('container__item'); 
    newElement.textContent = beginNummer + 1; 
    container.appendChild(newElement); 

    beginNummer++; 
    }
);