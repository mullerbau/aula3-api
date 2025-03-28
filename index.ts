import express from 'express'
import filmesRoutes from './routes/viagens'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.use(express.json())
app.use("/viagens", filmesRoutes)

app.get('/', (req, res) =>{
    res.send('Aula 3 :Exercício de construção')
})

app.get('/aula3', (req, res) =>{
    res.send('Agência de turismo.')
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})