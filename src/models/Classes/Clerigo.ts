import { Personagem } from '../Character';

export class Clerigo extends Personagem {
  constructor(nome: string, nivel: number, raca: string, atributosEscolhidos: { [key: string]: number }) {
    super(nome, nivel, raca, atributosEscolhidos);
  }

  protected calcularHpBase(): number {
    let hpBase = 0
    if (this.nivel >= 1) {
      hpBase += 8 + this.atributos.constituicao
    }
    if (this.nivel > 1) {
      hpBase += (this.nivel - 1) * (5 + this.atributos.constituicao)
    }
    return hpBase
    
    }
    
  protected calcularHP(): number {
  return this.calcularHpBase()
  }
}