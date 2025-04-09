import { v4 as uuidv4 } from "uuid";
import { calcularModificadores } from "../utils/attributeModifiers"
import { Raca } from "../types/RacaInterface";
import { SubRaca } from "../types/RacaInterface";
import { Atributos } from "../types/IAtributos";
import { PericiasStatus } from "../types/IPericias";

export abstract class Personagem {
  id: string;
  nome: string;
  nivel: number;
  atributos: {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
  };
  modificadores: {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
  };
  raca: Raca;
  subRaca: SubRaca;
  hp: number;
  classe: string;
  pericias: PericiasStatus;

  
  constructor(id: string, nome: string, nivel: number = 1, raca: Raca, subRaca: SubRaca, atributosFinal: Atributos, classe: string, pericias: PericiasStatus) {
    const id4 = uuidv4();
    id = id4;
    this.id = id;
    this.nome = nome;
    this.nivel = nivel;
    this.raca = raca;
    this.subRaca = subRaca;
    this.atributos = atributosFinal;
    this.modificadores = calcularModificadores(this.atributos);
    this.classe = classe;
    this.hp = this.calcularHP();
    this.pericias = pericias;
  }

  protected abstract calcularHpBase(): number;

  protected calcularHP(): number {
    const modificadorBase = 0;
    return this.calcularHpBase() + modificadorBase;
  }

}
