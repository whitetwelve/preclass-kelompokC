const express = require('express')

const port = 5000

const app = express()

const hbs = require('hbs')
app.set('view engine', 'hbs')

// loaded direktori partials
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
const db = require('../4b/connection/db')



app.get('/', (req, res) => {
    res.render('main', {title : 'Main Page'})
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    let query = `INSERT INTO users_tb (username,email,password) VALUES
        ('${req.body.username}','${req.body.email}','${req.body.password}')`

    db.query(query, function (err, result) {
        if(err) throw err
    })
    console.log('Akun berhasil dibuat!')
    
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    let { email, password } = req.body

    let query = `SELECT * FROM users_tb WHERE email='${email}'`

    db.query(query, (err, result) => {
        if(err) throw err
    })
    console.log('Berhasil Login');
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/add', (req, res) => {
    let query = `INSERT INTO collections_tb (name, user_id) VALUES
        ('${req.body.name}','${req.body.user_id}')`

    db.query(query, function (err, result) {
        if(err) throw err
    })
    console.log('Collection berhasil ditambahkan!')
    
    res.redirect('/home')
})

app.get('/addtask', (req, res) => {
    res.render('addtask')
})

app.post('/addtask', (req, res) => {
    let query = `INSERT INTO task_tb (name, is_done, collections_id) VALUES
        ('${req.body.name}','${req.body.is_done}', '${req.body.collections_id}')`

    db.query(query, function (err, result) {
        if(err) throw err
    })
    console.log('Task berhasil ditambahkan!')
    
    res.redirect('/home')
})

