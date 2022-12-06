// Node
// https://nodejs.org/en/
const http = require("http");

const getMarkup = require("./getMarkup");

// Recibe una request
// Envía una respuesta

/**
 *
 * @param {Request} req
 * @param {http.ServerResponse} res
 */
function requestListener(req, res) {
  if (req.url === "/") {
    // 200 OK
    // 400 Errores Del Cliente
    // -- 404 No se encuentra
    // 500 Server Error
    res.writeHead(200);
    const markup = getMarkup("<h1>My first server</h1>");
    res.end(markup);
    return;
  } else if (req.url === "/ayuda") {
    res.writeHead(200);
    const markup = getMarkup("<h1>Qué necesitas?</h1>");
    res.end(markup);
    return;
  }
  res.writeHead(404);
  res.end("No encontrado");
}

const server = http.createServer(requestListener);

const host = "localhost";
const port = "3000";
server.listen(port, host, () => {
  console.log(`El servidor está corriendo en ${host}:${port}`);
});
