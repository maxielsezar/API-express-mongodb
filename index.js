const express = require('express')
const app = express()
const port = 3000

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://maxicfp655_db_user:Rl8DfxAP0gKFPQMA@cluster0.xapzjwj.mongodb.net/?appName=Cluster0');
}

app.get('/', (req, res) => {
  res.send('Obtener')
})
app.post('/', (req, res) => {
  res.send('subir')
})

app.put('/', (req, res) => {
  res.send('actualizar')
})
app.delete('/', (req, res) => {
  res.send('eliminar')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
