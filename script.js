let images;
let mineClicks = 0; 

const buttons = document.querySelectorAll('button');
images = document.querySelectorAll('img');

random();

document.querySelector("#Restart").addEventListener('click', restart_game);

function random() {
    buttons.forEach((button, index) => {
        button.removeEventListener('click', handleClick);
        button.addEventListener('click', handleClick);
    });

    const rand_num = getRandomInt(1, images.length);
    const imgIndex = rand_num - 1;
    images[imgIndex].src = 'bomb.png';
}

function handleClick(event) {
    const index = Array.from(buttons).indexOf(event.currentTarget);
    if (images[index].src.includes('bomb.png')) {
        images[index].style.display = 'block';
        alert("!! GAMEOVER !!");
        buttons.forEach(btn => btn.disabled = true);
    } else {
        images[index].style.display = 'block';
        mineClicks++;
        if (mineClicks === 24) {
            alert("CONGRATS!! YOU CRACKED IT");
            buttons.forEach(btn => btn.disabled = true);
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function restart_game() {
    console.log("Game Restarted");
    images.forEach(img => {
        img.style.display = 'none';
        img.src = 'mines.png';
    });

    mineClicks = 0; 
    random();
    buttons.forEach(btn => btn.disabled = false);
}
