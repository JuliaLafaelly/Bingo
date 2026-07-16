let sorteados = [];
let sorteado;

const fundo = document.querySelector('#fundo');
const B = document.querySelector('#b');
const I = document.querySelector('#i');
const N = document.querySelector('#n');
const G = document.querySelector('#g');
const O = document.querySelector('#o');

// Papeis de parede aleatórios
const papeis = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.png'];
let papelParede = Math.floor(Math.random() * papeis.length);
fundo.style.backgroundImage = `url(${papeis[papelParede]})`;

// Tecla Enter ativa o sorteio
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        sortear();
    }
});

function sortear() {
    if (sorteados.length >= 75) {
        alert("Todos os números já foram sorteados!");
        return;
    }

    do {
        sorteado = Math.floor(Math.random() * 75) + 1;
    } while (sorteados.includes(sorteado));

    sorteados.push(sorteado);
    distribuir();
    fundo.style.opacity = (sorteados.length * 1.3) + "%";
}

function distribuir() {
    sorteados.sort((a, b) => a - b);

    B.innerHTML = "<p>B</p>";
    I.innerHTML = "<p>I</p>";
    N.innerHTML = "<p>N</p>";
    G.innerHTML = "<p>G</p>";
    O.innerHTML = "<p>O</p>";

    sorteados.forEach(num => {
        const div = document.createElement("div");
        div.textContent = num;
        if (num === sorteado) div.classList.add("ultimo");

        if (num <= 15) B.appendChild(div);
        else if (num <= 30) I.appendChild(div);
        else if (num <= 45) N.appendChild(div);
        else if (num <= 60) G.appendChild(div);
        else if (num <= 75) O.appendChild(div);
    });
}
