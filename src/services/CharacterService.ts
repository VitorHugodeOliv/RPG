import { Personagem } from '../models/Character';
import { v4 as uuidv4 } from 'uuid';
import { CharacterData } from '../types/ClasseInterfaces';
import { Artifice } from '../models/Classes/Artifice';

export class CharacterFactory {
    static criarPersonagem({ nome, nivel = 1, raca, atributosEscolhidos, classe, id = uuidv4() }: CharacterData): Personagem {
        switch (classe.toLowerCase()) {
            case 'artifice':
                return new Artifice(id, nome, nivel, raca, atributosEscolhidos, classe);
            default:
                throw new Error(`Classe "${classe}" não reconhecida.`);
        }
    }
}