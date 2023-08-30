const error = `[ERRO] - `;
const alert = `[ALERTA] - `;
const success = `[SUCESSO] - `;

function registrarError(mensagem) {
  mensagem = mensagem || 'Error não informado';
  console.log(error + mensagem);
}

function registrarSucesso(mensagem) {
  mensagem = mensagem || 'Ação não informada';
  console.log(success + mensagem);
}

function registrarAlerta(mensagem) {
  mensagem = mensagem || 'Alerta não informado';
  console.log(alert + mensagem);
}

module.exports = {
  registrarError,
  registrarSucesso,
  registrarAlerta
}