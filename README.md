Para instalar e configurar o PostgreSQL, alterar a senha do usuário, criar um banco de dados e uma tabela, e liberar o acesso externo em sua VPS Ubuntu 22.04, você pode seguir as etapas abaixo:

Passo 1: Instalação do PostgreSQL

1. Conecte-se à sua VPS Ubuntu via SSH.
2. Atualize os pacotes do sistema operacional:
   ```
   sudo apt update
   sudo apt upgrade
   ```
3. Instale o PostgreSQL:
   ```
   sudo apt install postgresql
   ```

Passo 2: Alterar a senha do usuário postgres

1. Acesse a conta do usuário postgres:
   ```
   sudo -u postgres psql postgres
   ```
2. No prompt do PostgreSQL, altere a senha do usuário postgres substituindo "nova_senha" pela senha desejada:
   ```
   \password postgres
   ```
   Digite a nova senha e confirme-a.
3. Saia do prompt do PostgreSQL:
   ```
   \q
   ```

Passo 3: Criar um banco de dados e uma tabela

1. Acesse o prompt do PostgreSQL novamente:
   ```
   sudo -u postgres psql
   ```
2. Crie um banco de dados substituindo "nome_banco" pelo nome desejado:
   ```
   CREATE DATABASE nome_banco;
   ```
3. Conecte-se ao novo banco de dados:
   ```
   \c nome_banco
   ```
4. Crie uma tabela substituindo "nome_tabela" pelo nome desejado e defina as colunas necessárias:
   ```
CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(15),
    modalidade VARCHAR(20),
    nome_curso VARCHAR(100),
    curso VARCHAR(50),
    empresa VARCHAR(100),
    data_inscricao TIMESTAMPTZ DEFAULT timezone('America/Bahia'::text, now())
);

   ```
   Substitua "coluna1", "coluna2", "tipo_dado" pelos nomes e tipos de dados corretos para suas colunas.

Passo 4: Liberar acesso externo

1. Edite o arquivo de configuração do PostgreSQL:
   ```
   sudo nano /etc/postgresql/{versão}/main/postgresql.conf
   ```
   Substitua "{versão}" pela versão do PostgreSQL instalada (por exemplo, 13).
2. Localize a linha que começa com "listen_addresses" e modifique-a para:
   ```
   listen_addresses = '*'
   ```
3. Salve o arquivo e saia do editor.
4. Edite o arquivo pg_hba.conf:
   ```
   sudo nano /etc/postgresql/{versão}/main/pg_hba.conf
   ```
   Substitua "{versão}" pela versão do PostgreSQL instalada (por exemplo, 13).
5. No final do arquivo, adicione a seguinte linha para permitir o acesso de qualquer endereço IP:
   ```
   host    all             all             0.0.0.0/0               md5
   ```
6. Salve o arquivo e saia do editor.
7. Reinicie o serviço do PostgreSQL:
   ```
   sudo service postgresql restart
   ```

Agora você deve ter o PostgreSQL instalado e configurado, a senha do usuário alterada, um banco de dados criado e uma tabela dentro dele. Além disso, o acesso externo ao PostgreSQL foi habilitado. Certifique-se de tomar medidas de segurança adicionais, como configurar um firewall ou permitir apenas endereços IP específicos para acessar a porta do PostgreSQL (normalmente a porta 5432).

Sim, para permitir o acesso externo ao PostgreSQL, você precisa liberar a porta padrão do PostgreSQL (normalmente a porta 5432) no firewall da sua VPS Ubuntu 22.04. Aqui está como você pode fazer isso:

1. Verifique se o serviço de firewall UFW (Uncomplicated Firewall) está instalado executando o seguinte comando:

   ```
   sudo ufw status
   ```

   Se o UFW não estiver instalado, você pode instalá-lo com o seguinte comando:

   ```
   sudo apt install ufw
   ```

2. Após confirmar que o UFW está instalado e ativo, você pode permitir o tráfego na porta 5432 usando o seguinte comando:

   ```
   sudo ufw allow 5432
   ```

3. Verifique se a regra foi adicionada corretamente executando:

   ```
   sudo ufw status
   ```

   Você deverá ver uma saída que indica que a porta 5432 está aberta.

4. Agora você deve ter permitido o acesso externo à porta 5432 no firewall da sua VPS Ubuntu 22.04.

Lembre-se de que abrir portas em seu firewall pode expor seu servidor a potenciais riscos de segurança. Certifique-se de tomar medidas adicionais para garantir a segurança do seu sistema, como restringir o acesso somente a endereços IP confiáveis e configurar autenticação adequada no PostgreSQL.

Para seguir com a instalação, é necessário ter o curl instalado. Para instalá-lo, basta rodar o seguinte comando no terminal:

Ubuntu ou derivados
sudo apt install curl

Logo depois de concluir a instalação do curl, podemos partir para instalação do NVM. Insira em seu terminal o seguinte comando:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

Finalmente, temos o NVM instalado. No entanto, ele ainda não está pronto para uso, pois precisamos adicioná-lo em nosso path. Não se preocupe se você não sabe o que é isso, ok? Basta você seguir os passos abaixo:

Adicionando o NVM no path do sistema
Para adicioná-lo no path do nosso sistema, precisamos editar um desses três arquivos ( ~/.zshrc, ~/.profile, or ~/.bashrc). Escolha um de sua preferência e adicione ao final do arquivo o seguinte trecho de código:

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
Atenção:
Se você estiver usando o zsh como terminal padrão, você não deverá usar o arquivo .bashrc.

Depois de adicionar o trecho acima em um dos arquivos citados e salvá-lo, é hora de testar, e para isso, digite em seu terminal source ~/.nomeDoArquivoQueVocêUsou e em seguida nvm --help. Aqui será retornada uma lista com todos os comandos que o NVM disponibiliza.

Utilização
Veremos aqui os comandos básicos do NVM, mas eu deixarei os links para a documentação completa ao final deste artigo, ok?

Listando as versões remotas do Node.js
As versões remotas são todas as versões disponíveis para instalação, desde sua criação até os dias atuais. Para listar essas versões basta inserir no terminal o comando nvm ls-remote.

Versões do node.js
Instalando um versão do Node.js
Logo após a versão desejada ser escolhida, podemos inserir o comando de instalação nvm install v16.14.0. Repare que, no meu caso, eu estou instalando a última versão do Node.js (LTS); caso prefira, você poderia instalar a versão v14.19.0.

Agora, todas as vezes que eu digitar node --version será retornado a versão que eu acabei de instalar na minha máquina.

OBS: Eu também tenho a versão v17.7.0 do Node instalado na minha máquina e eu vou mostrar para você como fazer a troca do Node.js!

Versão do node
Escolhendo a versão do Node.js
Eventualmente, nós vamos precisar trocar de versão, e o comando para isso é bem simples.

Primeiro, vamos verificar, com o comando nvm ls, quais versões do Node temos. Dessa forma, você verá todas as versões que estão instaladas na sua máquina.

Versẽos do node.js
A versão que está sendo apontada pela setinha verde é a padrão. Para você trocar para a versão 17, basta rodar o comando nvm use v17.7.0 e, a partir daí, você estará usando a versão 17 do Node.js.



Peço desculpas pela omissão. Na configuração do Nginx, é necessário criar um link simbólico para o arquivo de configuração dentro da pasta `sites-enabled`. Aqui estão os passos completos para configurar o Nginx corretamente:

1. Abra o arquivo de configuração padrão do Nginx para edição:
   ```
   sudo nano /etc/nginx/sites-available/default
   ```

2. Dentro do bloco `server`, remova todo o conteúdo e adicione o seguinte bloco de configuração:
   ```nginx
   server {
       listen 80;
       listen [::]:80;
       server_name seu_dominio.com;  # Substitua pelo seu domínio ou endereço IP

       location / {
           proxy_pass http://localhost:3000;  # Porta na qual o PM2 está executando o Next.js
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Substitua `seu_dominio.com` pelo seu domínio ou endereço IP da VPS.

3. Salve o arquivo e saia do editor.

4. Crie um link simbólico para o arquivo de configuração dentro da pasta `sites-enabled`:
   ```
   sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
   ```

5. Verifique se a configuração do Nginx está correta:
   ```
   sudo nginx -t
   ```

6. Reinicie o Nginx para aplicar as alterações:
   ```
   sudo service nginx restart
   ```

Agora o Nginx está configurado corretamente para encaminhar as solicitações para o PM2, que está executando seu projeto Next.js. Certifique-se de substituir `seu_dominio.com` pelo seu domínio ou endereço IP da VPS.

















CREATE TABLE chamados (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150),
    email VARCHAR(100),
    titulo VARCHAR(150),
    descricao TEXT,
    status VARCHAR(20),
	data_entrega VARCHAR(15),
    data_abertura TIMESTAMPTZ DEFAULT timezone('America/Bahia'::text, now())
);

select * from chamados;