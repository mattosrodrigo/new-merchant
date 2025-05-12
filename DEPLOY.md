# Guia de Deploy com AWS Amplify

Este guia explica como fazer o deploy do site para o subdomínio `behind.save1.com.br` utilizando o AWS Amplify.

## Pré-requisitos

1. Conta AWS
2. CLI da AWS configurada com as credenciais apropriadas
3. Domínio `save1.com.br` já configurado no Route 53 da AWS ou em outro provedor de DNS

## Passos para Deploy

### 1. Preparação do Ambiente

Os arquivos de configuração necessários já estão criados:
- `amplify.yml` - Configuração do processo de build
- `amplify-custom-domain.json` - Configuração do domínio personalizado

### 2. Construção Local

Para testar a build localmente antes do deploy:

```bash
npm run build
```

### 3. Deploy via Console da AWS Amplify

1. Acesse o [Console da AWS Amplify](https://console.aws.amazon.com/amplify/home)
2. Clique em "Create new app" (Criar novo app)
3. Escolha sua plataforma de hospedagem de código (GitHub, BitBucket, AWS CodeCommit, etc.)
4. Autorize o Amplify a acessar seu repositório
5. Selecione o repositório e a branch para deploy
6. Configure as opções de build:
   - Na seção "App build specification", escolha "Edit" (Editar)
   - Confirme que o conteúdo corresponde ao arquivo `amplify.yml` deste projeto
   - Clique em "Save" (Salvar)
7. Clique em "Next" (Próximo) e depois em "Save and deploy" (Salvar e implantar)

### 4. Configuração do Domínio Personalizado

Após o primeiro deploy bem-sucedido:

1. No painel da sua aplicação no AWS Amplify, vá para a guia "Domain Management" (Gerenciamento de Domínio)
2. Clique em "Add domain" (Adicionar domínio)
3. Insira o domínio raiz `save1.com.br`
4. Na próxima tela, adicione o subdomínio `behind` 
5. Clique em "Next" (Próximo)
6. Siga as instruções para verificar a propriedade do domínio

#### Adicionando Registros DNS

Você precisará adicionar os registros DNS fornecidos pelo Amplify ao seu provedor de DNS:

- Se o domínio estiver no Route 53, o Amplify pode adicionar os registros automaticamente
- Se estiver em outro provedor, precisará adicionar os registros CNAME manualmente

### 5. Deploy via CLI (Alternativa)

Para fazer o deploy via linha de comando:

```bash
# Instale o AWS Amplify CLI se ainda não tiver instalado
npm install -g @aws-amplify/cli

# Configure sua conta AWS
amplify configure

# Inicialize o Amplify no projeto
amplify init

# Adicione hospedagem
amplify add hosting

# Faça o deploy
amplify publish
```

### 6. Verificação

Após o deploy, você pode verificar se o site está funcionando corretamente:

1. Acesse o site pelo domínio padrão do Amplify fornecido
2. Quando o domínio personalizado estiver configurado, acesse `https://behind.save1.com.br`
3. Verifique se todas as funcionalidades estão operando conforme esperado

## Atualizações Futuras

Para atualizar o site:

1. Faça as alterações nos arquivos do projeto
2. Execute o build local para testes:
   ```bash
   npm run build
   ```
3. Envie as alterações para o repositório
4. O Amplify detectará as alterações e iniciará um novo deploy automaticamente

## Solução de Problemas

### Problemas com Build

Se houver falhas no processo de build:

1. Verifique os logs de build no console da AWS Amplify
2. Corrija os problemas no código fonte
3. Faça o push das correções para o repositório

### Problemas com Domínio Personalizado

Se o domínio personalizado não estiver funcionando:

1. Verifique se os registros DNS foram adicionados corretamente
2. Verifique se o certificado SSL foi emitido com sucesso
3. Aguarde a propagação DNS (pode levar até 48 horas)

## Recursos Adicionais

- [Documentação do AWS Amplify](https://docs.amplify.aws/)
- [Configuração de Domínios Personalizados](https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html)
- [Solução de Problemas no Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/troubleshooting.html) 