import { Atributos } from './IAtributos';

export interface SubRaca {
    nome: string;
    aplicarBonusSubRacial(atributos: Atributos): Atributos;
    habilidades?: string[];
}

export interface Raca {
    nome: string;
    subRacas: Record<string, SubRaca>;
    aplicarBonusRacial(atributos: Atributos): Atributos;
    habilidades?: string[];
}