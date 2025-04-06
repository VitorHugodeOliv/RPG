import { Raca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

export class Gnomo implements Raca {
    nome: "Gnomo" = "Gnomo";
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            inteligencia: atributos.inteligencia + 2,
        }
    }
}