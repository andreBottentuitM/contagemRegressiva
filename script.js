let time = 10
console.log('INICIANDO CONTAGEM REGRESSIVA!')

function startContagem() {
    if (time > 0) {
        contagemRegressiva()
    } else {
        console.log("BUMMMMMM!!")
    }

}

function contagemRegressiva() {
    console.log(`Contagem regressiva para explosão: ${time}`)
    time = time - 1
    intervalo()
}


function intervalo() {
    setTimeout(startContagem, 1000)
}

startContagem()