// NUNCA REPITA SUAS REGRAS DE NEGÓCIO!
// Criamos então uma pasta de funçoes auxiliares
// Precisamos usar a mesma lógica mais de uma vez no código

module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(techs => techs.trim());
    // Split = pra cada virgula eu vou cortar a string.
    // .map = está percorrendo todo o array e o trim está tirando todos os espaços antes e depois
    // converte a string em um array.
}