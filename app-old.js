const http = require("http"); // Node library

http
    .createServer((req, res) => {
        console.log(req);
        // res.writeHead(200, { 'Content-Type': 'application/json' }) // All the possible rawHeaders === Request one's
        // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        // res.writeHead(200, { 'Content-Type': 'application/csv' });

        res.write("Hola Mundo"); // Include a dummy response to the request

        // Simulate return a 404 response
        // res.writeHead(404);
        // res.write('404 | Page not found');

        res.end(); // Finish to indicate the response
    })
    .listen(8080); // Port / Host / ... in which to listen the request

console.log("Escuchando el puerto", 8080);