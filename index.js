import express from "express";
import usuarioRoutes from './routes/usuarioRoutes.js'


// Crea la App
const app = express()

//Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta Pública
app.use(express.static('public'))

//Routing routes
app.use('/auth', usuarioRoutes)

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
});

