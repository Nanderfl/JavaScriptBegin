const addButton = document.querySelector('.button'); 
const container = document.querySelector('.container'); 
let beginNummer = 0;
let clicked = false;
 
addButton.addEventListener('click', () => { 
    if (!clicked){
        for (let i = 0; i < 49; i++) {
            const newElement = document.createElement('div'); 
            newElement.classList.add('container__item'); 
            newElement.textContent = i + 1; 
            container.appendChild(newElement); 
            
            beginNummer++; 
        }
        clicked = true;
    }
    }
);