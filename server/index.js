// IMPORT PACKAGES
const express = require('express')

const app = express()

//Get routes to the variabel here
const router = require('./src/routes')

const port = 5000

//database
const db = require('./config/config.json')

//hbs
let hbs = require('hbs');

// loaded direktori partials
hbs.registerPartials(__dirname + '/views/partials');


// atur view engine
app.set('view engine', 'hbs');


// JSON FOR API AGAR BISA MENAMPILKAN DATA
app.use(express.json())

//Create endpoint grouping and router here
app.use('/api/v1/', router)

// Port
app.listen(port, () => console.log(`Listening on port ${port}!`))

app.get('/', function(req, res) {
    res.render('index', {
        title: "Main Page"
    })
})

app.get('/register', (req, res) => {

res.render('register', { title : 'register'})
})

app.post('/register', (req, res) => {
    let { name, email, password } = req.body
    db.connect((err, client, done) => {
        if (err) throw err
        const query = `INSERT INTO users_tbs (username,email,password) VALUES('${username}','${email}','${password}')`

        client.query(query, (err, result) => {
            done()
            if (err) throw err
            alert('Akun anda berhasil terdaftar!')
            res.redirect('login')
        })

    })
})

app.get('/login', (req, res) => {

    res.render('login')
})

app.post('/login', (req, res) => {

    let { email, password } = req.body
        
    db.connect((err, client, done) => {
        if (err) throw err

        let query = `SELECT * FROM users_tbs WHERE email='${email}'`

        client.query(query, (err, result) => {
            done()
            if (err) throw err

            if (result.rowCount == 0) {
                alert("Email anda salah")
                return res.redirect('/login')
            } else {
                res.redirect('/home')
            }
        })
    })
})

app.get('/logout', (req, res) => {
    res.redirect('/')
})