import { Personagem } from '../models/Character';
import { v4 as uuidv4 } from 'uuid';
import { CharacterData } from '../types/ClasseInterfaces';
import { Artifice } from '../models/Classes/Artifice';
import { Barbaro } from '../models/Classes/Barbaro';
import { Bardo } from '../models/Classes/Bardo';
import { Bruxo } from '../models/Classes/Bruxo';
import { Clerigo } from '../models/Classes/Clerigo';
import { Druida } from '../models/Classes/Druida';
import { Feiticeiro } from '../models/Classes/Feiticeiro';
import { Guerreiro } from '../models/Classes/Guerreiro';
import { Ladino } from '../models/Classes/Ladino';
import { Mago } from '../models/Classes/Mago';
import { Monge } from '../models/Classes/Monge';
import { Paladino } from '../models/Classes/Paladino';
import { Patrulheiro } from '../models/Classes/Patrulheiro';

const classesDisponiveis: Record<string, new(...args: any[]) => Personagem> = {
    artifice: Artifice,
    barbaro: Barbaro,
    bardo: Bardo,
    bruxo: Bruxo,
    clerigo: Clerigo,
    druida: Druida,
    feiticeiro: Feiticeiro,
    guerreiro: Guerreiro,
    ladino: Ladino,
    mago: Mago,
    monge: Monge,
    paladino: Paladino,
    patrulheiro: Patrulheiro,
};

export class CharacterFactory {
    static criarPersonagem({ nome, nivel = 1, raca, atributosEscolhidos, classe, id = uuidv4() }: CharacterData): Personagem {
        const ClasseSelecionada = classesDisponiveis[classe.toLowerCase()];

        if (!ClasseSelecionada) {
            throw new Error(`Classe "${classe}" não reconhecida.`);
        }

        return new ClasseSelecionada(id, nome, nivel, raca, atributosEscolhidos, classe);
    }
};