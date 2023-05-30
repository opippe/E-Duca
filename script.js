let pergunta = [
    {
        titulo: "Compre o mais recente aparelho de som.",
        subtitulo: "Vou lançar a braba na próxima resenha.",
        frase: "Agora serei popular!",
        preco: "R$350,00",
        intPrecoMenos: 350,
        intPrecoMais: 100,
        dica: "Saiba definir suas prioridades.",
        resposta: "nao",
        jaFoi: "nfoi"
    },
    {
        titulo: "Montar um orçamento.",
        subtitulo: "É um registro dos os ganhos e gastos financeiros.",
        frase: "Para gerenciar melhor seu orçamento, revise e atualize as informações periodicamente.",
        preco: "R$0,00",
        intPrecoMenos: 200,
        intPrecoMais: 300,
        dica: "Organização é tudo!",
        resposta: "sim",
        jaFoi: "nfoi"
    },
    {
        titulo: "Email bancário.",
        subtitulo: "Bloqueamos sua conta por segurança.",
        frase: "Para desbloquear seu cartão, informe seus dados pessoais.",
        preco: "R$300,00",
        intPrecoMenos: 600,
        intPrecoMais: 0,
        dica: "Cuidado ao compartilhar seus dados, pode ser um golpe.",
        resposta: "nao",
        jaFoi: "nfoi"
    },
    {
        titulo: "Sextou!",
        subtitulo: "Curtir um pouco, que o cara também não é de ferro!",
        frase: "Se bem que é quarto dia consecutivo...",
        preco: "R$100,00",
        intPrecoMenos: 100,
        intPrecoMais: 50,
        dica: "Não exagere nos gastos supérfulos.",
        resposta: "nao",
        jaFoi: "nfoi"
    },
    {
        titulo: "Compra online.",
        subtitulo: "Este produto está com um preço inacreditável!",
        frase: "Bom demais pra ser verdade...",
        preco: "R$300,00",
        intPrecoMenos: 300,
        intPrecoMais: 0,
        dica: "Compre sempre em sites seguros e confiáveis, lojas conhecidas.",
        resposta: "nao",
        jaFoi: "nfoi"
    },
    {
        titulo: "Reserva de emergência.",
        subtitulo: "Guardar 6 meses do meu salário para o caso de eu não poder trabalhar?",
        frase: "Mas eu ja ganho tão pouco :(",
        preco: "R$1000,00",
        intPrecoMenos: 1000,
        intPrecoMais: 100,
        dica: "Não passe sufoco, imprevistos acontecem.",
        resposta: "sim",
        jaFoi: "nfoi"
    }
]

let perguntaAtual = 99
let countDown = 0
let totalFundos = 4000

function contador() {
    let segundos = 61
    countDown = setInterval (()=>{
        segundos--;
        document.getElementById("contador").innerText = segundos;
        if (segundos < 1) {
            timeOut()
            clearInterval(countDown)
            montarPergunta()
        }
    },1000)
}

function timeOut() {
    Swal.fire({
        title: 'Acabou o tempo!',
        text: `Pense mais rápido.`,
        icon: 'error',
        confirmButtonText: 'Continuar',
        width: '350px'
    })
}

function todasPerguntas(foi) {
    return pergunta.some(function(el) {
        return el.jaFoi === foi;
    });
}

function montarPergunta() {
    perguntaAtual = Math.floor(Math.random() * (pergunta.length))
    if (todasPerguntas('nfoi')) {
        if (pergunta[perguntaAtual].jaFoi != "foi") {
            document.getElementById("valorFundos").innerText = `R$${totalFundos}`;
            document.getElementById("perguntaTitulo").innerText = pergunta[perguntaAtual].titulo;
            document.getElementById("perguntaSubtitulo").innerText = pergunta[perguntaAtual].subtitulo;
            document.getElementById("perguntaFrase").innerText = pergunta[perguntaAtual].frase;
            document.getElementById("perguntaPreco").innerText = pergunta[perguntaAtual].preco;
            contador()
            pergunta[perguntaAtual].jaFoi = "foi"
        } else {
            montarPergunta()
        }
    } else {
        fecharPergunta()
    }
}

function abrirPergunta() {
    montarPergunta()
    document.getElementById("container").style.display = "none";
    document.getElementById("pergunta-container").style.display = "flex";
}

function fecharPergunta() {
    document.getElementById("container").style.display = "flex";
    document.getElementById("pergunta-container").style.display = "none";
    document.getElementById("valorFundosHome").innerText = `R$${totalFundos}`;
    document.getElementById("valorFundos").innerText = `R$${totalFundos}`;
    clearInterval(countDown)
}

function botaoJogo() {
    document.getElementById("container").style.display = "flex";
    document.getElementById("missoes-container").style.display = "none";
    document.getElementById("botao-jogo").style.borderBottom = "5px solid #79a83d";
    document.getElementById("botao-missoes").style.borderBottom = "5px solid #cecece";
    document.getElementById("botao-jogo1").style.borderBottom = "5px solid #79a83d";
    document.getElementById("botao-missoes1").style.borderBottom = "5px solid #cecece";
}

function botaoMissoes () {
    document.getElementById("container").style.display = "none";
    document.getElementById("missoes-container").style.display = "flex";
    document.getElementById("botao-jogo").style.borderBottom = "5px solid #cecece";
    document.getElementById("botao-missoes").style.borderBottom = "5px solid #79a83d";
    document.getElementById("botao-jogo1").style.borderBottom = "5px solid #cecece";
    document.getElementById("botao-missoes1").style.borderBottom = "5px solid #79a83d";
}

function respostaSim() {
    if (pergunta[perguntaAtual].resposta == "nao") {
        totalFundos = totalFundos - pergunta[perguntaAtual].intPrecoMenos
        Swal.fire({
            title: 'Ah não!',
            text: `Você torrou R$${pergunta[perguntaAtual].intPrecoMenos}.`,
            footer: `<center>${pergunta[perguntaAtual].dica}</center>`,
            icon: 'error',
            confirmButtonText: 'Continuar',
            width: '350px'
        })
    } else if (pergunta[perguntaAtual].resposta == "sim") {
        totalFundos = totalFundos + pergunta[perguntaAtual].intPrecoMais
        Swal.fire({
            title: 'Muito bem!',
            text: `Esta decisão lhe rendeu R$${pergunta[perguntaAtual].intPrecoMais}.`,
            footer: `<center>${pergunta[perguntaAtual].dica}</center>`,
            icon: 'success',
            confirmButtonText: 'Continuar',
            width: '350px'
        })
    }

    clearInterval(countDown)
    montarPergunta()
}

function respostaNao() {
    if (pergunta[perguntaAtual].resposta == "sim") {
        totalFundos = totalFundos - pergunta[perguntaAtual].intPrecoMenos
        Swal.fire({
            title: 'Ah não!',
            text: `Você torrou R$${pergunta[perguntaAtual].intPrecoMenos}.`,
            footer: `<center>${pergunta[perguntaAtual].dica}</center>`,
            icon: 'error',
            confirmButtonText: 'Continuar',
            width: '350px'
        })
    } else if (pergunta[perguntaAtual].resposta == "nao") {
        totalFundos = totalFundos + pergunta[perguntaAtual].intPrecoMais
        Swal.fire({
            title: 'Muito bem!',
            text: `Esta decisão lhe rendeu R$${pergunta[perguntaAtual].intPrecoMais}.`,
            footer: `<center>${pergunta[perguntaAtual].dica}</center>`,
            icon: 'success',
            confirmButtonText: 'Continuar',
            width: '350px'
        })
    }

    clearInterval(countDown)
    montarPergunta()
}