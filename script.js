// Enigma do Tesouro Pirata - Script Principal
// Função para resolver o enigma dos números ímpares

class PirateTreasureSolver {
  constructor() {
    this.initializeElements();
    this.attachEventListeners();
  }

  // Inicializa os elementos do DOM
  initializeElements() {
    this.decipherButton = document.querySelector('.decifrar-btn');
    this.returnButton = document.querySelector('.retornar-btn');
    this.resultSection = document.getElementById('result-section');
    this.calculationDetails = document.getElementById('calculation-details');
    this.finalResult = document.getElementById('final-result');
  }

  // Anexa os event listeners aos botões
  attachEventListeners() {
    this.decipherButton.addEventListener('click', () => this.solveTreasureEnigma());
    this.returnButton.addEventListener('click', () => this.hideResults());

    // Navegação por teclado
    document.addEventListener('keydown', event => {
      if (event.key === 'Enter' && event.target === this.decipherButton) {
        this.solveTreasureEnigma();
      }
      if (event.key === 'Enter' && event.target === this.returnButton) {
        this.hideResults();
      }
    });
  }

  // Função principal que resolve o enigma
  solveTreasureEnigma() {
    const limit = 1000;
    const result = this.calculateOddNumbersSum(limit);
    this.displayResults(result);
  }

  // Calcula a soma dos números ímpares até o limite
  calculateOddNumbersSum(limit) {
    let sum = 0;
    let currentOddNumber = 1;
    let lastValidOddNumber = 1;
    const steps = [];
    let count = 0;

    // Itera através dos números ímpares
    while (true) {
      const nextSum = sum + currentOddNumber;

      // Verifica se a próxima soma excede o limite
      if (nextSum > limit) {
        break;
      }

      // Adiciona o número ímpar atual à soma
      sum = nextSum;
      lastValidOddNumber = currentOddNumber;
      count++;

      // Armazena os passos para mostrar o cálculo detalhado
      if (count <= 10 || count % 5 === 0 || nextSum > limit - 50) {
        steps.push({
          step: count,
          oddNumber: currentOddNumber,
          sum: sum,
          isImportant: count <= 5 || sum > limit - 100
        });
      }

      // Próximo número ímpar
      currentOddNumber += 2;
    }

    return {
      finalAnswer: lastValidOddNumber,
      totalSum: sum,
      totalNumbers: count,
      steps: steps,
      nextNumber: currentOddNumber,
      nextSum: sum + currentOddNumber
    };
  }

  // Exibe os resultados na interface
  displayResults(result) {
    // Mostra a seção de resultados
    this.resultSection.classList.add('show');

    // Constrói o HTML dos detalhes do cálculo
    let calculationHTML = '<div class="calculation-step highlight">🧮 Cálculo Detalhado:</div>';
    calculationHTML +=
      '<div class="calculation-step">Somando números ímpares até que o total não exceda 1000:</div><br>';

    // Primeiros passos
    calculationHTML += '<div class="calculation-step"><strong>Primeiros passos:</strong></div>';
    result.steps.slice(0, 5).forEach(step => {
      calculationHTML += `<div class="calculation-step">${step.step}º: ${step.oddNumber} → Soma: ${step.sum}</div>`;
    });

    calculationHTML += '<div class="calculation-step">...</div><br>';

    // Últimos passos importantes
    const lastSteps = result.steps.slice(-5);
    calculationHTML += '<div class="calculation-step"><strong>Últimos passos antes do limite:</strong></div>';
    lastSteps.forEach(step => {
      const isLast = step.sum === result.totalSum;
      const className = isLast ? 'calculation-step highlight' : 'calculation-step';
      calculationHTML += `<div class="${className}">${step.step}º: ${step.oddNumber} → Soma: ${step.sum}</div>`;
    });

    calculationHTML += '<br><div class="calculation-step"><strong>Verificação do limite:</strong></div>';
    calculationHTML += `<div class="calculation-step">Próximo número ímpar seria: ${result.nextNumber}</div>`;
    calculationHTML += `<div class="calculation-step">Próxima soma seria: ${result.totalSum} + ${result.nextNumber} = ${result.nextSum}</div>`;
    calculationHTML += `<div class="calculation-step highlight">Como ${result.nextSum} > 1000, paramos em ${result.finalAnswer}</div>`;

    this.calculationDetails.innerHTML = calculationHTML;

    // Resultado final destacado
    this.finalResult.innerHTML = `
            <span class="treasure-icon">🏴‍☠️💰</span>
            <div>TESOURO ENCONTRADO!</div>
            <div>Posição X = ${result.finalAnswer}</div>
            <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.8;">
                (Soma total: ${result.totalSum} com ${result.totalNumbers} números ímpares)
            </div>
        `;

    // Scroll suave para o resultado
    this.resultSection.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  // Esconde os resultados
  hideResults() {
    this.resultSection.classList.remove('show');

    // Scroll suave de volta para o topo do container
    document.querySelector('.main-container').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Inicializa a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  new PirateTreasureSolver();

  // Adiciona um efeito visual quando a página carrega
  setTimeout(() => {
    document.querySelector('.main-container').style.opacity = '1';
    document.querySelector('.main-container').style.transform = 'translateY(-50%) scale(1)';
  }, 100);
});

// Adiciona estilo inicial para a animação de entrada
document.querySelector('head').insertAdjacentHTML(
  'beforeend',
  `
    <style>
        .main-container {
            opacity: 0;
            transform: translateY(-50%) scale(0.95);
            transition: all 0.3s ease-out;
        }
    </style>
`
);
