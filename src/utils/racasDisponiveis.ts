import { Raca } from "../types/RacaInterface";
import { Anao } from "../models/Raças/Anao";
import { Elfo } from "../models/Raças/Elfos";
import { Halfling } from "../models/Raças/Halflings";
import { Gnomo } from "../models/Raças/Gnomos";
import { Tieflings } from "../models/Raças/Tieflings";
import { Humano } from "../models/Raças/Humano";
import { Draconato } from "../models/Raças/Draconatos";
import { MeioOrc } from "../models/Raças/Meio-Orc";


export const racasDisponiveis: Record<string, Raca> = {
    anao: new Anao(),
    elfo: new Elfo(),
    halfling: new Halfling(),
    gnomo: new Gnomo(),
    tieflings: new Tieflings(),
    humano: new Humano(),
    draconato: new Draconato(),
    "meio-orc": new MeioOrc(),
}