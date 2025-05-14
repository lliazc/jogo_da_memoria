const audio = document.getElementById('audio');
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const carac = [
    'Abigail',
    'Alex',
    'Elliot',
    'Jas',
    'Leah',
    'Loira',
    'Marnie',
    'Robin',
    'Sebastian',
    'Velho',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let firstCard = '';
let secondCard = '';

const checkCards = () => {
    const firstCarac = firstCard.getAttribute('data-carac');
    const secondCarac = secondCard.getAttribute('data-carac');

    const checkEndGame = () => {
        const disableCards = document.querySelectorAll('.disable-card');
        if (disableCards.length == 20) {
            clearInterval(this.loop);
            
            setTimeout(() => {
            alert(`Parabéns, ${spanPlayer.innerHTML}, Você venceu! Seu tempo foi de: ${timer.innerHTML}`);
            }, 400); 
        }
    };
    if (firstCarac === secondCarac) {

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');
        firstCard = '';
        secondCard = '';

        checkEndGame();


    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';
        }, 550);
    }
};

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        checkCards();
    }
    audio.play()
};

const createCard = (carac) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('./img/${carac}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-carac', carac);

    return card;
};

const loadGame = () => {
    const duplicateCharacters = [...carac, ...carac];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((carac) => {
        const card = createCard(carac);
        grid.appendChild(card);
    });
};

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTimer = +timer.innerHTML;
        timer.innerHTML = currentTimer + 1;
    }, 1000);
};

window.onload = () => {
    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName;

   
    startTimer();
    loadGame();
};
