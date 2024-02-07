<h1> Preparando o ambiente </h1>

<h2>1 - Pré-requisitos</h2>

<h3>1.1 - NodeJs e VSCode</h3>

- [Node.js](https://nodejs.org/en/) Versão 12.2.0 ou superior.
- [VSCode](https://code.visualstudio.com/) Versão mais recente do VSCode.
  
<h3>1.2 - Yarn</h3>

No Windows, você pode baixar o instalador do Yarn via npm você pode executar os seguinte para comando para instalar Yarn:

```
npm install --global yarn
```

Verifique se o Yarn está instalado executando:

```
yarn --version
```

<h3>1.3 - Vite</h3>

Digite o seguinte comando para instalar o Vite globalmente usando o gerenciador de pacotes NPM:

 ```
 npm install -g vite
 ```


<h2>2 - Criando o projeto React pelo Vite</h2>

<h3>2.1 - Criando</h3>

Execute o seguinte comando em seu terminal para criar um novo projeto do Vite:

```
yarn create vite nome-do-projeto --template react-ts
```

Navegue até a pasta do seu projeto conforme indicado:

```
cd nome-do-projeto
```
Em seguida, use o yarncomando para instalar as dependências do projeto:
```
yarn
```

<h3>2.2 - Iniciando o servidor </h3>

Dentro do diretório nome-do-projeto, use o seguinte comando para executar o servidor de desenvolvimento:
```
yarn dev
```

<h2>3 - React: Bibliotecas</h2>

<h3>3.1 - Tailwind CSS</h3>

Algumas das bibliotecas de estilização mais populares em React incluem:

- CSS Modules: permite escrever CSS localmente e importá-lo em um componente React específico.
- Styled Components: permite escrever CSS em arquivos JavaScript e criar componentes React estilizados com base nesse CSS.
- Material-UI: é uma biblioteca de componentes React pré-construídos e estilizados que seguem as diretrizes de design do Material Design.
- Bootstrap: é uma biblioteca de estilos e componentes responsivos que podem ser usados em conjunto com React.
- Tailwind CSS: é uma biblioteca de estilos utilitários que permite estilizar rapidamente os componentes React sem escrever CSS personalizado.

<h4>Instalando e configurando</h4>
3.1.1 - Instale tailwindcssvia npm e execute o comando init para gerar seu arquivo 'tailwind.config.js'.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
``` 

3.1.2 - Adicione os caminhos a todos os seus arquivos de modelo em seu `tailwind.config.js` arquivo.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3.1.3 - Adicione as `@tailwind` diretivas para cada uma das camadas do Tailwind ao seu arquivo. `./src/index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<h3>3.2 - React router dom</h3>

As bibliotecas de roteamento front-end mais populares incluem:

- React Router: uma biblioteca de roteamento para aplicativos React, que permite definir rotas de forma declarativa e renderizar componentes baseados em URL.
- Vue Router: uma biblioteca de roteamento para aplicativos Vue.js, que permite definir rotas de forma declarativa e renderizar componentes baseados em URL.
- Angular Router: uma biblioteca de roteamento para aplicativos Angular, que permite definir rotas de forma declarativa e renderizar componentes baseados em URL.

Essas bibliotecas de roteamento ajudam a gerenciar a navegação em um aplicativo SPA(Single Page Application), permitindo que os usuários naveguem pelo aplicativo sem recarregar a página inteira a cada mudança de rota. Além disso, as bibliotecas de roteamento fornecem recursos adicionais, como redirecionamentos, navegação programática e animações de transição, que ajudam a melhorar a experiência do usuário em um aplicativo de front-end.

<h4>Instalando e configurando</h4>

3.2.1 - Digite em seu terminal:
```
yarn add react-router-dom
```

<h3>3.3 - Phosphor</h3>

[Phosphor](https://phosphoricons.com/) é uma família de ícones flexível para interfaces, diagramas, apresentações.

3.3.1 - Digite em seu terminal:
```
npm install @phosphor-icons/react
```

<h3>3.4 - Axios</h3>

As bibliotecas de comunicação HTTP mais comuns em React são o [Axios](https://axios-http.com/), Fetch e jQuery. Cada uma dessas bibliotecas tem suas próprias vantagens e desvantagens e, em geral, são utilizadas para realizar operações de CRUD (Create, Read, Update, Delete) em um backend.

Essas bibliotecas normalmente utilizam o conceito de Promises ou Callbacks para realizar as requisições HTTP de forma assíncrona e lidar com a resposta. Isso significa que a requisição é feita em segundo plano, enquanto a aplicação continua a funcionar normalmente, e quando a resposta é recebida, a biblioteca chama uma função de retorno para lidar com os dados.

No React, essas bibliotecas podem ser utilizadas em conjunto com os hooks, como o useState e o useEffect, para armazenar e exibir os dados recebidos da API. Por exemplo, é possível fazer uma requisição para uma API no momento em que um componente é montado usando o useEffect e, em seguida, armazenar os dados recebidos no estado da aplicação com o useState, para que possam ser exibidos na tela.

<h4>Instalando e configurando</h4>

3.4.1 - Digite em seu terminal:
```
yarn add axios
```

<h3>3.5 - React Loader Spinner</h3>

O [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/) fornece um componente giratório React SVG simples que pode ser implementado para operação de espera assíncrona antes que os dados sejam carregados na visualização.

<h4>Instalando e configurando</h4>

3.5.1 - Digite em seu terminal:
```
yarn add react-loader-spinner
```
