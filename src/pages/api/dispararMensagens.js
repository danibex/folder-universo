import { Client, LocalAuth } from 'whatsapp-web.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new Client({
      puppeteer: {
        executablePath: '/usr/bin/brave-browser-stable',
      },
      authStrategy: new LocalAuth({
        clientId: "client-one",
      }),
      puppeteer: {
        headless: false,
      },
    });

    client.initialize();

    client.on('authenticated', (session) => {
      console.log('WHATSAPP WEB => Authenticated');
    });

    client.on('ready', () => {
      console.log('Cliente do WhatsApp conectado e pronto');

      const enviarMensagensCadenciadas = async () => {
        const { dataTratada, mensagem } = req.body;

        try {
          // Parse the stringified JSON back to an array of objects before iterating
          const dataTratadaArray = JSON.parse(dataTratada);

          for (const dados of dataTratadaArray) {
            client.sendMessage(`55${dados.numero}@c.us`, mensagem)
              .then((messagem) => {
                console.log('Mensagem enviada com sucesso:', messagem.to);
              })
              .catch((error) => {
                console.error('Erro ao enviar mensagem:', error);
              });

            // Aguarda uma pausa de 2 segundos entre o envio de cada mensagem
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }

          console.log(`Todas as mensagens foram enviadas com sucesso!`);
          res.status(200).json(dataTratadaArray);
        } catch (error) {
          console.error('Erro ao enviar as mensagens:', error);
          res.status(500).json({ error: 'Error sending messages' });
        }
      };

      enviarMensagensCadenciadas();
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}