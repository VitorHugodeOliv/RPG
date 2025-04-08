import { Raca, SubRaca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

class HalflingPesLeves implements SubRaca {
    nome = "Halfling Pés Leves";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            carisma: atributos.carisma + 1,
        }
    }
    habilidades? = ["Furtividade Natural"];
}

class HalflingCoracaoValente implements SubRaca {
    nome = "Halfling Coração Valente";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            constituicao: atributos.constituicao + 1,
        }
    }
    habilidades? = ["Resiliência dos Robustos"];
}

class HalflingFantasma implements SubRaca {
    nome = "Halfling Fantasma";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            sabedoria: atributos.sabedoria + 1,
        }
    }
    habilidades? = ["Fala silenciosa"];
}

export class Halfling implements Raca {
    nome: "Halfling" = "Halfling";
    subRacas = {
        "halfling pés leves": new HalflingPesLeves(),
        "halfling coração valente": new HalflingCoracaoValente(),
        "halfling fantasma": new HalflingFantasma(),
    }
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            destreza: atributos.destreza + 2,
        }
    }
}