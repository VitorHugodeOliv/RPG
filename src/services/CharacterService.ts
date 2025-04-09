import { Personagem } from '../models/Character';
import { v4 as uuidv4 } from 'uuid';
import { CharacterData } from '../types/ClasseInterfaces';
import { classesDisponiveis } from '../utils/classesDisponiveis';
import { racasDisponiveis } from '../utils/racasDisponiveis';
import { inicializadorDeAtributos } from '../utils/atributosInicial';
import { aplicarPericiasSelecionadas } from '../utils/PericiasDisponiveis';
export class CharacterFactory {
    static criarPersonagem({ nome, nivel = 1, raca, subRaca, atributosEscolhidos, classe, id = uuidv4(), pericias }: CharacterData): Personagem {
        const classeSelecionada = classesDisponiveis[classe.toLowerCase()];

        if (!classeSelecionada) {
            throw new Error(`Classe "${classe}" não reconhecida.`);
        }

        const racaSelecionada = racasDisponiveis[raca.toLowerCase()];
        if (!racaSelecionada) {
            throw new Error(`Raça "${raca}" não reconhecida.`);
        }
        

        const atributosBase = inicializadorDeAtributos(atributosEscolhidos);
        let atributosComBonus = racaSelecionada.aplicarBonusRacial(atributosBase);

        if (subRaca) {
            const subRacaSelecionada = racaSelecionada.subRacas[subRaca.toLowerCase()];
              if (!subRacaSelecionada) {
                const subRacasDisponiveis = Object.keys(racaSelecionada.subRacas).join(", ");
                throw new Error(`Sub-raça "${subRaca}" não reconhecida. Sub-raças disponíveis: ${subRacasDisponiveis}`);
              }
            atributosComBonus = subRacaSelecionada.aplicarBonusSubRacial(atributosComBonus);
        }

        const periciasStatus = aplicarPericiasSelecionadas(pericias, classe);

        return new classeSelecionada(id, nome, nivel, raca, subRaca, atributosComBonus, classe, pericias);
    }
};