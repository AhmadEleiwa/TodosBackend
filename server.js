const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const todoRouter = require('./routes/todo-route')
const { default: mongoose } = require('mongoose')

app.use(bodyParser.json())


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

//     next();
// });

app.use(express.static('public'))

app.use('/uploads', express.static('static'))
app.use('/api', todoRouter)

app.get('/', async (req, res, next) => {

    return res.sendFile('./index.html')
})



// todoUser is Temporary user, so will be deleted after week 
// Creation date  => May 14, 2023

mongodbURL = 'mongodb+srv://todoUser:1234546@cluster0.pahqx.mongodb.net/todo?retryWrites=true&w=majority'


mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connect to Database")
        app.listen(5500)
        console.log("listen on port 5500...")
    }).catch(err => {
        console.log(err)
    })