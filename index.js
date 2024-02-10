const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        "Manipular dados no banco de dados",
        "Estilizar páginas HTML",
        "Adicionar interatividade às páginas da web",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variable myVar = 10;",
        "let myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento de Orientação Móvel",
        "Modelo de Objetos Distribuídos",
        "Modelo de Objeto de Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para exibir algo no console em JavaScript?",
      respostas: [
        "display()",
        "log()",
        "print()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa uma única string",
        "Uma coleção ordenada de valores",
        "Um objeto utilizado para estilizar páginas HTML",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos são iguais",
        "'==' compara apenas valores, '===' compara valores e tipos",
        "'===' compara apenas valores, '==' compara valores e tipos",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que chama outra função",
        "Uma função que é passada como argumento para outra função",
        "Uma função que retorna um valor",
      ],
      correta: 1
    },
    {
      pergunta: "Como se escreve um comentário de linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Uma forma de representar dados estruturados em formato de texto",
        "Um método para estilizar páginas HTML",
      ],
      correta: 1
    },
    {
      pergunta: "Como se previne vazamento de variáveis no escopo global em JavaScript?",
      respostas: [
        "Usando 'var' para declarar variáveis",
        "Não é possível evitar vazamento de variáveis globais",
        "Usando 'let' e 'const' para declarar variáveis",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set ()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  
  // loop
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
        
      }
      mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
    }
  
  
     quizItem.querySelector('dl').appendChild(dt)
   }
   
   quizItem.querySelector('dl dt').remove()
   // na tela
    quiz.appendChild(quizItem)
  
  }