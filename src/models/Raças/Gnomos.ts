import { Raca, SubRaca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

class GnomoDaFloresta implements SubRaca {
    nome = "Gnomo da Floresta";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            destreza: atributos.destreza + 1,
        }
    }
    habilidades? = ["Ilusionista Nato", "Falar com Bestas Pequenas"];
}

class GnomoDasProfundezas implements SubRaca {
    nome = "Gnomo das Profundezas";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            destreza: atributos.destreza + 1,
        }
    }
    habilidades? = ["Visão no Escuro Superior", "Camuflagem na Pedra", "Idioma Adicional"];
}

export class Gnomo implements Raca {
    nome: "Gnomo" = "Gnomo";
    subRacas = {
        "gnomo da floresta": new GnomoDaFloresta(),
        "gnomo das profundezas": new GnomoDasProfundezas(),
    }
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            inteligencia: atributos.inteligencia + 2,
        }
    }
}