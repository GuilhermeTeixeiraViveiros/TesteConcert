# TesteConcert
Este projeto faz parte do teste para estagiário desenvolvedor da Concert Technologies.

Foi requisitado no projeto 2 páginas de CRUD com as seguintes especificações:

### Tela de Login com usuário e senha estáticos no frontend:
  -Login: "concert"
  -Senha: "prova"

### Primeira CRUD: (Colaoradores)
  - Deve conter pelo menos 6 campos incluindo 'Select', 'Checkbox', 'Radio' e 'Date'.
 
### Segunda CRUD: (Formulário Reativo)
  - Deve ser feita utilizando ReactiveForms.
  - Não tem restrição quanto à quantidade de campos.
  - Alguns campos devem ter validações de preenchimento.

### Requerimentos Adicionais:
  - Ambas os CRUD's devem ter um componente comum entre elas e tal componente deve ter obrigatoriamente Input e Output properties.
    - O seletor de gênero foi escolhido para ser o componente compartilhado pois se aplicava em ambos os contextos e utiliza as propriedades Input e Output para obter
    a quantidade de registros de cada gênero e também passar para o componente pai qual é o gênero que o usuário deseja filtrar.
  
  - Deve ser criada uma página ou sidebar para navegar entre os componentes. 
    - O sidebar foi escolhido por apresentar um layput mais agradável.
    
  - As rotas de navegação deve ser feitas usando o conceito lazy loading.
  
  - As páginas deve ter um 'Loading' para simular o tempo de carga das páginas e dados.
  
  - A aplicação deve apresentar mensagens de feedback para o usuário (sucesso e erro).
    - As mensagens são apresentadas ao usuário sempre que há uma requisição ao backend (CRUD).
    
  - O JSON-SERVER foi utilizado para mockar o backend.
  
## Procedimentos para inicializar o projeto:
  - Clonar o repositório disponível em: https://github.com/GuilhermeTeixeiraViveiros/TesteConcert
  - Instalar as dependências do backend e do frontend executando o seguinte comando nos respectivos diretórios:
    - npm install
  - Inicializar o backend e o frontend executando o seguinte comando nos respectivos diretórios:
    - npm start
 
