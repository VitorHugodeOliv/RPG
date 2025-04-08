import { Raca, SubRaca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

class AltoElfo implements SubRaca {
    nome = "Alto Elfo";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            inteligencia: atributos.inteligencia + 1,
        }
    }
    habilidades? = ["Treinamento Élfico com Armas", "Truque", "Idioma Adicional"];
}

class ElfoDaFloresta implements SubRaca {
    nome = "Elfo da Floresta";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            sabedoria: atributos.sabedoria + 1,
        }
    }
    habilidades? = ["Treinamento Élfico com Armas", "Máscara da Natureza", "Pés Ligeiros"];
}

class ElfoDrow implements SubRaca {
    nome = "Elfo Drow";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            carisma: atributos.carisma + 1,
        }
    }
    habilidades? = ["Treinamento Élfico com Armas", "Visão no Escuro Superior", "Sensibilidade à Luz Solar", "Magia Drow", "Treinamento Drow com Armas"];
}

export class Elfo implements Raca {
    nome: "Elfo" = "Elfo";
    subRacas = {
        "alto elfo": new AltoElfo(),
        "elfo da floresta": new ElfoDaFloresta(),
        "elfo drow": new ElfoDrow(),
    }
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            destreza: atributos.destreza + 2,
        }
    }
}