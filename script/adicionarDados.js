export function adicionarDados(grafico, legenda, dados) {
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((dataset) => {
      dataset.data.push(dados); 
  })
  grafico.update();
}