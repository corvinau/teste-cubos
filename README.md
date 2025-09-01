# Sobre o projeto

Este projeto foi desenvolvido para o processo seletivo da empresa Cubos, e consiste em uma listagem de filmes baseada no retorno da API do [TMDB](https://developer.themoviedb.org/docs).

## Explicação do uso do projeto

A aplicação mostra os filmes cadastrados na API, filtra por pesquisa por nomes e mostra os detalhes de cada filme.

## Iniciando a aplicação

As instruções abaixo vão lhe permitir obter uma cópia do projeto e rodar a aplicação localmente.

### Pré-requisitos

Para rodar a aplicação, você precisa ter o Node.js instalado na sua máquina.

### Instalação

Para acessar o projeto, basta clonar o repositório ou realizar o download dos arquivos do projeto.

Após clonar o repositório, acesse a pasta do projeto e instale as dependências utilizando o seguinte comando no seu terminal:

```sh
npm install
```

Depois entre no projeto e procure o arquivo `.env`, faça uma cópia dele com o nome `.env.development` e ali coloque a sua chave da API do TMDB.

Após instalar as dependências e configurar o arquivo de variáveis de ambiente, utilize o seguinte comando no seu terminal para iniciar a aplicação:

```sh
npm run dev
```

Com isso, a aplicação estará rodando na sua máquina. Para acessar a aplicação, basta acessar o <code>localhost</code> no seu navegador.

## Acessando o projeto em um servidor

Para visualizar o projeto rodando em um servidor da [`Vercel`](https://vercel.com/), acesse: [teste-cubos.vercel.app/](https://teste-cubos.vercel.app/)

## Tecnologias utilizadas

- <b>ReactJS:</b> Biblioteca JavaScript para construir interfaces com base em componentes.
- <b>React Router Dom:</b> Lida com a navegação e o roteamento da aplicação.
- <b>Axios:</b> Biblioteca para fazer requisições HTTP (chamadas à API) de forma simples.
- <b>Radix colors:</b> Biblioteca de cores para criar interfaces consistentes. Fornece um conjunto de cores já prontas.
- <b>TypeScript:</b> Superset de JavaScript que adiciona tipagem estática ao código.
- <b>Vite: </b> Bundler e servidor de desenvolvimento. Compila o código durante o desenvolvimento e otimiza para o ambiente de produção.
- <b>ESLint:</b> Ferramenta para identificar e corrigir padrões problemáticos no código JavaScript/TypeScript, garantindo consistência.

## Observações

Foram disponibilizadas todas as informações e designs necessários para o desenvolvimento do projeto nesse [endereço](https://git.cubos.io/cubos/desafios-tecnicos/desafio-tecnico-web).
