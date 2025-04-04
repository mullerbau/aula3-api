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
        dataSaida: new Date("2023-10-01")
    }
]

router.get ("/", async (req, res) =>{
    const viagens = await prisma.viagem.findMany()
    res.status(200).json(viagens)
})

router.post("/", async (req, res) =>{
    const {destino, transporte, dataSaida, preco, duracao, hotel, estrelas} = req.body
    
    if(!destino || !transporte || !duracao || !preco || !hotel || !estrelas) {
        res.status(400).json({erro: "Informe todos os dados."})
    } else {
        try {
            const novaViagem = await prisma.viagem.create({
                data: {
                    destino,
                    transporte,
                    dataSaida: new Date,
                    preco,
                    duracao,
                    hotel,
                    estrelas
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

router.delete("/:id", (req, res) =>{
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(404).send('ID inválido')
    } 

    const index = viagem.findIndex((viagem) => viagem.id === id)

        try {
            if (index === -1) {
                res.status(404).send('Viagem não encontrada')
            } else {
                viagem.splice(index, 1)
                res.status(204).send()
            }
        }
        catch (error) {
            
        }
    }
)

router.put("/:id", async (req, res) => {

    const { id, destino, transporte, dataSaida, preco, duracao, hotel, estrelas } = req.body

    if (!destino || !transporte || !duracao || !preco || !hotel || !estrelas) {
        res.status(400).json({ erro: "Informe todos os dados." })
        return
    }
        try {
            const viagem = await prisma.viagem.update({
                where: {id: Number(id) },
                data: { destino, transporte, dataSaida, preco, duracao, hotel, estrelas }
            })
            res.status(200).json(viagem)
        } catch (error) {
            res.status(400).json({ erro: error })
        }
})
    

export default router