import { pool } from '../db.js'

//Consulta asincrona  de de LEER todo los registros
export const getAlumnos = async (req, res) => {
    try {
        throw new Error('DB Error')
        const [rows] = await pool.query('SELECT * FROM alumnos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Error de conexion'
        })
    }

}
//Consulta asincrona para traer solo por id
export const getAlumno = async (req, res) => {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM alumnos WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Alumno no encontrado'
        })
        console.log(rows)
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'Error de conexion'
        })
    }
}

//Consulta asincrona de CREAR
export const createAlumnos = async (req, res) => {
    //leer los datos que el cliente envia al solicitar la peticion
    const { name, apellido, carrera } = req.body
    try {
        //Consulta a la base de datos
        const [rows] = await pool.query('INSERT INTO alumnos(name, apellido, carrera) VALUES (?, ?, ?)', [name, apellido, carrera])
        res.send({
            id: rows.insertId,
            name,
            apellido,
            carrera
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error de conexion'
        })
    }
}

//Consulta asincrona de eliminacion de alumno
export const deleteAlumnos = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM alumnos WHERE id = ?', [req.params.id])
        // entregara resultado si la consulta afecta una fila
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Alumno no encontrado'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Error de conexion'
        })
    }
}
//Consulta asincrona para actualizar
export const updateAlumnos = async (req, res) => {
    const { id } = req.params
    //rescatamos lo proveniente de request body
    const { name, apellido, carrera } = req.body
    try {
        //Consulta 
        const [result] = await pool.query('UPDATE alumnos SET name = IFNULL(?, name), apellido = IFNULL(?, apellido), carrera = IFNULL(?, carrera) WHERE id = ?', [name, apellido, carrera, id])
        //verificacion 
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Estudiante no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM alumnos WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Error de conexion'
        })
    }

}

