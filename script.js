window.addEventListener('DOMContentLoaded', function () {

    // selecionando o formulário do html = INPUT + SUBMIT
    const form = document.querySelector('form');
    // selecionando o botão check do html
    const botaoCheck = document.querySelector('#todoMarcarTodos')
    // selecionando a ul do html para inserir as tarefas (li) dentro
    const listasTarefas = document.querySelector('#todoLista');
    // selecionando o botão limpar.
    const botaoLimpar = document.querySelector('#todoRemoverTodos');
    
    // esta função executa 3 coisas:
    // A primeira é cancelar o comportamento padrão de recarregar o navegador com o preventDefault
    // a segunda é 
    form.addEventListener('submit', function(e){
        e.preventDefault() // usa pq o submit no html recarrega a página 
        // seleciono o valor o input e o valor que é digitado nele
        const input = document.querySelector('#todoInput').value.trim()
        // trim - remove os espaços em branco (whitespaces) do início e/ou fim de um texto.
        
        if(!input){ // o input está vazio irá retornar um alert
            return alert('Por favor preencher a tarefa')
        }
// input com o valor irá retornar a função addTarefa e em seguida resetar o input
// form.reset quer dizer que o campo do formulario deve ser resetado após a ação da função
        return addTarefa(input), form.reset();
    })

    //função para adicionar a tarefa digitada no input para dentro da lista dividida em 3 partes
    function addTarefa(input){
        
    // neste bloco estou criando os elementos para receberem os valores abaixo e depois acrescentar com o appendChild
        // criando a li na div da ul no html
        const tarefa = document.createElement('li');
        // criando um paragráfo que será cada linha de tarefa
        const paragrafo = document.createElement('p');
        // criando o span que irá receber o x para remover a tarefa
        const span = document.createElement('span');

    // neste bloco estou definindo os valores para cada elemento criado
        // adicionando o x dentro do span
        span.innerText = 'x'; // o x que irá excluir a tarefa e precisa de uma função para tal
        // chamando o paragrafo apra receber o valor do input
        paragrafo.innerText = input;
/*
obs:
Para estilizar no css o botão x tem que criar uma classe para ele 
span.classList.add('todo__btn-excluir');
*/
    // neste bloco estou acrescentando valores com o appendChild aos elementos criados acima
        // chamando a tarefa (li) criada em cima e acrescentando o valor do paragrafo
        tarefa.appendChild(paragrafo);
        // colocando o span dentro da tarefa
        tarefa.appendChild(span);
        // colocando a tarefa dentro da lista de tarefa ul
        listasTarefas.appendChild(tarefa);

    // neste bloco eu adiciono os  eventos
        //ao escutar o click no conteúdo do paragrafo ele deve disparar a função e ser marcado como checked
        paragrafo.addEventListener('click', function(){
            // chamando o paragrafo e adicionando a class toggle - alternancia de marcado e não marcado com check 
            paragrafo.classList.toggle('checked') 
            // toggle é alternancia e pode em algumas situações substituir o if e else
        })
    // função para tornar o X do paragrafo um botão de remover o valor do paragrafo
        // adicionando o evento de click 
        span.addEventListener('click', function(){
        // definindo a função remove para a tarefa que é o span
        tarefa.remove()
        })
    } 
    // função do botão limpar
        // adicionando o evento de click 
        botaoCheck.addEventListener('click', function(){
        // criando a variável itens e atribuindo a seleção de todos os paragrafos
        const itens = document.querySelectorAll('p');
        // atribuindo para cada item (forEach) a função de add check
        //forEach(function = callback(itens =valor corrente)) executa uma dada função em cada elemento de um array.
        itens.forEach(function(itens){
        // para cada item não marcado como check pelo função click com toogle acima ele irá adicionar o checked
        itens.classList.add('checked')
        })
    
            
        })
        // add evento click ao botão limpar e disparar a função 
            botaoLimpar.addEventListener('click', function(){
                // definindo itens como li
                const itens = document.querySelectorAll('li');
                // para cada item li ao clicar remover
                itens.forEach(function(itens){
                    //remover itens (li) limpar a lista toda 
                    itens.remove();
                })
    
            })
    })