
# Storytelling

Como produzir o seu próprio storytelling com imagens de observação da terra e dados geoespaciais, utilizando ferramentas gratuitas e open-source. 

O mais famoso storytelling existente no mercado pertence a ESRI e é chamado de... [Storytelling](https://www.esri-portugal.pt/pt-pt/arcgis/produtos/arcgis-storymaps/overview) . É realmente um produto muito bom e fácil de usar e criar histórias comoventes, que alavancam os projetos e exaltam os resultados. Contudo, é uma ferramenta que possui um software proprietário e se você deseja utilizar então deve possuir licença da ESRI (paga).

Diante desse cenários, algumas outras ferramentas existem de forma totalmente gratuita e que fazer o mesmo serviço para a criação dessas histórias. 

Este repositório possuirá 3 partes. A primeira parte, utilizaremos os elementos presentes no [EOPF](https://explorer.eopf.copernicus.eu/software-services/). Na segunda parte vamos utilizar o clássico [Quarto](https://quarto-dev.github.io/quarto-gallery/page-layout/tufte.html), que nos permite criar um storytelling a partir de jupyter notebooks e quiça explorando melhor os arquivos '.qmd'. Já na terceira parte, vamos utilizar uma escrita mais elegante com os elementos [tufte](https://github.com/tansh-kwa/tufte-project-pages)

## Tres tipos de storytelling nesse repositório

- EOPF utilizando EOx elements and storytelling
- Quarto - utilizando os arquivos .qmd para construir html mais avançados
- Tufte - Projeto similar ao quarto, porém possui uma formatação e consequente um css, elegante. 

## PARTE I - EOPF and EOx elements 

Exemplo: 

Esta parte é baseada em parte do trabalho desenvolvido pela [DevSeed](https://developmentseed.org/) a qual vem desenvolvendo parte dos elementos que vamos utilizar, bem como várias ferramentas e bibliotecas em python, javascript e outras linguagens que nos permitem acessar formatos mais modernos de dados geoespaciais como zarr. 

Para esse formato de storytelling, precisamos de 3 arquivos:
- package.json
- index.html 
- something.md

Esse formato é baseado mais em Javascript e HTML, contudo, acredito que os resultados são mais alto nível. 

Primeiramente, precisa instalar o javascript no seu computador. Recomendo pesquisar na internet como instalar o npm node no seu computador, dependendo o seu sistema operacional pode ser um pouco diferente.

```
Install it once:

Go to https://nodejs.org and install the LTS version (the one labelled "Recommended for most users"). The installer includes npm.
Open a terminal and check:
node -v   # e.g. v22.x or newer
npm -v    # e.g. 10.x or newer
```

Se você instalou, digitou o comando acima e mostou as versões, então deu tudo certo, caso tenha dado um erro, é necessário descobrir o erro e instalar corretamente o node.

Esse npm é um gerenciador de pacotes do Javascript. Pense como se fosse o `uv`para gerenciar os pacotes do python, só que para os pacotes de JS. Npm vem com o `Node.js` que é um programa que roda   JavaScript fora do browser. 

A gente precisa disso porque toda a construção da ferramentas e do motor por de trás é feito em JavaScript, e elas estão no `package.json` (@eox/storytelling, @eox/map). Você só precisa instalar esses pacotes através do: 

```
npm install 
```
Para dar certo, seu terminal precisa estar no mesmo caminho que existe o arquivo chamado `packages.json`. 

Assim, o npm le os pacotes dentro do package.json e cria o package-lock.json com as versões exatas. Ele baixa tudo dentro do node_modules/. Essa pasta, node_modules/ pode ser grande e não deve ser editada. 

Isto são os pacotes dentro do package.json:

    @eox/storytelling	Turns ndci.md into scrollable sections (<eox-storytelling>)
    @eox/map	Draws the maps inside the story (<eox-map>)
    ol (OpenLayers)	The map engine underneath @eox/map; also used directly in main.js
    chroma-js	Colour scales, used in the NDVI example
    toolcool-range-slider	A range slider, used in the NDVI example
    vite (dev only)	The development server that serves the page and reloads it when you save

Uma vez instalado os pacotes, tudo o que você escreve deve estar dentro do seu arquivo markdown.

### Escrevendo a sua história no arquivo markdown

Para escrever o markdown, cada # cria uma nova sessão de storytelling. 


## Passando seu markdown dentro do HTML 

Então, você precisa apenas apontar dentro do seu HTML para o arquivo markdown com a sua história.


## Referencia de arquivo

[Eox-Elements](https://eox-a.github.io/EOxElements/?path=/docs/about--docs&globals=outline:!true;viewport.value:1280-541;code-language:vanilla)

# Acknoledgments

The development of the tools is attributed to DevSeed. And open-sourced through the License in eopf tools.
