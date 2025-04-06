import { Raca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

export class Tieflings implements Raca {
    nome: "Tieflings" = "Tieflings";
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            carisma: atributos.carisma + 2,
        }
    }
}