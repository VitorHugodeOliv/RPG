import { Raca, SubRaca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

class TieflingsInfernal implements SubRaca {
    nome = "Tieflings Infernal";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            inteligencia: atributos.inteligencia + 1,
        }
    }
    habilidades? = ["Resistência Infernal", "Legado Infernal"];
}

export class Tieflings implements Raca {
    nome: "Tieflings" = "Tieflings";
    subRacas = {
        "tieflings infernal": new TieflingsInfernal(),
    }
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            carisma: atributos.carisma + 2,
        }
    }
}