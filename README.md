# 🍖 Brasa & Alegria - Sistema de Gestão de Pedidos

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- O Brasa & Alegria é uma aplicação front-end desenvolvida para facilitar o registro e controle de comandas em tempo real para churrascarias e restaurantes. O projeto foca em uma experiência de usuário (UX) rápida, permitindo que garçons adicionem e removam pedidos de forma intuitiva.

# 🚀 Funcionalidades Principais
Registro Instantâneo: Adição de pedidos com número da mesa e descrição.

- Persistência de Dados: Uso de localStorage para manter os dados salvos mesmo após fechar o navegador.

- Validação em Tempo Real: Sistema de alertas personalizados para campos vazios.

- Interface Responsiva: Design adaptável para tablets e smartphones.

# 🛠️ Desafios Técnicos e Aprendizados (Refatoração)
Durante o desenvolvimento, identifiquei e corrigi erros estruturais importantes que serviram como grande aprendizado em lógica de programação:

1. Estrutura de Objetos e Arrays
Inicialmente, houve dificuldade em como armazenar os dados. Corrigi a lógica para que cada entrada seja um objeto dentro de um array (allOrdersLister), permitindo acessar propriedades específicas como item.table e item.order.

Correção: Implementei o push({order: newOrder, table: newTable}) para garantir a integridade dos dados.

2. Ciclo de Vida do Dado (CRUD)
- addOrder: Refatorei para incluir validações de strings vazias usando .trim(), evitando registros "fantasmas" na lista.

- readOrder: O maior desafio foi a renderização. Ajustei para que a lista seja limpa (innerHTML = "") antes de cada nova leitura, impedindo a duplicidade de itens na tela.

- deleteOrder: Implementei a exclusão por index, garantindo que o usuário remova exatamente o pedido selecionado através do método splice.

3. Manipulação Semântica do DOM
- No JavaScript, optei por criar os elementos de forma dinâmica, mas mantendo a semântica:

- Uso de li para cada item da lista.

- Criação de botões de exclusão com elementos <a> estilizados, injetando o comportamento de clique via onclick diretamente na criação do elemento.

4. Tratamento de Dados com Regex
- A aplicação utiliza Expressões Regulares (Regex) para validar a entrada de dados no campo de identificação da mesa (inputTable). Isso garante que o sistema não processe caracteres inválidos e mantenha a consistência do banco de dados local.

-  Funcionamento da Validação
- O filtro é aplicado em tempo real através do evento input. Sempre que o usuário digita um caractere, a função regexExcludeNumber entra em ação:

- Padrão Utilizado: /\D/g

- Ação: Substituição imediata por string vazia ("").

# 🎨 Design e UI
- A estilização foi pensada para transmitir a energia de uma churrascaria:

- Paleta de Cores: Tons de vermelho brasa e amarelo ouro.

- Feedback Visual: Inputs com transições de cor no foco e botões com efeito de elevação (translateY).

- Animações: Novos pedidos entram na lista com uma animação suave de fadeIn e deslize.

# 💻 Tecnologias Utilizadas
- HTML5: Estrutura semântica e formulários.

- CSS3: Variáveis nativas, Flexbox, Grid e Keyframes.

- JavaScript (Vanilla): Manipulação de DOM, LocalStorage, Event Listeners e Arrow Functions.

# 📥 Como testar
- Clone o repositório.
- Comece a gerenciar seus pedidos!

Desenvolvido por Vytor Rodrigues 🚀
Junior Developer | Estudante de ADS

- git clone [https://github.com/Vytorrodrigues/Lista-de-Pedidos-Churrascaria.git]
