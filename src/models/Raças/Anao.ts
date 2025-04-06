import { Raca, SubRaca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

class AnaoDaColina implements SubRaca {
    nome = "Anão da Colina";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            sabedoria: atributos.sabedoria + 1,
        }
    }
    habilidades? = ["Tenacidade Anã"];
}

class AnaoDaMontanha implements SubRaca {
    nome = "Anão da Montanha";
    aplicarBonusSubRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            forca: atributos.forca + 2,
        }
    }
    habilidades? = ["Treinamento Anão com Armaduras"];
}


export class Anao implements Raca {
    nome: "Anão" = "Anão";
    subRacas = {
        "anão da colina": new AnaoDaColina(),
        "anão da montanha": new AnaoDaMontanha(),
    }
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            constituicao: atributos.constituicao + 2,
        }
    }
}