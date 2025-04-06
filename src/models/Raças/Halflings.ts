import { Raca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

export class Halfling implements Raca {
    nome: "Halfling" = "Halfling";
    subRacas = {}
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            destreza: atributos.destreza + 2,
        }
    }
}