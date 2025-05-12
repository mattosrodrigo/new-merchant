#!/bin/bash

# Script de deploy para AWS Amplify

echo "Iniciando processo de build e deploy para behind.save1.com.br"

# Verificar se o AWS CLI está instalado
if ! command -v aws &> /dev/null
then
    echo "AWS CLI não está instalado. Por favor, instale-o primeiro."
    echo "Instruções: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

# Verificar se o Amplify CLI está instalado
if ! command -v amplify &> /dev/null
then
    echo "AWS Amplify CLI não está instalado. Instalando agora..."
    npm install -g @aws-amplify/cli
fi

# Executar build
echo "Executando build do projeto..."
npm run build

if [ $? -ne 0 ]; then
    echo "Falha no processo de build. Abortando deploy."
    exit 1
fi

echo "Build concluído com sucesso!"

# Perguntar se deseja continuar com o deploy
read -p "Deseja continuar com o deploy para AWS Amplify? (s/n): " resposta
if [[ "$resposta" != "s" && "$resposta" != "S" ]]; then
    echo "Deploy cancelado pelo usuário."
    exit 0
fi

# Verificar se o usuário já configurou o Amplify
if [ ! -d "amplify" ]; then
    echo "Configuração do Amplify não encontrada. Iniciando setup..."
    echo "Você precisará fazer login na sua conta AWS e configurar o projeto."
    
    # Inicializar o projeto Amplify
    amplify init
    
    # Adicionar hospedagem
    amplify add hosting
else
    echo "Configuração do Amplify encontrada."
fi

# Fazer o deploy
echo "Iniciando deploy para AWS Amplify..."
amplify publish

if [ $? -eq 0 ]; then
    echo "Deploy concluído com sucesso!"
    echo "Após a configuração do domínio personalizado, o site estará disponível em: https://behind.save1.com.br"
    echo "Verifique as instruções em DEPLOY.md para configurar o domínio personalizado."
else
    echo "Houve um problema durante o deploy. Verifique os logs para mais informações."
fi 