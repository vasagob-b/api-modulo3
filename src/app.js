//importaciòn del modulo express
import express from 'express'
//Importacion de las rutas
import alumnosRutas from './routes/alumnos.routes.js'
//importacion de la conexion a la base de datos
import indexRoutes from './routes/index.routes.js'
//importacion de cors
import cors from 'cors';




// ejecutamos express desde la constante app
const app = express()



//Habilitacion del front end
app.use(cors({
    origin: 'https://bright-longma-b687da.netlify.app/'
  }));

app.use(express.json())



//definicion de rutas
app.use('/api', alumnosRutas)
app.use(indexRoutes)

//Middleware para el manejo de rutas que no existen
app.use((req, res, next) => {
    res.status(404).json({
        message: 'ruta no encontrada'
    })
})

export default app;