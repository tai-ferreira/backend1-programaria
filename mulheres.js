const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulheres(request, response) {
    response.json({
        nome: "Simara Conceição",
        imagem: "https://simaraconceicao.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-03-09-at-15.56.22-1200x826.jpeg",
        minibio: "Desenvolvedora e instrutora"
        },

        {
        nome: "Simara Conceição 2",
        imagem: "https://simaraconceicao.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-03-09-at-15.56.22-1200x826.jpeg",
        minibio: "Desenvolvedora e instrutora"
        },

        {
        nome: "Simara Conceição 3",
        imagem: "https://simaraconceicao.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-03-09-at-15.56.22-1200x826.jpeg",
        minibio: "Desenvolvedora e instrutora"
    }
    )

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulher", mostraMulheres))
app.listen(porta, mostraPorta)