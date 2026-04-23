-- Tabela de Categorias
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Produtos
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(500),
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  stock INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger para atualizar o updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Inserir categorias de exemplo
INSERT INTO categories (name, description) VALUES
('Anéis', 'Anéis elegantes em prata e ouro'),
('Colares', 'Colares sofisticados com pedras preciosas'),
('Braceletes', 'Braceletes modernos e clássicos'),
('Relógios', 'Relógios de luxo e esportivos'),
('Conjuntos', 'Conjuntos combinados para ocasiões especiais');

-- Inserir produtos de exemplo
INSERT INTO products (name, description, price, image_url, category_id, stock) VALUES
('Anel Prata Elegante', 'Anel crafted com prata 925, design exclusivo', 299.90, '/placeholder1.jpg', (SELECT id FROM categories WHERE name = 'Anéis'), 50),
('Colar Dourado Premium', 'Colar em ouro 18k com pedras preciosas', 599.90, '/placeholder2.jpg', (SELECT id FROM categories WHERE name = 'Colares'), 30),
('Bracelete Moderno', 'Bracelete em aço inox com acabamento prateado', 199.90, '/placeholder3.jpg', (SELECT id FROM categories WHERE name = 'Braceletes'), 40),
('Relógio Clássico', 'Relógio suíço com couro legítimo', 899.90, '/placeholder4.jpg', (SELECT id FROM categories WHERE name = 'Relógios'), 20),
('Pingente Exclusivo', 'Pingente artesanal em prata com detalhes únicos', 149.90, '/placeholder5.jpg', (SELECT id FROM categories WHERE name = 'Anéis'), 60),
('Conjunto Completo', 'Conjunto com anel, colar e bracelete combinando', 1299.90, '/placeholder6.jpg', (SELECT id FROM categories WHERE name = 'Conjuntos'), 15);

-- Habilitar RLS (Row Level Security)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança (permitir tudo por enquanto, pode ser ajustado depois)
CREATE POLICY "Allow all operations on categories" ON categories
  FOR ALL USING (true);

CREATE POLICY "Allow all operations on products" ON products
  FOR ALL USING (true);
