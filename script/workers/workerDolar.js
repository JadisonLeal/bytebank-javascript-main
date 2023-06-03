
async function conectaAPI() {
    const conexao = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const conexaoConvertida = await conexao.json();
    postMessage(conexaoConvertida.USDBRL);
}

addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
})
