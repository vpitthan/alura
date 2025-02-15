const calculadora = {
    soma: function(a, b) {
      return a + b;
    },
    
    subtracao: function(a, b) {
      return a - b;
    },
    
    multiplicacao: function(a, b) {
      return a * b;
    },
    
    divisao: function(a, b) {
      if (b === 0) {
        return "Erro: divisão por zero não permitida";
      }
      return a / b;
    },
  
    calcularMedia: function(numeros) {
      if (numeros.length === 0) {
        return "Erro: o array está vazio";
      }
      const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
      return soma / numeros.length;
    }
  };
  
  // Exemplo de uso:
  console.log(calculadora.soma(10, 5));        // 15
  console.log(calculadora.subtracao(10, 5));   // 5
  console.log(calculadora.multiplicacao(10, 5)); // 50
  console.log(calculadora.divisao(10, 2));     // 5
  console.log(calculadora.divisao(10, 0));     // Erro: divisão por zero não permitida
  
  // Chama a função calcularMedia
  console.log(calculadora.calcularMedia([10, 20, 30])); // 20
  console.log(calculadora.calcularMedia([5, 15, 25, 35])); // 20
  console.log(calculadora.calcularMedia([])); // Erro: o array está vazio
  