# Verificador de Divisibilidade (Múltiplos de 3 e 5)

Este projeto consiste em um script simples em JavaScript que utiliza estruturas condicionais para verificar se um número é divisível por 3, por 5, por ambos ou por nenhum deles.

---

## 🛠️ Lógica de Programação

O algoritmo aplica conceitos fundamentais de aritmética e controle de fluxo:

* **Operador de Módulo (`%`)**: Utilizado para encontrar o resto da divisão. Se o resto é `0`, o número é divisível.
* **Operadores Lógicos (`&&` e `!==`)**: Permitem combinar múltiplas condições para filtrar os resultados com precisão.
* **Estrutura Condicional Encadeada**: O uso de `if`, `else if` e `else` garante que apenas uma mensagem seja exibida no console para cada número testado.

---

## 📂 Como o código funciona

O fluxo de decisão segue esta ordem de prioridade:

1. **Ambos**: Verifica se o número é divisível por 3 **E** 5 simultaneamente.
2. **Apenas 5**: Verifica se é divisível por 5, garantindo que **NÃO** seja por 3.
3. **Apenas 3**: Verifica se é divisível por 3, garantindo que **NÃO** seja por 5.
4. **Nenhum**: Caso nenhuma das condições anteriores seja atendida, informa que o número não é múltiplo de nenhum dos dois.

---

## 🚀 Como Executar

Para testar este script, você deve ter o **Node.js** instalado.

1. Crie um arquivo chamado `divisibilidade.js`.
2. Cole o código no arquivo.
3. Abra o seu terminal e execute:
   ```bash
   node divisibilidade.js
