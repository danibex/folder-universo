import pool from '@/data/db';

export default async function handler(req, res) { 

    const metodo = req.method; 
    const idParam = req.query
    switch (metodo) {
      case "GET":
        const result = await pool.query('SELECT * FROM chamados');
        const usuarios = result.rows
        res.status(200).send(usuarios); 
        break;
      case "POST":
        const { nome, email, data_entrega, titulo, descricao, status } = req.body;
        try {
          const insertResult = await pool.query(
            'INSERT INTO chamados (nome, email, data_entrega, titulo, descricao, status) VALUES ($1, $2, $3, $4, $5, $6)',
            [nome, email, data_entrega, titulo, descricao, status]
          );
          
          res.status(200).json({ message: 'Usuário inserido com sucesso' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Erro ao inserir usuário' });
        }
        break;
        case "PUT":
          console.log("Tratando requisição PUT (ou UPDATE)");
          const { nomeNovo, emailNovo, tituloNovo, descricaoNova, statusNovo } = req.body;
          const id = req.query.id; // Supondo que o parâmetro da URL seja 'id'
    
          try {
            const updateResult = await pool.query(
              'UPDATE chamados SET nome = $1, email = $2, data_entrega = $3, titulo = $4, descricao = $5, status = $6 WHERE id = $7',
              [nomeNovo, emailNovo, tituloNovo, descricaoNova, statusNovo, id]
            );
    
            res.status(200).json({ message: 'Chamado atualizado com sucesso' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar chamado' });
          }
          break;
      case "DELETE":
        try{
          const deleteRow = await pool.query(
            'DELETE FROM chamados WHERE id = $1;',
            [parseInt(req.query.id)]
          );
          res.status(200).json(`Usuário id = ${parseInt(req.query.id)} deletado`)
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Erro ao deletar chamado' });
        }
        break;
      default:
        console.log("Método HTTP desconhecido");
        // Lógica para lidar com métodos desconhecidos
        break;
    }
}
