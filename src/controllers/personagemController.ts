import { Request, Response } from 'express';
import { Personagem } from '../models/Character';
import { CharacterFactory } from '../services/CharacterService';

let personagens: Personagem[] = [];

export const criarPersonagem = (req: Request, res: Response) => {
    try {
        const novoPersonagem = CharacterFactory.criarPersonagem(req.body);
        personagens.push(novoPersonagem);
        res.status(201).json(novoPersonagem);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const getTodosPersonagens = (req: Request, res: Response) => {
    res.status(200).json(personagens);
};

export const getPersonagemPorNome = (req: Request, res: Response) => {
    const { nome } = req.params;
    const personagem = personagens.find((personagem) => personagem.nome === nome);
    if (personagem) {
        res.status(200).json(personagem);
    } else {
        res.status(404).send('Personagem não encontrado.');
    }
};