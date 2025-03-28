import { PrismaClient } from "@prisma/client"
import { Router } from "express"
const prisma = new PrismaClient()


const router = Router()

const viagem = [
    {
        id: 1,
        destino: "Bagé",
        transporte: "Terrestre",
        duracao: 1,
        preco: 20.50,
    }
]

router.get ("/", async (req, res) =>{
    const viagem = await prisma.viagem.findMany()
    res.status(200).json(viagem)
})

router.post("/", async (req, res) =>{
    const {destino, transporte, dataSaida, preco, duracao} = req.body
    
    if(!destino || !transporte || !duracao || !preco) {
        res.status(400).json({erro: "Informe todos os dados."})
    } else {
        try {
            const novaViagem = await prisma.viagem.create({
                data: {
                    destino,
                    transporte,
                    dataSaida: new Date(dataSaida),
                    preco,
                    duracao
                }
            });

            res.status(201).json(novaViagem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro interno no servidor."});
        }
    }
    res.status(201).json(viagem)
})

router.delete("/id", (req, res) =>{
    const id = Number(req.params.id);

    const index = viagem.findIndex((viagem) => viagem.id === Number(id))

    if (isNaN(id)) {
        res.status(404).send('Viagem não encontrada')
    } else {
        try 
    }
})

export default router