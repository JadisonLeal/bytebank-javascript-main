// import { conectaAPI } from "./conectaAPI.js";
import { geraHorario } from "./gerarHorario.js";
import { adicionarDados } from "./adicionarDados.js";
import  selecionaCotacao  from "./imprimeCotacao.js";

// GRAFICO DOLAR 
const graficoDolar = document.getElementById('graficoDolar');
export const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Dólar',
        data: [],
        borderWidth: 1
      }]
    },
});

let workerDolar = new Worker('./script/workers/workerDolar.js');
workerDolar.postMessage('usd');
workerDolar.addEventListener("message", event => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao("dolar", valor);
  adicionarDados(graficoParaDolar, tempo, valor);
})

// GRAFICO IENE
const graficoIene = document.getElementById('graficoIene');
const graficoParaIene = new Chart(graficoIene, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'iene',
      data: [],
      borderWidth: 1
    }]
  },
});

let workerIene = new Worker('./script/workers/workerIene.js');
workerIene.postMessage('iene');
workerIene.addEventListener("message", event => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao("iene", valor);
  adicionarDados(graficoParaIene, tempo, valor);
})


// GRAFICO EURO
const graficoEuro = document.getElementById('graficoEuro');
const graficoParaEuro = new Chart(graficoEuro, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'euro',
      data: [],
      borderWidth: 1
    }]
  },
})

let workerEuro = new Worker('./script/workers/workerEuro.js');
workerEuro.postMessage('euro');
workerEuro.addEventListener("message", event => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao("euro", valor);
  adicionarDados(graficoParaEuro, tempo, valor);
})


// GRAFICO DOLAR CANADENSE
const graficoDolarCanadense = document.getElementById('graficoDolarCanadense');
const graficoParaDolarCanadense = new Chart(graficoDolarCanadense, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'dolar canadense',
      data: [],
      borderWidth: 1
    }]
  },
})

let workerDolarCanadense = new Worker('./script/workers/workerDolarCanadense.js');
workerDolarCanadense.postMessage('dolarCanadense');
workerDolarCanadense.addEventListener("message", event => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao("dolarCanadense", valor);
  adicionarDados(graficoParaDolarCanadense, tempo, valor);
})


// GRAFICO BITCOIN 
const graficoBitcoin = document.getElementById('graficoBitcoin');
const graficoParaBitcoin = new Chart(graficoBitcoin, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "bitcoin",
      data: [],
      borderWidth: 1
    }]
  },
})

let workerOuro = new Worker("./script/workers/workerBitcoin.js");
workerOuro.postMessage('bitcoin');
workerOuro.addEventListener("message", event => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao("bitcoin", valor);
  adicionarDados(graficoParaBitcoin, tempo, valor);
})