# 🏴‍☠️ O Enigma do Tesouro Pirata 💰


Uma aplicação web interativa que desafia o usuário a resolver um enigma matemático para encontrar o lendário Tesouro do Capitão Barba Azul.

## 📖 Sobre o Projeto

Ahoy, jovem programador! Esta aplicação apresenta um desafio numérico inspirado em aventuras piratas. O objetivo é descobrir a posição do tesouro através de um cálculo matemático específico: 
Encontrar o maior número ímpar cuja soma de todos os números ímpares anteriores (incluindo ele mesmo) não exceda 1000.

## 🎯 O Desafio

"O tesouro está na posição x, onde x é o termo principal da sequência numérica descrita pelo pirata maluco, onde deve-se somar os números ímpares até atingir o maior total menor ou igual a 1000."

Resposta: ``31º: 61 → Soma: 961``

## 🚀 Tecnologias Utilizadas

**HTML5** - Estrutura semântica e acessível
**CSS3** - Design moderno com animações personalizadas
**JavaScript (ES6+)** - Lógica de programação e interatividade
**Design Responsivo** - Adaptável a todos os dispositivos

## 📁 Estrutura do Projeto
```
desafio_288/
│
├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica da aplicação
├── assets/
│   └── video-background.mp4  # Vídeo de fundo (adicione seu vídeo aqui)
└── README.md           # Este arquivo
```

## 🎮 Como Usar

Clone ou baixe o projeto

Abra o index.html em seu navegador
Clique em "DECIFRAR" para resolver o enigma
Use "RETORNAR" para ocultar os resultados

## ✨ Funcionalidades
### 🎨 Interface

Design temático pirata com cores douradas e elementos visuais
Vídeo de fundo para imersão completa
Container posicionado à esquerda com design moderno
Animações suaves nos botões e transições

### 🧮 Cálculo Matemático

Algoritmo eficiente para soma de números ímpares
Exibição detalhada do processo de cálculo
Validação completa mostrando por que a resposta é 729
Explicação passo a passo do raciocínio

### 📱 Responsividade

Design adaptativo para desktop, tablet e mobile
Botões horizontais em telas grandes
Stack vertical em dispositivos móveis
Scroll automático quando necessário

### ♿ Acessibilidade

Navegação por teclado (Tab + Enter)
Contraste adequado de cores
Labels claros e semânticos
Estrutura HTML acessível

### 🔧 Personalização
Alterando o Vídeo de Fundo
```
html
<!-- No index.html -->
<video id="background-video" autoplay muted loop>
    <source src="assets/SEU-VIDEO.mp4" type="video/mp4">
</video>
```
Modificando o Limite do Cálculo
```
javascript
// No script.js, na função solveTreasureEnigma()
const limit = 1000; // Altere este valor
```
Customizando Cores dos Botões
```
html
<!-- No index.html -->
<button style="--clr: #SUA-COR">
```

## 📊 Como Funciona o Algoritmo

O algoritmo implementado segue esta lógica:

Inicia com o primeiro número ímpar (1)
Soma progressivamente cada número ímpar: 1, 3, 5, 7, 9...
Verifica se a próxima soma excederia 1000
Para quando a adição do próximo número ímpar ultrapassar o limite
Retorna o último número ímpar válido adicionado

**Exemplo do Cálculo:**

Soma até 39: 1+3+5+...+39 = 400
Próximo seria 41: 400+41 = 441
Continue até: 1+3+5+...+61 = 961
Próximo seria 63: 961+63 = 1024 (excede 1000)
### Resposta: 61 💎


## 🤝 Contribuindo

Fork o projeto
Crie uma branch para sua feature ( ``git checkout -b feature/AmazingFeature ``)
Commit suas mudanças ( `` git commit -m 'Add some AmazingFeature' ``)
Push para a branch ( ``git push origin feature/AmazingFeature ``)
Abra um Pull Request

## 📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor: [Luizfxdev](https://www.linkedin.com/in/luizfxdev)


*Desenvolvido com 💛 por um aventureiro dos mares digitais.*
