addEventListener("message", event => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
})

async function conectaAPI() {
    const conexao = await fetch('https://economia.awesomeapi.com.br/last/JPY-BRL');
    const conexaoConvertida = await conexao.json();
    postMessage(conexaoConvertida.JPYBRL);
}