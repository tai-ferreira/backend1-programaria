const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Simara Conceição",
        imagem: "https://simaraconceicao.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-03-09-at-15.56.22-1200x826.jpeg",
        minibio: "Desenvolvedora e instrutora"
    })

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)