# SAVE1 E-commerce Demo

Este é um projeto de demonstração de e-commerce para a SAVE1, otimizado para Google Merchant.

## Características

- Página de produto com URL amigável: `/product/[sku]`
- Estrutura de dados JSON-LD para Google Merchant
- Design responsivo usando Bootstrap 5
- AngularJS para gerenciamento de estado e roteamento
- Modo de URL HTML5 (sem #)

## Configuração

1. Instale as dependências:
```
npm install
```

2. Inicie o servidor:
```
npm start
```

3. Acesse o site em:
```
http://localhost:3000/product/TEN-X500-42-BLK
```

## Estrutura do Projeto

- `/app/js/app.js` - Configuração do aplicativo Angular
- `/app/controllers/ProductController.js` - Controlador de produto
- `/app/views/product.html` - Template da página de produto
- `/dist/index.html` - Estrutura HTML principal com dados estruturados
- `server.js` - Servidor Express para suporte ao modo HTML5
- `.htaccess` - Configuração para Apache

## Para Produção

Em ambiente de produção, configure o servidor (Apache/Nginx) para redirecionar todas as requisições para o arquivo index.html, permitindo que o Angular cuide do roteamento.

### Apache
O arquivo `.htaccess` já está configurado para isso.

### Nginx
Adicione ao bloco de configuração do servidor:

```
location / {
    try_files $uri $uri/ /dist/index.html;
}
```

# SAVE1 - Demonstração de Produto para Google Merchant

Esta é uma demonstração de um site para um produto (Tênis de Corrida Premium) que atende aos requisitos necessários para ser aprovado no Google Merchant.

## Conteúdo do Projeto

- `index.html` - Página principal do produto com todas as informações estruturadas
- `merchant-feed.xml` - Feed XML do Google Merchant pronto para importação
- `sitemap.xml` - Sitemap para melhorar a indexação pelos motores de busca
- `robots.txt` - Configurações para crawlers
- `app/` - Arquivos do Angular para a interatividade da página

## Como Usar o Feed do Google Merchant

### 1. Configuração da Conta no Google Merchant Center

1. Acesse [Google Merchant Center](https://merchants.google.com)
2. Crie uma conta (caso ainda não tenha)
3. Complete as informações da sua loja
4. Verifique e reivindique sua URL (usando um dos métodos: upload de arquivo HTML, meta tag, Google Analytics ou Google Tag Manager)
5. Configure as preferências de envio e impostos

### 2. Importação do Feed XML

1. No Google Merchant Center, vá para "Produtos" > "Feeds"
2. Clique em "+" para adicionar um novo feed
3. Selecione o país de destino (Brasil) e o idioma (Português)
4. Escolha o método de upload "Upload de arquivo" ou "Buscar arquivo"
5. Faça o upload do arquivo `merchant-feed.xml` deste projeto
6. Configure a frequência de atualização (diária, semanal, etc.)
7. Salve o feed

### 3. Monitoramento da Aprovação

1. Após o upload, o Google Merchant analisará os produtos
2. Verifique a seção "Diagnóstico" para confirmar se não há erros
3. Os produtos aprovados irão aparecer na seção "Produtos" > "Em execução"

## Requisitos Atendidos no Feed

Este projeto atende aos seguintes requisitos do Google Merchant:

- **Informações Básicas do Produto**:
  - ID único do produto (g:id)
  - Título detalhado (g:title)
  - Descrição completa (g:description)
  - Link para a página do produto (g:link)
  - Imagens de alta qualidade (g:image_link, g:additional_image_link)

- **Detalhes de Preço e Disponibilidade**:
  - Preço em formato correto com moeda (g:price)
  - Status de disponibilidade (g:availability)
  - Condição do produto (g:condition)

- **Identificadores do Produto**:
  - GTIN / EAN / UPC (g:gtin)
  - MPN - Número de Peça do Fabricante (g:mpn)
  - Marca (g:brand)
  - Identificador de grupo de produtos (g:item_group_id) para variantes

- **Categorização**:
  - Categoria do Google (g:google_product_category)
  - Tipo de produto personalizado (g:product_type)

- **Atributos de Variantes**:
  - Tamanho (g:size)
  - Cor (g:color)
  - Material (g:material)
  - Gênero (g:gender)
  - Faixa etária (g:age_group)

- **Informações de Envio e Impostos**:
  - Configurações de envio (g:shipping)
  - Detalhes de impostos (g:tax)

## Práticas Adicionais para Aprovação

Além do feed XML, esta demonstração também implementa:

1. **Schema.org Structured Data**: Markup JSON-LD na página do produto
2. **Informações Detalhadas do Produto**: Especificações técnicas, avaliações, etc.
3. **Imagens de Alta Qualidade**: Múltiplas imagens do produto
4. **Informações de Disponibilidade Claras**: Status de estoque e prazos de entrega
5. **Políticas de Envio e Devolução**: Informações sobre frete e garantia

## Recursos e Referências

- [Documentação do Google Merchant Center](https://support.google.com/merchants/answer/7052112?hl=pt-BR)
- [Especificações do Feed de Produtos](https://support.google.com/merchants/answer/7052112?hl=pt-BR)
- [Políticas de Publicidade de Shopping](https://support.google.com/merchants/answer/6149970?hl=pt-BR)
- [Requisitos de Dados de Produtos](https://support.google.com/merchants/answer/6324425?hl=pt-BR)

## Observações Importantes

1. Este é um exemplo para demonstração. Em um ambiente real, você deve:
   - Substituir as URLs de placeholder por URLs reais
   - Usar imagens reais de alta qualidade do produto
   - Configurar corretamente o domínio em todas as URLs
   - Implementar políticas reais de envio e devolução

2. As informações de GTIN/MPN devem ser reais e verificáveis para produtos de marca.

3. Mantenha seu feed atualizado com informações de preço e disponibilidade precisas.

4. Siga todas as políticas do Google Merchant para evitar suspensão da conta.
