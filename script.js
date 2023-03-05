
let userString = ''
let inverterString = ''
let stringInverserPage = 'INVERSOR DE STRING'
let stringInverser = ''

stringInverser = inverterStringg(stringInverserPage)
document.getElementById('stringInverser').innerHTML = stringInverser


// FUNÇÃO MAIN
function init (){
    stringRescue()
    inverterString = inverterStringg(userString)
    addHtml()
}


// FUNÇÃO PARA RESGATAR STRING DO USUÁRIO
function stringRescue() {
    userString = String(document.getElementById('inputText').value)
}


// FUNÇÃO PARA INVERTER STRING
function inverterStringg(string) {
    let result = ''

    for (i = string.length-1; i >= 0; i--){
        result += string[i]
    }
    return result
}


// FUNÇÃO PARA ADCIONAR STRING INVERTIDA NO HTML
function addHtml(){
    document.getElementById('inverterResult').innerHTML = inverterString
}


// FUNÇÃO PARA RESETAR O INVERSOR
function resetInversor(){
    window.location.reload();
}

