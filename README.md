# Bingo

Jogo de bingo interativo executado no navegador. O aplicativo sorteia números de 1 a 75 sem repetição, organiza os resultados nas colunas B-I-N-G-O e destaca o último número sorteado.

## Objetivo

Oferecer uma ferramenta simples para conduzir sorteios de bingo, exibindo os números chamados em uma interface visual.

## Funcionalidades

- Sortear um número aleatório de 1 a 75.
- Evitar que um número já sorteado apareça novamente.
- Distribuir os números nas colunas tradicionais do bingo: B (1–15), I (16–30), N (31–45), G (46–60) e O (61–75).
- Destacar e animar o último número sorteado.
- Iniciar o sorteio pelo botão **Sortear** ou pela tecla **Enter**.
- Avisar quando todos os 75 números já tiverem sido sorteados.
- Selecionar uma imagem de fundo aleatória entre os caminhos de imagem configurados no código.

## Tecnologias

- **HTML5** — estrutura da interface.
- **CSS3** — layout, cores e animação do último número.
- **JavaScript** — sorteio, organização e controle dos números chamados.

O jogo não utiliza frameworks. Há um arquivo jQuery em `libs/`, mas a lógica atual do jogo não depende dele.

## Estrutura do projeto

```text
.
├── index.html      # Página do jogo
├── estillo.css     # Estilos e animação
├── app.js          # Lógica do sorteio e distribuição dos números
└── libs/
    └── jquery.js   # Biblioteca incluída no repositório
```

## Website hospedado

Endereço convencional do GitHub Pages para este repositório:

[https://julialafaelly.github.io/Bingo/]

## Limitações

- Não há botão para reiniciar ou limpar os números sorteados sem recarregar a página.
- O histórico dos sorteios existe apenas enquanto a página estiver aberta.
- As imagens de fundo referenciadas pelo JavaScript não aparecem na estrutura atual do repositório.

## Licença

Nenhuma licença específica foi identificada no repositório. Consulte a pessoa autora antes de reutilizar ou redistribuir o projeto.
