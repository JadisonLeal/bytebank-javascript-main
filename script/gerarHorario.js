export function geraHorario() {
  let data = new Date();
  let horario = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
  console.log(horario);
  return horario;
}

// setInterval(() => geraHorario(), 1000);