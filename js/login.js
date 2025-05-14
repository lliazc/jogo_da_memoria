document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('.login-input');
    const button = document.querySelector('.login-button');
    const form = document.querySelector('.login-form');

    if (!input || !button || !form) {
        console.error("Um ou mais elementos não foram encontrados");
        return;
    }

    input.addEventListener('input', () => {
        if (input.value.length > 2) {
            button.removeAttribute('disabled');
            button.style.backgroundColor = 'blue';
        } else {
            button.setAttribute('disabled', '');
            button.style.backgroundColor = '#eee';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(`Formulário enviado com o valor: ${input.value}`);
        localStorage.setItem('player', input.value);
        window.location = 'game.html';
    });
});
