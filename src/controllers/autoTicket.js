const qrcode = require('qrcode-terminal');
const { Client, LocalAuth  } = require('whatsapp-web.js');

const client = new Client({
    puppeteer: {
      executablePath: '/usr/bin/brave-browser-stable',
    },
    authStrategy: new LocalAuth({
      clientId: "client-one"
    }),
    puppeteer: {
      headless: false,
    }
  });
  
  client.initialize();
  
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
  
  client.on('authenticated', (session) => {
    console.log('WHATSAPP WEB => Authenticated');
  });
  
  client.on('ready', () => {
    console.log('Cliente do WhatsApp conectado e pronto');
    
    const mensagens = [
      { numero: "557186384879@c.us", mensagem: "Daniel2" },
      { numero: "557191402207@c.us", mensagem: "Testando2" }
      // Adicione mais objetos ao array 'mensagens' para enviar mais mensagens
    ];
  
    const enviarMensagensCadenciadas = async () => {
      try {
        for (const mensagem of mensagens) {
          client.sendMessage(mensagem.numero, mensagem.mensagem)
            .then((message) => {
              console.log('Mensagem enviada com sucesso:', message.body);
            })
            .catch((error) => {
              console.error('Erro ao enviar mensagem:', error);
            });
            
          // Aguarda uma pausa de 2 segundos entre o envio de cada mensagem
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
        console.log('Todas as mensagens foram enviadas com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar as mensagens:', error);
      }
  
    };
  
    enviarMensagensCadenciadas();
  });
  

/*  client.on('message', message => {
	console.log(message.body);
});

npm i whatsapp-web.js

 */
