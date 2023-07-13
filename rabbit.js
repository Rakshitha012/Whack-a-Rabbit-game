document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', e => {
        cursor.style.top = e.pageY + 'px';
        cursor.style.left = e.pageX + 'px';
    });

    window.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    window.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });
});

let currMoleTile;
let currPlantTile;
let Score = 0;
let gameOver = false;




window.onload = function() {
    setGame();
}




function setGame() {
    
    for (let i = 0; i < 9; i++) { 
        
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); 
    setInterval(setPlant, 3000); 
}

function getRandomTile() {
    
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "rabbbit.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "snake1-removebg-preview.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        Score += 10;
        document.getElementById("Score").innerText = Score.toString(); 
    }
    else if (this == currPlantTile) {
        document.getElementById("Score").innerText = "GAME OVER: " + Score.toString(); 
        gameOver = true;
    }
}
