# Projeto SkillMatch

---

## 🗂️ Quadro Kanban

| To Do                  | Doing             | Review       | Done                      |
| ---------------------- | ----------------- | ------------ | ------------------------- |
| Documentação README    | Análise de código | Refatoração  | Implementação das funções |
| Testes de execução     | Melhorias UX      | Revisão Docs |                           |
| Branchs: Docs, Analise | Develop           | Main         |                           |

---

## 📝 Resumo do Projeto

SkillMatch é um sistema simples em JavaScript para análise de compatibilidade entre candidatos e vagas de emprego. Ele avalia as habilidades do candidato, classifica as vagas conforme a compatibilidade, sugere recomendações de estudo e destaca a vaga mais adequada.

---

## 🌐 Como a Internet Funciona (Resumo)

A internet é uma rede global de computadores que se comunicam por meio de protocolos (como TCP/IP). Quando você acessa um site, seu computador envia uma requisição para um servidor, que responde com os dados do site, permitindo a navegação.

---

## 🛠️ Sobre const, let e var

- **const**: Cria uma variável cujo valor não pode ser reatribuído. Ideal para valores constantes.
- **let**: Cria uma variável com escopo de bloco, podendo ser reatribuída.
- **var**: Tem escopo de função e pode causar bugs por hoisting e reatribuição inesperada. **Evite usar var**; prefira const e let para maior segurança e previsibilidade.

---

## 🔢 Funções de Array Utilizadas

- **filter**: Cria um novo array com elementos que passam em um teste (ex: filtrar requisitos atendidos).
- **map**: Cria um novo array com o resultado de uma função aplicada a cada elemento (ex: classificar vagas).
- **forEach**: Executa uma função para cada elemento do array (ex: listar requisitos faltantes).
- **reduce**: Reduz o array a um único valor (ex: encontrar a vaga mais compatível).
- **includes**: Verifica se um array contém determinado valor (ex: checar se o candidato possui uma habilidade).
- **Set**: Estrutura para armazenar valores únicos (ex: recomendações de estudo sem duplicatas).

---

## 🌳 Branches Utilizadas

- **Main**: Versão estável do projeto
- **Develop**: Desenvolvimento de novas funcionalidades
- **Docs**: Atualizações e melhorias na documentação
- **Analise**: Análises e experimentos de código

---

## ▶️ Como Executar

### No Navegador

1. Abra o arquivo `skillmatch.js` em um editor de texto.
2. Copie o conteúdo e cole no console do navegador (F12 > Console).
3. Veja os resultados no console.

### No Prompt (Node.js)

1. Certifique-se de ter o Node.js instalado.
2. No terminal, navegue até a pasta do projeto.
3. Execute: `node skillmatch.js`

---

## 📁 Estrutura de Pastas

```
Desafio/
├── README.md
└── skillmatch.js
```

---

## 🎯 Objetivo, Técnicas e Métodos

O objetivo do projeto é demonstrar técnicas de análise de compatibilidade entre candidatos e vagas usando JavaScript moderno. Foram utilizados:

- Programação orientada a objetos (classes e herança)
- Manipulação de arrays com métodos funcionais (`filter`, `map`, `reduce`, `forEach`)
- Uso de `Set` para evitar duplicidade
- Boas práticas de escopo com `const` e `let`
- Estruturação de código para fácil manutenção e expansão

---

## 🚫 Técnicas Não Utilizadas

Por falta de domínio e tempo, as seguintes técnicas importantes de JavaScript não foram aplicadas neste projeto:

- **Callbacks**: Funções passadas como argumento para serem executadas após uma operação terminar. Muito usadas para lidar com tarefas assíncronas, mas podem gerar o chamado "callback hell" se usadas em excesso.
- **Closure**: Função que "lembra" o escopo em que foi criada, permitindo acessar variáveis externas mesmo após o contexto original ter sido finalizado. Útil para encapsulamento e funções privadas.
- **Promises**: Objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona. Facilitam o encadeamento de operações e o tratamento de erros.
- **Async/Await**: Sintaxe moderna para trabalhar com Promises de forma mais simples e legível, permitindo escrever código assíncrono com aparência síncrona.

Essas técnicas são fundamentais para aplicações JavaScript mais avançadas e podem ser incorporadas em versões futuras do projeto.
