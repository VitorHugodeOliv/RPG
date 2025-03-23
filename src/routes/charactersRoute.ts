import express from 'express';
import { criarPersonagem, getTodosPersonagens, getPersonagemPorNome } from '../controllers/personagemController';

const router = express.Router();

router.post('/personagens', criarPersonagem);
router.get('/personagens', getTodosPersonagens);
router.get('/personagens/:nome', getPersonagemPorNome);

export default router;