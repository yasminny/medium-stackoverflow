'use strict'
const express = require('express');
const exphbs  = require('express-handlebars');
const fs = require('fs')

const app = express();

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('', express.static('views'));
const routes = []
fs.readdirSync('./views').forEach(fileName => {
	console.log('fileName:', fileName)
	const path = `/${fileName}`
	routes.push(path)
	app.get(path, (req, res) => {
		res.render(`${fileName}/${fileName}`, {fileName})
	})
})
app.get('/', (req, res) => {
	const lis = routes.map(r => `<a href="${r}">${r}</a>`).map(r => `<li>${r}</li>`)
	const html = `<html><body><ul>${lis}</ul></body></html>`
	res.send(html)
})
var server = app.listen(9000, function () {
	console.log('✓ Listening on port 9000');
});
