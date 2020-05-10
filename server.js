/*
// VARIAVES

const mensagem = "oi como vai?" //string
const number = 23 //numero

function soma() { //exemplo de função

    const numero1 = 10
    const numero2 = 20      
    console.log(numero1 + numero2)
}
soma()
*/

//usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()



const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore eveniet laudantium veniam deleniti neque quod aut quisquam distinctio accusantium perspiciatis sapiente, quo, quas itaque nobis eligendi molestias reprehenderit ratione.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore eveniet laudantium veniam deleniti neque quod aut quisquam distinctio accusantium perspiciatis sapiente, quo, quas itaque nobis eligendi molestias reprehenderit ratione.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore eveniet laudantium veniam deleniti neque quod aut quisquam distinctio accusantium perspiciatis sapiente, quo, quas itaque nobis eligendi molestias reprehenderit ratione.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore eveniet laudantium veniam deleniti neque quod aut quisquam distinctio accusantium perspiciatis sapiente, quo, quas itaque nobis eligendi molestias reprehenderit ratione.",
        url: "http://rocketseat.com.br"
    },
]




// configurar arquivos estaticos (CSS, scripts, imagens)
server.use(express.static("public"))

// configuração nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//criei uma rota
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){

    const reversedIdeas = [...ideas].reverse()

    let lastIdeias = []

    for (let idea of reversedIdeas) {
        if (lastIdeias.length < 2) {
            lastIdeias.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeias})
})

server.get("/ideias", function(req, res){
    return res.render("ideias.html", { ideas: ideas.reverse()})
})

server.listen(3000) //liguei meu servidor na porta 3000








