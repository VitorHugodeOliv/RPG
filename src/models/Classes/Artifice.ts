import { Personagem } from '../Character';

interface SlotsDeMagia {
  [nivel: number]: number;
}

export class Artifice extends Personagem {
  truquesConhecidos: number;
  slotsDeMagia: SlotsDeMagia;

  constructor(nome: string, nivel: number = 1, raca: string, atributosEscolhidos: { [key: string]: number }) {
    super(nome, nivel, raca, atributosEscolhidos);
    this.hp = this.calcularHP();
    this.truquesConhecidos = this.getTruquesConhecidos(nivel);
    this.slotsDeMagia = this.getSlotsDeMagia(nivel);
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

  private getTruquesConhecidos(nivel: number): number {
    switch (nivel) {
      case 1:
        return 2
      case 2:
        return 2
      case 3:
        return 2
      case 4:
        return 2
      case 5:
        return 2
      case 6:
        return 2
      case 7:
        return 2
      case 8:
        return 2
      case 9:
        return 2
      case 10:
        return 3
      case 11:
        return 3
      case 12:
        return 3
      case 13:
        return 3
      case 14:
        return 4
      case 15:
        return 4
      default:
        return 0
    }
  }

  private getSlotsDeMagia(nivel: number): SlotsDeMagia {
    const slot: SlotsDeMagia = {};
    switch (nivel) {
      case 1:
        slot[1] = 2;
        break;
      case 2:
        slot[1] = 3;
        break;
      case 3:
        slot[1] = 3;
        break;
      case 4:
        slot[1] = 3;
        break;
      case 5:
        slot[1] = 4;
        slot[2] = 2;
        break;
      case 6:
        slot[1] = 4;
        slot[2] = 2;
        break;
      case 7:
        slot[1] = 4;
        slot[2] = 3;
        break
      case 8:
        slot[1] = 4;
        slot[2] = 3;
        break;
      case 9:
        slot[1] = 4;
        slot[2] = 3;
        slot[3] = 2;
        break;
      case 10:
        slot[1] = 4;
        slot[2] = 3;
        slot[3] = 2;
        break;
      case 11:
        slot[1] = 4;
        slot[2] = 3;
        slot[3] = 3;
        break;
      case 12:
        slot[1] = 4;
        slot[2] = 3;
        slot[3] = 3;
        break;
      case 13:
        slot[1] = 4;
        slot[2] = 3;
        slot[3] = 3;
        slot[4] = 1;
        break;
      case 14:
        slot[1] = 4;
        slot[2] = 3;
        slot[3] = 3;
        slot[4] = 1;
        break;
      case 15:
        slot[1] = 4;
        slot[2] = 3;
        slot[3] = 3;
        slot[4] = 2;
        break;
      default:
        break;
    }
    return slot;
  }

}
