import express, { urlencoded } from "express";
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'


const app = express();
const puerto = 8080;

//Configuraciones
app.use(express.json());
app.use(urlencoded({ extended: true }))

//Rutas
app.use('/api/products/', productRoutes)
app.use('/api/cart/', cartRoutes)

//Servidor
app.listen(puerto, () => {
    console.log("Servidor Corriendo en el puerto 8080")
})