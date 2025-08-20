# Pixels Art 🎨

Projeto desenvolvido para praticar habilidades de HTML, CSS e JavaScript, criando um quadro de pintura com pixels e paleta de cores dinâmica.

## Funcionalidades

- Paleta de 4 cores (preto fixo + 3 aleatórias)
- Botão para gerar novas cores aleatórias
- Quadro de pixels personalizável (tamanho ajustável)
- Pintura de pixels com cor selecionada
- Botão para limpar o quadro
- Salvamento automático da paleta, desenho e tamanho do quadro no localStorage

## Como usar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Abra o arquivo `index.html` em seu navegador.
3. Use os botões e a paleta para criar sua arte!

## Testes

Os testes automatizados estão em [cypress/integration/project.spec.js](cypress/integration/project.spec.js). Para rodar os testes:

```sh
npm test
```

## Estrutura

- `index.html`: Estrutura da página
- `style.css`: Estilos visuais
- `script.js`: Lógica do quadro e paleta
- `cypress/`: Testes automatizados
