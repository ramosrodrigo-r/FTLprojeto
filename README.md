# Impactos do El Nino no Brasil

Projeto final para o Future Tech Leaders Brasil 2026, Space Tech Bootcamp.

🌎 **Veja o storytelling publicado:** https://luizhenrque.github.io/CAPSTONE-FTL-BRASIL/

O site é atualizado automaticamente (via GitHub Actions) toda vez que um Pull Request é aceito na branch `main`. Leva 1–2 minutos depois do merge.

## Grupo

- Rodrigo Ramos Rebouças
- Andreza de Souza Dias
- Laíne Reis de Moura
- Laissa
- Melissa Francesca de Souza Raymundo
- Renato Ferraz de Mendonça Coelho
- Samuel Castro de Castro


## Até agora mapeamos os seguintes impactos:

Escreva o impacto na sua região nesse lista! 


- Seca extensiva no agreste de Pernambuco. Local encontrado para retratar a seca foi Panelas-PE
- El Niño na Paraíba em 2026: calor, irregularidade das chuvas e riscos para a água e a produção rural, distinguindo previsões de registros observados.
- Queimadas na regiao amazonica e do Para
- Microtornado no oeste do Rio Grande do Sul


## Coisas para fazer:

- Eu recomendo vcs a escreverem o texto na mão ao invés de cegamente acreditar nas palavras de qualquer LLM. Isso também deixa o texto mais humanizado. 
- Fazer uma foto de para a capa de entrada do storytelling. Alguma foto para a capa que apanhe essa ideia de El Nino e eventos extremos. Se usar a foto de alguem não esqueça de citar.  
- Elencar mais potenciais danos e eventos extremos que podem estar ligados ao el nino. (escrever na lista acima)
- Buscar fotos e reportagens dos eventos e adicionar na pasta `assets/fotos_reportagens`
- Breve estudo sobre as queimadas no Pará
- **Modificar o texto do storytelling. Até agora não há texto nenhum.**
- Adicionar os logos do FTL. 
- Sinta-se a vontade para fazer qualquer estudo relaciona a um evento extremo. Basta realiza-lo em um novo notebook na pasta `studies`
- Não tenha medo de contribuir e mexer aqui. Se você não souber como ajeitar o arquivo do storytelling, então só escreva o texto que você deseja num .md e depois complemente o README citando onde voce gostaria que o texto fosse alocado, alguém irá modificar e ajeitar para você.


## Como contribuir

Você precisa ter estes programas instalados no seu computador:

| Programa | Para quê | Como instalar | Como conferir |
|---|---|---|---|
| **Git** | baixar o repositório e enviar suas mudanças | https://git-scm.com/downloads | `git --version` |
| **Node.js 22** (ou 20.19+) | rodar o storytelling no navegador | https://nodejs.org (versão LTS) | `node --version` |
| **uv** | instalar o Python e as bibliotecas dos estudos | https://docs.astral.sh/uv/getting-started/installation/ | `uv --version` |

O `npm` já vem junto com o Node.js. 

> 💡 **Só quer mexer no texto ou nas imagens do storytelling?** Então você só precisa de **Git** e **Node.js**. O `uv` (Python) só é necessário para quem vai rodar os notebooks da pasta `studies/`.

### Passo a passo

**De um fork nesse repositorio e clone em seu computador**. Comece com um git checkout para trabalhar na sua branch. **Deixe a main livre.**

Em detalhes:

1. Na página do repositório no GitHub, clique no botão **Fork** (canto superior direito). Isso cria uma cópia do projeto na sua conta.
2. No seu fork, clique em **Code** e copie a URL. Depois, no terminal:

```bash
git clone https://github.com/SEU-USUARIO/CAPSTONE-FTL-BRASIL.git
cd CAPSTONE-FTL-BRASIL
```

3. Todos os comandos abaixo devem ser rodados **dentro dessa pasta** (`CAPSTONE-FTL-BRASIL`).
4. Crie a sua branch:

```bash
git checkout -b seu-nome
```

Depois, instalem os pacotes de uv para rodar o python,

aqui voce inicia o projeto
```bash
uv init 
```

> ⚠️ **Atenção:** o projeto já tem o arquivo `pyproject.toml`, então o `uv init` **não é necessário** (ele pode dar erro dizendo que o projeto já existe; pode ignorar). Basta rodar o `uv sync` abaixo.

aqui voce instala as bibliotecas
```bash
uv sync 
```

O `uv sync` cria uma pasta `.venv/` com o Python e todas as bibliotecas (geopandas, xarray, etc.). A primeira vez demora alguns minutos.

**Como rodar os notebooks (`.ipynb`):** abra o notebook no VS Code e, no canto superior direito, clique em **Select Kernel** -> **Python Environments** -> escolha o `.venv` do projeto. 

**Chave de API (`.env`):** alguns estudos usam uma chave guardada num arquivo `.env`, que **não vai para o GitHub** (está no `.gitignore`). Se um notebook reclamar da variável `EARTH-HUB-API`, crie um arquivo chamado `.env` na raiz do projeto com:

```
EARTH-HUB-API=sua-chave-aqui #SE VC QUISER ACESSAR OS DADOS DO ERA5 NO ESTUDO
```


**Dados:** os dados brutos também não vão para o GitHub porque são pesados. Os notebooks baixam ou geram esses dados quando você roda. **Salve todas as figuras em `assets/`**

Depois, **instalem as bibliotecas de javascript**

```bash
npm install # aqui vc instala as bibliotecas necessarias pro storytelling
```

Isso vai ler o arquivo `package.json`e instalar todas as dependências. Depois de instalado, você consegue ver a renderização do projeto direto no terminal de comando, rodando:

Aqui voce consegue visualizar como o storytelling esta ficando. 
```bash
npm run dev ## visualize o storytelling
```
Isso abre um local host na porta 5173. Só abrir esse link em qualquer navegador e você é capaz de ver o storytelling produzido. http://localhost:5173/

Algumas dicas sobre o `npm run dev`:

- O terminal fica "travado" mostrando o endereço: isso é normal, o servidor está rodando. Deixe essa janela aberta enquanto trabalha.
- Quando você salvar o `elnino.md`, basta recarregar a página no navegador (F5) para ver a mudança.
- Para parar o servidor, aperte `Ctrl + C` no terminal.

Perceba que o storytelling inteiro é escrito dentro de `elnino.md`! Todos os outros arquivos python são de estudos auxiliares para produzir as imagens que devam estar no storytelling. 

### ⚠️ Regra importante: caminhos das imagens

Ao colocar uma imagem ou arquivo no `elnino.md`, escreva o caminho **sem a barra `/` no começo**:

```markdown
✅ certo:  ![Minha figura](assets/fotos_reportagens/minha_foto.png)
❌ errado: ![Minha figura](/assets/fotos_reportagens/minha_foto.png)
```

Com a barra, a imagem aparece no `localhost`, mas **some no site publicado** no GitHub Pages (porque o site fica dentro da subpasta `/CAPSTONE-FTL-BRASIL/`).

### **Vocês podem trabalhar em 5 frentes aqui**:

- Pesquisa: realizar a pesquisa dentro do `studies/`. Criem um notebook e tentem de alguma forma fazer o link entre o evento extremo observado e o El Nino. Por exemplo, se você quer demonstrar a seca acontecendo na Paraiba, então você poderia fazer um estudo climático e analisar o quanto essa seca se difere das outras numa série temporal. Ou demonstrar com algum índice e imagem de satélite que a região possui uma baixa umidade do solo, por exemplo. 
- Ajeitando o texto: Para ajeitar o texto basta modificar o arquivo `elnino.md`. Percebam que cada as # dao origem aos titulos e web components e o texto fica em paragrafo solto. 
- Ajeitando elementos: Sinta-se a vontade para ajeitar os elementos, adicionar images ou coisas do tipo. A documentação necessária voce encontra no próximo paragrafo.
- Buscando imagens para complementar os impactos. Uma vez com essas imagens voce pode inserir direto no storytelling ou voce pode adicionar na pasta `assets/fotos_reportagens` e deixar escrito abaixo para alguém adicionar para você. 
- Citando um possível impacto do evento extremo que você observou. Basta adicionar ao nosso README.md

- Todas as imagens que voce vê no storytelling estao armazenadas dentro da pasta `assets/`

### Estrutura das pastas
Essa parte aqui foi vibecodada para facilitar o entendimento do repo com vcs 

```
├── elnino2.md            ← o storytelling inteiro (texto, mapas, imagens)
├── index.html           ← página que carrega o elnino.md (raramente precisa mexer)
├── assets/              ← imagens e dados que aparecem no site
│   ├── fotos_reportagens/
│   ├── oisst/
│   ├── panelas/
│   └── seca/
├── studies/             ← notebooks e scripts de pesquisa (Python)
├── old_studies/         ← rascunhos antigos (não vão para o GitHub)
├── vite.config.js       ← configuração do servidor/build (não precisa mexer)
├── .github/workflows/   ← automação que publica o site no GitHub Pages
├── package.json         ← bibliotecas JavaScript
└── pyproject.toml       ← bibliotecas Python
```

### Como o `elnino2.md` vira um site do storytelling
Explicação da maracutaia.

Cada # demarca uma sessão do storytelling. Isso é baseado nos componentes criados pelo Eox components. Vide o link para a documentação abaixo. 

- `#` com `mode="hero"` → a capa de entrada.
- `##` → começa uma nova seção do storytelling.
- Texto solto embaixo de um título → vira parágrafo.
- `<!--{ ... }-->` logo depois de um título → configurações daquela seção. Por exemplo, `as="eox-map" mode="tour"` transforma a seção num mapa interativo, e `as="img" mode="tour"` numa sequência de imagens.
- `###` dentro de uma seção `mode="tour"` → cada "passo" do tour (cada mudança de mapa ou de imagem enquanto a pessoa rola a página).
- Imagem simples dentro do texto: `![descrição](assets/pasta/imagem.png)`

O jeito mais fácil de aprender é copiar uma seção que já existe no `elnino.md` e ir modificando.

### Conferindo antes de enviar

Antes de abrir o Pull Request, você pode testar exatamente como o site vai ficar publicado:

```bash
npm run build
npm run preview
```

Abra o link que aparecer (normalmente http://localhost:4173/) e role a história inteira para ver se tudo carrega. Se o `npm run build` der erro, o site publicado também vai falhar.

### Enviando sua contribuição (Pull Request)

Depois de fazer suas mudanças:

```bash
git add .
git commit -m "Descreva o que você fez"
git push origin seu-nome
```

Depois, abra o seu fork no GitHub. Vai aparecer um botão **Compare & pull request**. Clique nele, escreva o que você fez e envie. Quando o Pull Request for aceito na `main`, o site é atualizado sozinho.

> Cuidado para não fazer commit de arquivos pesados de dados ou do `.env`. Confira com `git status` antes do `git add`.

### Mantendo seu fork atualizado

Como várias pessoas mexem no mesmo `elnino.md`, atualize o seu fork antes de começar a trabalhar, para evitar conflitos:

```bash
# só na primeira vez:
git remote add upstream https://github.com/ramosrodrigo-r/FTLprojeto

# sempre que for começar a trabalhar:
git checkout main
git pull upstream main
git checkout seu-nome
git merge main
```

### Problemas comuns

| Problema | Solução |
|---|---|
| `command not found: uv` / `node` / `npm` | O programa não está instalado, ou o terminal foi aberto antes da instalação. Instale (veja a tabela no início) e abra um terminal novo. |
| Erro do Vite falando da versão do Node | Seu Node.js é antigo. Instale a versão 22 LTS. |
| `uv init` diz que o projeto já existe | Normal, pode ignorar. Rode só o `uv sync`. |
| A página abre em branco | Confira se rodou `npm install` antes, e veja o terminal do `npm run dev` para ver se há erro. |
| Porta 5173 ocupada | Já tem outro `npm run dev` aberto. Feche-o com `Ctrl + C`, ou use o novo endereço que o Vite mostrar. |
| Imagem aparece no localhost mas não no site | O caminho começa com `/`. Veja a "Regra importante: caminhos das imagens" acima. |
| O notebook não encontra as bibliotecas | Selecione o kernel `.venv` do projeto (veja "Como rodar os notebooks"). |

### Documentação

- [Documentos do web componentes para storytelling](https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--primary)
- [Outros Elementos](https://explorer.eopf.copernicus.eu/software-services/)
- [Video Aula de como começar com storytelling](https://github.com/emanuel-gf/FTL-Storytelling-I)
- [lindo exemplo de storytelilng](https://explorer.eopf.copernicus.eu/story/?id=ndci)
- A aula sobre como modificar esse storytelling está no grupo do Teams.

## HELP

Aqui vocês escrevam o que fizeram e qual a ajuda gostaria que alguem fizesse.
Ex:
- Busquei 2 imagens para complementar as queimadas da Amazônia. As imagens estão dentro da pasta `assets/fotos_reportagens` e possuem o nome da `nome_da_imagem.png` e `nome_da_imagem2.png`. Ficaria grato se alguém adicionasse-as no arquivo do storytelling pois não entendo muito bem como adicionar. Nome_De_Quem_Escreveu_Isso (FULANO. )
