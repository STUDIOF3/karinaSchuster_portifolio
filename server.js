const express = require('express')
const nunjuncks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjuncks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
    res.render('home')
})

server.get('/blog', (req, res) => {
    res.render('blog')
})

server.get('/gallery', (req, res) => {
    res.render('gallery')
})

server.listen(3000, () => {
    console.log('Servidor Iniciado')
})