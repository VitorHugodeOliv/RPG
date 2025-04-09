import { Personagem } from '../Character';
import { Raca } from '../../types/RacaInterface';
import { SubRaca } from '../../types/RacaInterface';
import { Atributos } from '../../types/IAtributos';
import { PericiasStatus } from '../../types/IPericias';
import { aplicarPericiasSelecionadas } from '../../utils/PericiasDisponiveis';

interface SlotsDeMagia {
  [nivel: number]: number;
}

export class Clerigo extends Personagem {
  truquesConhecidos: number;
  slotsDeMagia: SlotsDeMagia;
  pericias: PericiasStatus;

  constructor(id: string, nome: string, nivel: number = 1, raca: Raca, subRaca: SubRaca, atributosEscolhidos: Atributos, classe: string, periciasSelecionadas: string[]) {
    const periciasIniciais = aplicarPericiasSelecionadas(periciasSelecionadas, 'Clerigo');
    super(id, nome, nivel, raca, subRaca, atributosEscolhidos, classe = 'Clerigo', periciasIniciais);
    this.hp = this.calcularHP();
    this.id = id;
    this.truquesConhecidos = this.getTruquesConhecidos(nivel);
    this.slotsDeMagia = this.getSlotsDeMagia(nivel);
    this.pericias = periciasIniciais;
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
    if (nivel <= 3) return 3;
    if (nivel <= 9) return 4;
    return 5;
  }

  private getSlotsDeMagia(nivel: number): SlotsDeMagia {
    const tabelaDeMagia: { [nivel: number]: { [key: number]: number } } = {
        1: { 1: 2 },
        2: { 1: 3 },
        3: { 1: 4, 2: 2 },
        4: { 1: 4, 2: 3 },
        5: { 1: 4, 2: 3, 3: 2 },
        6: { 1: 4, 2: 3, 3: 3 },
        7: { 1: 4, 2: 3, 3: 3, 4: 1 },
        8: { 1: 4, 2: 3, 3: 3, 4: 2 },
        9: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
        10: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
        11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
        12: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
        13: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
        14: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
        15: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
    };

    return tabelaDeMagia[nivel] || {};
  }
}
