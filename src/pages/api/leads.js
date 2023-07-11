import pool from '@/data/db';

export default async function handler(req, res) { 

    const metodo = req.method; 
    const idParam = req.query
    switch (metodo) {
      case "GET":
        const result = await pool.query('SELECT * FROM leads');
        const usuarios = result.rows
        res.status(200).json(usuarios); 
        break;
      case "POST":
        const { nome, email, telefone, modalidade, nome_curso, empresa } = req.body;
        try {
          const insertResult = await pool.query(
            'INSERT INTO leads (nome, email, telefone, modalidade, nome_curso, empresa) VALUES ($1, $2, $3, $4, $5, $6)',
            [nome, email, telefone, modalidade, nome_curso, empresa]
          );
          
          res.status(200).json({ message: 'Usuário inserido com sucesso' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Erro ao inserir usuário' });
        }
        break;
      case "PUT":
        console.log("Tratando requisição PUT (ou UPDATE)");
        // Lógica para lidar com a requisição PUT (ou UPDATE)
        break;
      case "DELETE":
        try{
          const deleteRow = await pool.query(
            'DELETE FROM leads WHERE id = $1;',
            [parseInt(req.query.id)]
          );
          res.status(200).json(`Usuário id = ${parseInt(req.query.id)} deletado`)
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Erro ao deletar usuário' });
        }
        break;
      default:
        console.log("Método HTTP desconhecido");
        // Lógica para lidar com métodos desconhecidos
        break;
    }
}
