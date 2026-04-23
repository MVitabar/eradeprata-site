# Configuração do Banco de Dados Supabase

## Passos para Configurar

### 1. Acessar o Supabase
- Vá para [https://supabase.com](https://supabase.com)
- Faça login com sua conta
- Selecione seu projeto ou crie um novo

### 2. Executar o Schema SQL
1. No painel do Supabase, vá para **SQL Editor**
2. Clique em **New query**
3. Copie e cole o conteúdo do arquivo `database/schema.sql`
4. Clique em **Run** para executar

### 3. Configurar Storage para Imagens (Opcional)
1. Vá para **Storage** no menu lateral
2. Crie um novo bucket chamado `images`
3. Configure as políticas de acesso conforme necessário

### 4. Verificar Tabelas
Após executar o schema, você deverá ver as seguintes tabelas:
- `categories` - Para categorias de produtos
- `products` - Para os produtos

### 5. Testar a Aplicação
- Acesse `http://localhost:3000/admin`
- Faça login com: `admin` / `eradeprata2024`
- Vá para "Gerenciar Categorias" e "Gerenciar Produtos"

## Estrutura das Tabelas

### Categories
```sql
- id (UUID, Primary Key)
- name (VARCHAR(100), Required)
- description (TEXT, Optional)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Products
```sql
- id (UUID, Primary Key)
- name (VARCHAR(200), Required)
- description (TEXT, Optional)
- price (DECIMAL(10,2), Required)
- image_url (VARCHAR(500), Optional)
- category_id (UUID, Foreign Key para categories)
- stock (INTEGER, Default: 0)
- is_active (BOOLEAN, Default: true)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

## Dados de Exemplo

O schema SQL inclui dados de exemplo para:
- 5 categorias (Anéis, Colares, Braceletes, Relógios, Conjuntos)
- 6 produtos de exemplo

## Funcionalidades Implementadas

### Gerenciamento de Categorias
- **Listar**: `/admin/categorias`
- **Criar**: `/admin/categorias/nova`
- **Editar**: `/admin/categorias/[id]/editar`
- **Excluir**: Com confirmação

### Gerenciamento de Produtos
- **Listar**: `/admin/produtos`
- **Criar**: `/admin/produtos/novo`
- **Editar**: `/admin/produtos/[id]/editar`
- **Excluir**: Com confirmação

### Página Pública
- **Produtos**: `/produtos` - Busca produtos do Supabase

## Observações

- O sistema usa Row Level Security (RLS) configurado para permitir todas as operações
- Em produção, ajuste as políticas de segurança conforme necessário
- As imagens podem ser armazenadas no Supabase Storage ou usar URLs externas
- O sistema está totalmente em português brasileiro
