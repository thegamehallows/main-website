import { pages } from './pages/app.js'
const express = require('express')
const app = express()
const bridge = new Bridge('title')

const content = document.querySelector('#app')

app.get('/', (req, res) => {
    bridge.cross({title: 'The Game Hallows - Welcome!'})
    document.querySelector('meta[property=\'og:title\']').setAttribute('content', 'The Game Hallows - Welcome!')
    document.querySelector('meta[property=\'og:description\']').setAttribute('content', 'Just a group of gamers who stream and make games with the resources they have.')
    document.querySelector('meta[property=\'og:color\']').setAttribute('content', '#a21caf')
    document.querySelector('meta[property=\'og:imagr\']').setAttribute('content', '/public/static/banner.png')
    content.innerHTML = pages.main
})