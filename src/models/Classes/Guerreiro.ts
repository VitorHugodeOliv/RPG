import { Personagem } from '../Character';

export class Guerreiro extends Personagem {
  recuperarFolego: number;
  maestriaDeArmas: number;

  constructor(id: string, nome: string, nivel: number = 1, raca: string, atributosEscolhidos: { [key: number]: number }, classe: string) {
    super(id, nome, nivel, raca, atributosEscolhidos, classe = 'Guerreiro');
    this.hp = this.calcularHP();
    this.id = id;
    this.recuperarFolego = this.getRecuperarFolego(nivel);
    this.maestriaDeArmas = this.getMaestriaDeArmas(nivel);
  }

  protected calcularHpBase(): number {
    let hpBase = 0
    if (this.nivel >= 1) {
      hpBase += 10 + this.atributos.constituicao
    }
    if (this.nivel > 1) {
      hpBase += (this.nivel - 1) * (6 + this.atributos.constituicao)
    }
    return hpBase

  }

  protected calcularHP(): number {
    return this.calcularHpBase()
  }

  private getRecuperarFolego(nivel: number): number {
    if (nivel <= 3) return 2;
    if (nivel <= 9) return 3;
    return 4;
  }

  private getMaestriaDeArmas(nivel: number): number {
    if (nivel <= 3) return 3;
    if (nivel <= 9) return 4;
    if (nivel <= 15) return 5;
    return 6;
  }
}
