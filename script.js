let divGrid;
//page with 16x16 grind
//grid needs to be contained in one larger div
//needs to be a grid so flexbox is needed
//eventually need users to be able to change size but 16x16 is the start
//go get em, kid

let container = document.querySelector('#container');

function divMaker (gridSize) {

        for (i=0; i<gridSize; i++) {
            divGrid = document.createElement('div');
            divGrid.classList.add('gridStyle');
            container.appendChild(divGrid);
            console.log("test " + i);
        }
}

divMaker(16);