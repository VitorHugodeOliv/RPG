import { Raca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

export class Humano implements Raca {
    nome: "Humano" = "Humano";
    subRacas = {}
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            carisma: atributos.carisma + 1,
            forca: atributos.forca + 1,
            destreza: atributos.destreza + 1,
            constituicao: atributos.constituicao + 1,
            inteligencia: atributos.inteligencia + 1,
            sabedoria: atributos.sabedoria + 1,
        }
    }
}