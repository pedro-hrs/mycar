const logService = require('../services/logService');

function parseError(error) {
  let erro = {};
  if (error instanceof Error) {
    erro = {
      status: 500,
      message: error.message,
      name: error.name
    };
  } else {
    erro = {
      status: error.status,
      message: error.message,
      name: error.name
    };
  }

  (erro.status == 500) ?
    logService.registerAlert(erro.message) :
    logService.registerError(erro.message);

  return erro;
}

module.exports = {
  parseError
}