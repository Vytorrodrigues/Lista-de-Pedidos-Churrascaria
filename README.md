# 🍖 Brasa & Alegria - Sistema de Gestão de Pedidos

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Uma aplicação front-end ágil e intuitiva desenvolvida para facilitar o registro de pedidos em uma churrascaria, otimizando o fluxo de trabalho entre o atendimento e a cozinha.

## 📌 Sobre o Projeto

Este projeto foi criado para resolver a necessidade de organização de comandas em tempo real. A aplicação permite que o atendente registre o número da mesa e os itens solicitados, visualizando tudo em uma lista dinâmica.

### 🎯 Funcionalidades
- **Registro de Pedidos:** Entrada de dados para mesa e descrição do prato.
- **Interface Intuitiva:** Design focado na rapidez do atendimento.
- **Lista Dinâmica:** Visualização clara das pendências através de manipulação do DOM.

## 🛠️ Estrutura do Código HTML

O arquivo principal (`index.html`) foi construído seguindo os padrões de semântica do HTML5:

- **Seção Logo:** Identificação visual da marca "Brasa & Alegria".
- **Formulário de Entrada:** Utiliza inputs específicos para captura de dados, garantindo que a interação seja simples.
- **Container de Lista:** Uma estrutura de Lista Não Ordenada (`<ul>`) que serve de âncora para a inserção dinâmica dos pedidos via JavaScript.

## 🎨 Identidade Visual e Estilização (CSS)
A interface foi revitalizada hoje com foco em uma estética temática de churrascaria, utilizando uma paleta de cores quentes e elementos visuais modernos.
Destaques da Implementação:
- Design System com Variáveis: Implementação de :root para gerenciamento de cores (--vermelho, --amarelo, --fundo), facilitando a manutenção e garantindo consistência visual.
- Layout Responsivo: Uso combinado de Flexbox e CSS Grid para garantir que o formulário e a lista de pedidos se adaptem perfeitamente a diferentes tamanhos de tela.
- Micro-interações:
- Hovers e Transições: Botões com efeitos de elevação (translateY) e mudança suave de cor.
- Feedback de Foco: Inputs que mudam de cor ao serem selecionados, melhorando a experiência de digitação.
- Animações: Implementação de @keyframes fadeIn para que novos itens apareçam na lista com um efeito suave de deslize e opacidade.
- Estética Temática: * O h1 recebeu um design arredondado e bordas que remetem a placas de menu clássicas.
- Uso de drop-shadow na imagem hero para criar profundidade.
- Criação de um card centralizado (.container) com sombra suave e borda superior de destaque.

- O foco principal é consolidar conhecimentos em manipulação de DOM, lógica de arrays de objetos e eventos em JavaScript puro.

# Status do Projeto: 🛠️ Em Manutenção / Desenvolvimento.

# 🚀 Funcionalidades Atuais
- Captação de Dados: Recebe o pedido e o número da mesa através de inputs.

- Feedback Visual: Sistema de alerta temporizado caso o usuário tente enviar campos vazios.

- Renderização Dinâmica: A lista de pedidos é atualizada na tela sempre que um novo item é adicionado ou removido.

- Exclusão de Itens: Possibilidade de remover pedidos da lista através de um índice específico.

# ---🛠️ Próximos Passos (Roadmap)---
- Atualmente, estou trabalhando nas seguintes melhorias:

- [x] Correção da Estrutura de Objetos: Ajustar a função addOrder para que ela envie um objeto completo { order, table } para a array, permitindo a leitura correta das propriedades.

- [x] Refatoração do DOM: Corrigir a inserção dos elementos li dentro da ul principal.

- [ ] Implementação de Regex: Adicionar validações mais robustas nos campos de entrada.

- [ ] Persistência de Dados: Implementar localStorage para que os pedidos não sumam ao atualizar a página.


## 🚀 Como Executar

1. Certifique-se de ter os arquivos `index.html`, `styles.css` e `script.js` na mesma pasta.
2. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
