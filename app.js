let amigo = [];
let contador = 0;
let campo ="";

function limparCampo(){
    campo = document.querySelector("input");
    campo.value = "";
}

function adicionarAmigo(){
    nome = document.querySelector("input").value;
    nome = nome.toUpperCase();
    if (  nome == "") {
        alert("Por favor, digite o nome do seu amigo secreto.");
    } else { 
        limparCampo();
        amigo.push(nome);
        campo = document.querySelector("ul");
        campo.innerHTML = `${amigo[contador]} você foi cadastrado.`;
        contador++;
    }
}

function sortearAmigo(){
    campo.innerHTML = "";
    contador--;
    if (contador >= 0) {
        let amigoEscolhido = parseInt(Math.random() * (amigo.length));
        //alert(`Seu amigo secreto é: ${amigo[amigoEscolhido]}`);
        campo.innerHTML = `O seu amigo secreto escolhido foi: ${amigo[amigoEscolhido]}`;
        amigo.splice(amigoEscolhido,1);
        
    } else {
        alert("Todos os amigos já foram sorteados.")
        campo.innerHTML = "Todos os amigos já foram sorteados.";
        //campo.innerHTML = "";
        amigo = [];
        contador = 0;
    }
}