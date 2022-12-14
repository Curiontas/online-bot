function getMarkup(body) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Megapágina de Gael</title>
        <style>
            body {
                font-family: sans-serif
            }
        </style>
    </head>
    <body>
        ${body}
    </body>
    </html> 
    `;
}

module.exports = getMarkup;
