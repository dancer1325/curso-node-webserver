require("dotenv").config(); // dotenv   Library to manage environment variables
const express = require("express"); // Express package
const hbs = require("hbs"); // Handlebar package

const app = express(); // Conventionall it's named app
const port = process.env.PORT; // Get environment variable

// Handlebars
app.set("view engine", "hbs"); // Configure the behaviour of the server.
//"view engine" is the default engine extension to use when omitted
// When res.render of Express is called --> .hbs files will be rendered
hbs.registerPartials(__dirname + "/views/partials"); // Register all the partials based on the path

// Servir contenido estático
app.use(express.static("public"));
// app.use  Mount the middleware function at the specified path
// express.static  Middleware function to serve static files

//!!!!!! It would have more priority than routes defined afterwards, in case that there is an index.html under the previous folder public!!!!!!!!

// app.get('/', (req, res) => {  // Route HTTP get requests to "/" ⟶ Callback function
//     res.render('home', {  // Render the view home and sending the rendered HTML string to the client
//         nombre: 'Fernando Herrera', // Property used in the view
//         titulo: 'Curso de Node'  // Property used in the view
//     });
// });

// app.get('/generic', (req, res) => {  // Route HTTP get requests to "/generic" ⟶ Callback function
//     res.render('generic', { // Render the view generic and sending the rendered HTML string to the client
//         nombre: 'Fernando Herrera',
//         titulo: 'Curso de Node'
//     });
// });

// app.get('/elements', (req, res) => { // Route HTTP get requests to "/elements" ⟶ Callback function
//     res.render('elements', { // Render the view generic and sending the rendered HTML string to the client
//         nombre: 'Fernando Herrera',
//         titulo: 'Curso de Node'
//     });
// });

// app.get("*", (req, res) => {
//     // Route HTTP get requests to "*" (=== any url) ⟶ Callback function
//     res.send("404 | Page not found"); // Transfer a file at the given path
// });

// app.get("*", (req, res) => {
//     // Route HTTP get requests to "*" (=== any url) ⟶ Callback function
//     res.render("home"); // It will try to render the home under views folder, and since view engine is hbs --> home.hbs will be looked for under views folder
// });

app.get("*", (req, res) => {
    // Route HTTP get requests to "*" (=== any url) ⟶ Callback function
    res.sendFile(__dirname + "/public/index.html"); // Transfer a file at the given path
});

app.listen(port, () => {
    // Port / Host / ... in which to listen the request
    console.log(`Example app listening at http://localhost:${port}`);
});