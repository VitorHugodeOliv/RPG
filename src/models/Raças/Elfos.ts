import { Raca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

export class Elfo implements Raca {
    nome: "Elfo" = "Elfo";
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            destreza: atributos.destreza + 2,
        }
    }
}