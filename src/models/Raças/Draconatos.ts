import { Raca } from "../../types/RacaInterface";
import { Atributos } from "../../types/IAtributos";

export class Draconato implements Raca {
    nome: "Draconato" = "Draconato";
    aplicarBonusRacial(atributos: Atributos): Atributos {
        return {
            ...atributos,
            forca: atributos.forca + 2,
            carisma: atributos.carisma + 1,
        }
    }
}