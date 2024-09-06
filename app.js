function pesquisar() {
    // Essa função é responsável por buscar dados e exibir os resultados na página.
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos
    let  campoPesquisa = document.getElementById("campo-pesquisa").value; //para obter o valor do campo input


    // se o usuário não pesquisar nada:
    if (campoPesquisa == "") {
        section.innerHTML = "Nada foi encontrado. Experimente pesquisar por atletas ou esportes!"
        return
    } // a função não é executada

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) { // Itera sobre cada dado na lista de resultados.
        // Cria um novo elemento div para cada resultado, com as informações do dado.

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        
        // para saber se o valor digitado na busca está presente no banco de dados:
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento de resultados
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
        }
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    // Atribui o HTML gerado à seção de resultados.
    section.innerHTML = resultados;
}