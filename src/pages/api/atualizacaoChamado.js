import pool from '@/data/db';

export default async function handler(req, res) { 

    const metodo = req.method; 
    const idParam = req.query
    switch (metodo) {
        case "PUT":
          console.log("Tratando requisição PUT (ou UPDATE)");
          console.log(req.body.email)
          const { nome, email, titulo, descricao, status } = req.body;
          const id = req.query.id; // Supondo que o parâmetro da URL seja 'id'
        
          try {
            const updateResult = await pool.query(
              'UPDATE chamados SET nome = $1, email = $2, titulo = $3, descricao = $4, status = $5 WHERE id = $6',
              [nome, email, titulo, descricao, status, id]
            );
    
            res.status(200).json({ message: 'Chamado atualizado com sucesso' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar chamado' });
          }
          break;
      default:
        console.log("Método HTTP desconhecido");
        break;
    }
}
