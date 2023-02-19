const express = require('express')
const app = express()
const content = document.querySelector('#app')

app.get('/', (req, res) => {
    content.innerHTML = mainPage
})