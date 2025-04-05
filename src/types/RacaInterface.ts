import { Atributos } from './IAtributos';

export interface Raca {
    nome: string;
    aplicarBonusRacial(atributos: Atributos): Atributos;
}