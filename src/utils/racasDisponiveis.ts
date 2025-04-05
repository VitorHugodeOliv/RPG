import { Raca } from "../types/RacaInterface";
import { Anao } from "../models/Raças/Anao";

export const racasDisponiveis: Record<string, Raca> = {
    anao: new Anao(),
}