import { v4 as uuidv4 } from "uuid";
import { calcularModificadores } from "../utils/attributeModifiers"
import { inicializadorDeAtributos } from "../utils/atributosInicial"

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
  raca: string;
  hp: number;
  classe: string;

  
  constructor(id: string, nome: string, nivel: number = 1, raca: string, atributosEscolhidos: { [key: number]: number }, classe: string) {
    const id4 = uuidv4();
    id = id4;
    this.id = id;
    this.nome = nome;
    this.nivel = nivel;
    this.raca = raca;
    this.atributos = inicializadorDeAtributos(atributosEscolhidos);
    this.modificadores = calcularModificadores(this.atributos);
    this.classe = classe;
    this.hp = this.calcularHP();
  }

  protected abstract calcularHpBase(): number;

  protected calcularHP(): number {
    const modificadorBase = 0;
    return this.calcularHpBase() + modificadorBase;
  }

}
