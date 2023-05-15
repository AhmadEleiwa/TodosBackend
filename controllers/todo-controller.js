const { v4: uuidv4 } = require('uuid');


const Todo = require('../model/todo')

// let array = [
//     { id: uuidv4(), title: 'Markk all task', desc: 'Test desc here', status: true },
//     { id: uuidv4(), title: 'Markk all task', desc: 'Test desc here', status: true },
//     { id: uuidv4(), title: 'Markk all task', desc: 'Test desc here', status: false },
//     { id: uuidv4(), title: 'Markk all task', desc: 'Test desc here', status: false },

// ]


const getAll = async (req, res, next) => {
    let todos = await Todo.find()
    return res.status(200).json({ data: todos })
}

const getTodo = async (req, res, next) => {
    const { id } = req.params
    let todos
    try {
        todos = await Todo.findById(id)
        return res.status(200).json({ item: todos })

    } catch (err) {
        return res.status(404).json({ massage: "not found" })
    }
}


const deleteTodo = async (req, res, next) => {
    const { id } = req.params
    try { await Todo.findByIdAndDelete(id) }
    catch (err) {
        return res.status(422).json({ massage: "not found" })

    }



    return res.status(200).json({ removedItem: id })
}


const addTodo = async (req, res) => {

    const { title, desc, status } = req.body
    const tod = new Todo({
        title: title,
        description: desc,
        status: status
    })
    try {
        await tod.save()
        return res.status(201).json({ massage: "todo has been added" })
    } catch (err) {
        return res.json({ massage: err })

    }


}
const editTodo = async (req, res) => {
    const { id } = req.params
    const { title, desc, status } = req.body

    const tod = await Todo.findById(id)
    if (!tod)
        return res.status(404).json({ massage: "No todo with this id !" })
    tod.title = title
    tod.description = desc
    tod.status = status
    try {
        await tod.save()
        return res.status(200).json({ massage: "todo has been updated" })
    }
    catch (err) {
        return res.status(422).json({ massage: "tCannot save the changes" })
    }
}
module.exports.getAll = getAll
module.exports.deleteTodo = deleteTodo

module.exports.getById = getTodo

module.exports.addTodo = addTodo
module.exports.editTodo = editTodo
