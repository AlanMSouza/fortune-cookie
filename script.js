const biscoito = document.querySelector("img");
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const button = document.querySelector("button")
const frases = [
    "A persistência é o caminho do êxito.",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
    "Você é o que você faz, não o que você diz que vai fazer.",
    "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho."
];

let fraseSelecionada = frases[Math.floor(Math.random() * frases.length)];
let fraseNova = document.querySelector(".screen2 p")

biscoito.addEventListener('click', some)
button.addEventListener('click', some)

function some(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    fraseSelecionada = frases[Math.floor(Math.random() * frases.length)];
    fraseNova.innerText = fraseSelecionada
}