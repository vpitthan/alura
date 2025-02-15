// Objeto contaBancaria já criado anteriormente
const contaBancaria = {
    titular: "João Silva",
    saldo: 1000,
  
    depositar: function(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`);
      } else {
        console.log("Erro: O valor do depósito deve ser positivo.");
      }
    },
  
    sacar: function(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`);
      } else if (valor > this.saldo) {
        console.log("Erro: Saldo insuficiente para realizar o saque.");
      } else {
        console.log("Erro: O valor do saque deve ser positivo.");
      }
    }
  };
  
  // Objeto cliente
  const cliente = {
    nome: "João Silva",
    conta: contaBancaria
  };
  
  // Função mostrarSaldo
  function mostrarSaldo(cliente) {
    console.log(`Cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: R$${cliente.conta.saldo}`);
  }
  
  // Exemplo de uso:
  mostrarSaldo(cliente); // Exibe o nome do cliente e o saldo da conta
  