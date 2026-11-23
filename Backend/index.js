const express = require('express')
const app = express()

const PUERTO = process.env.PUERTO

app.listen(PUERTO, () =>{
    try{
        console.log(`Conexion exitosa al puerto , ${PUERTO}`)


    }catch(error){
        console.log(`error de conexion`)

    }
})