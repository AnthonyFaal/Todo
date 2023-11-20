const db = require('../config/dbConfig');


const todoControllers = {
    getAllTodo: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from todo")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
   
    createTodo: async(req, res) => {
        try {
            const { title, description } = req.body

            const sql = 'INSERT INTO todo(title, description) VALUES($1, $2) RETURNING *'

            const { rows } = await postgre.query(sql, [title, description])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    updateTodo: async(req, res) => {
        try {
            const { title, description } = req.body

            const sql = 'UPDATE todo set title = $1, description = $2 where id = $3 RETURNING *'

            const { rows } = await postgre.query(sql, [title, description, req.params.id])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },

    //Delete todo
    deleteTodo: async(req, res) => {
        try {
            const sql = 'DELETE FROM todo where id = $1 RETURNING *'

            const { rows } = await postgre.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "not found"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

module.exports = todoControllers