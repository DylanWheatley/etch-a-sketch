let divGrid;
//page with 16x16 grind
//grid needs to be contained in one larger div
//needs to be a grid so flexbox is needed
//eventually need users to be able to change size but 16x16 is the start
//go get em, kid

let container = document.querySelector('#container');



function divMaker (gridSize) {

        //process to make all of the grids
        for (i=0; i<gridSize*gridSize; i++) {
            divGrid = document.createElement('div');
            divGrid.classList.add('gridStyle');
            container.appendChild(divGrid);
            console.log("test " + i);
        }



        //adding the black hover effect to 'draw'
        let etch = document.querySelectorAll('.gridStyle');

        etch.forEach((etch) => {
            etch.addEventListener('mouseover', () => {
                etch.classList.add('hover');  
            }); 
        });


        
        //the reset button to erase the board
        let reset = document.querySelector('button');
            reset.addEventListener('click', () => {
                etch.forEach((etch) => {
                 etch.classList.remove('hover');
        });
    });
}




divMaker(16);