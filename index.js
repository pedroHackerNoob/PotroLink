const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('hola mundo desde express')
} )


app.listen(4000,()=>{
    console.log('Servidor funcionando en localhost:4000')
})