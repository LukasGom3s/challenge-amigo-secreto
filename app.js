let amigos = [];

function listarNomes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}<button class="remove-button" onclick="removerAmigo(${i})">-</button></li>`;
    }

}

function adicionarAmigo() {
    let warn = document.querySelector(".warning");
    warn.innerHTML="";
    let amigo = document.getElementById('amigo');
    let nome = amigo.value;
    if (nome != "") {
        amigos.push(nome);
        listarNomes();
    } else {
        warn.innerHTML = "Por favor, insira um nome!"
    }
    amigo.value = "";
}

function removerAmigo(number) {
    amigos.splice(number, 1);
    listarNomes();
}


function sortearAmigo() {
    if (amigos.length > 1) {
        let number = parseInt(Math.random() * amigos.length + 1);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigos[number - 1]}</strong></li>`;
    } else if (amigos.length == 1) {
        resultado.innerHTML = "";
        resultado.innerHTML = `<li>Adicione mais amigos.</li>`;
    } else {
        resultado.innerHTML = "";
        resultado.innerHTML = `<li>Não foram adicionados amigos á lista.</li>`;
    }
}