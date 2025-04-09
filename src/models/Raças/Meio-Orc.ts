import { Raca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

export class MeioOrc implements Raca {
    nome: "Meio-Orc" = "Meio-Orc";
    subRacas = {}
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            forca: atributos.forca + 2,
            constituicao: atributos.constituicao + 1,
        }
    }
}