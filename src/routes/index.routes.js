import {Router} from 'express'
//importacion de la conexión a la base de datos
import {ping} from '../controllers/index.controller.js'

const router = Router()

router.get('/ping', ping);

export default router