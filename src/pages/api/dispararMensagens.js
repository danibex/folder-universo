import pool from '@/data/db';
const { Client, LocalAuth  } = require('whatsapp-web.js');



export default async function handler(req, res) { 

    const metodo = req.method; 
    const idParam = req.query;



    switch (metodo) {
      case "GET":
        res.status(200).json(`Api GET`)
      case "POST":
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
          
          
          client.on('authenticated', (session) => {
            console.log('WHATSAPP WEB => Authenticated');
          });
          
          client.on('ready', () => {
            console.log('Cliente do WhatsApp conectado e pronto');
            
         
          
            const enviarMensagensCadenciadas = async () => {
            const {dataTratada, mensagem} = req.body;
              try {
                for (const dados of dataTratada) {
                  client.sendMessage(`${dados.numero}@c.us`, mensagem)
                    .then((message) => {
                      console.log('Mensagem enviada com sucesso:', message.body);
                    })
                    .catch((error) => {
                      console.error('Erro ao enviar mensagem:', error);
                    });
                    
                  // Aguarda uma pausa de 2 segundos entre o envio de cada mensagem
                  await new Promise((resolve) => setTimeout(resolve, 2000));
                  res.status(200).json(dataTratada)
                }
                console.log(`Todas as mensagens foram enviadas com sucesso!`);
              } catch (error) {
                console.error('Erro ao enviar as mensagens:', error);
                res.status(200).json(dataTratada)  
              }
          
            };
          
            enviarMensagensCadenciadas();
            });
        break;
        case "PUT":
            res.status(200).json(`Api PUT`)
          break;
      case "DELETE":
          res.status(200).json(`Api DELETE`)
        break;
      default:
        console.log("Método HTTP desconhecido");
        // Lógica para lidar com métodos desconhecidos
        break;
    }
}

/*  client.on('message', message => {
	console.log(message.body);
});

npm i whatsapp-web.js

 */
