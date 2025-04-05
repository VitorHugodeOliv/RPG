import { Personagem } from '../models/Character';
import { v4 as uuidv4 } from 'uuid';
import { CharacterData } from '../types/ClasseInterfaces';
import { classesDisponiveis } from '../utils/classesDisponiveis';
import { racasDisponiveis } from '../utils/racasDisponiveis';
import { inicializadorDeAtributos } from '../utils/atributosInicial';

export class CharacterFactory {
    static criarPersonagem({ nome, nivel = 1, raca, atributosEscolhidos, classe, id = uuidv4() }: CharacterData): Personagem {
        const classeSelecionada = classesDisponiveis[classe.toLowerCase()];

        if (!classeSelecionada) {
            throw new Error(`Classe "${classe}" não reconhecida.`);
        }

        const racaSelecionada = racasDisponiveis[raca.toLowerCase()];
        if (!racaSelecionada) {
            throw new Error(`Raça "${raca}" não reconhecida.`);
        }
        

        const atributosBase = inicializadorDeAtributos(atributosEscolhidos);
        const atributosComBonus = racaSelecionada.aplicarBonusRacial(atributosBase);

        return new classeSelecionada(id, nome, nivel, raca, atributosComBonus, classe);
    }
};