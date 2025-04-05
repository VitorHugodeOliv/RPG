import { Raca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

export class Anao implements Raca {
    nome: "Anão" = "Anão";
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            constituicao: atributos.constituicao + 2,
        }
    }
}