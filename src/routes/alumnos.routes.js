import { Router } from "express";
import {getAlumnos, createAlumnos, updateAlumnos, deleteAlumnos, getAlumno} from '../controllers/alumnos.controller.js'



const router = Router()

router.get('/alumnos', getAlumnos)

//solicitar solo un alumno, se agrega parametro de express
router.get('/alumnos/:id', getAlumno)

router.post('/alumnos', createAlumnos )

router.patch('/alumnos/:id', updateAlumnos)

router.delete('/alumnos/:id', deleteAlumnos)

export default router

