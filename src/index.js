import app from './app.js'
import { PORT } from './config.js'

//se le asigna un puerto a la constante app para escuchar en este caso el 3000
app.listen(PORT)
console.log('Servidor corriendo en el puerto', PORT)