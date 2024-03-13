document.addEventListener("DOMContentLoaded", function() {

    let colorDivs = document.querySelectorAll('.color');
    let selectedColor = 'white';
    let selectedBorderColor = 'lightgray'

    // color selection
    colorDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            selectedColor = window.getComputedStyle(this).getPropertyValue('background-color');
            selectedBorderColor = window.getComputedStyle(this).getPropertyValue('background-color');
        });
    });

    // eraser selection
    let eraserDiv = document.getElementById('colorE');
    eraserDiv.addEventListener('click', function() {
        selectedColor = 'white';
        selectedBorderColor = 'lightgrey';
    });
    
    // canvasGrid
    let rutaDivs = document.querySelectorAll('.ruta');

    function handleDrag(event) {    // Check if the mouse button is held down
        event.preventDefault();
        if (event.buttons === 1) {  // 1 corresponds to the left mouse button            
            event.target.style.backgroundColor = selectedColor;
            event.target.style.borderColor = selectedBorderColor;
        }
    }

    function handleClick(event) {    
        event.target.style.backgroundColor = selectedColor;
        event.target.style.borderColor = selectedBorderColor;
    }

function handleTouch(event) {
    event.preventDefault();
    
    // Get first touch point & its element
    let touch = event.touches[0];
    let targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Check if the touch is on one of the rutaDivs
    if (targetElement && targetElement.classList.contains('ruta')) {
        targetElement.style.backgroundColor = selectedColor;
        targetElement.style.borderColor = selectedBorderColor;
    }
}


    // Loop through all divs and add event listeners
    rutaDivs.forEach(function(div) {
        div.addEventListener('click', handleClick);
        div.addEventListener('mouseover', handleDrag);

        div.addEventListener('touchstart', handleTouch); //mobil
    
        div.addEventListener('touchmove', handleTouch); // mobil
    



});
    
        
    //Clear button event listener
    let clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function() {
        rutaDivs.forEach(function(ruta) {
            ruta.style.backgroundColor = 'white';
            ruta.style.borderColor = 'lightgrey';
        });
    });

});