import { Personagem } from '../Character';

export class Feiticeiro extends Personagem {
  constructor(nome: string, nivel: number, raca: string, atributosEscolhidos: { [key: string]: number }) {
    super(nome, nivel, raca, atributosEscolhidos);
  }

  protected calcularHpBase(): number {
    let hpBase = 0
    if (this.nivel >= 1) {
      hpBase += 6 + this.atributos.constituicao
    }
    if (this.nivel > 1) {
      hpBase += (this.nivel - 1) * (4 + this.atributos.constituicao)
    }
    return hpBase
    
  }
    
  protected calcularHP(): number {
  return this.calcularHpBase()
  }
}