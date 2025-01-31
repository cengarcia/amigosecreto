//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


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

/*
Ao apertar o botão amigo secreto:
Apresentar ao usuário uma lista dos nome e solicitar que clique em seu nome;
Realizar um filtro no array retirando essa pessoa pra que ela não tire ela mesma no sorteio;
Fazer o sorteio sem essa pessoa na lista;
Informar Fulano de tal o seu amigo secreto é Beltrano de Tal;

Verificar se nome já não está cadastrado na base de dados;
Caso já esteja informar que já consta na base de dados;




*/