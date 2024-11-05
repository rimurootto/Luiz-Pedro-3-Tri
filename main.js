function criaCartao(categoria,pergunta,ressposta){
    let container = document.getElementById("container")
    let article = document.createElement("article")
    article.className = "cartao"
    article.innerHTML = `
    <div class = "cartao-conteudo"
    <h3> ${categoria} </h3>
    <div class = "cartao-conteudo-pergunta">
    <p> ${pergunta} </p>
    </div>
    <div class = "cartao-conteudo-resposta">
    <p> ${ressposta} </p>
    </div>
    </div>
`
container.appendChild(article)
}
criaCartao("Palmeiras","Ele tem mundial?","Não, e ainda tomou 2x0 pelo corinthias.")