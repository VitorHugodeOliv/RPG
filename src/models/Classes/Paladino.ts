import { Personagem } from '../Character';
import { Raca } from '../../types/RacaInterface';
import { SubRaca } from '../../types/RacaInterface';
import { Atributos } from '../../types/IAtributos';
import { PericiasStatus } from '../../types/IPericias';
import { aplicarPericiasSelecionadas } from '../../utils/PericiasDisponiveis';

interface CanalizarDivindade {
  [nivel: number]: number;
}

export class Paladino extends Personagem {
  canalizarDivindade: number;
  slotsDeMagia: CanalizarDivindade;
  pericias: PericiasStatus;

  constructor(id: string, nome: string, nivel: number = 1, raca: Raca, subRaca: SubRaca, atributosEscolhidos: Atributos, classe: string, periciasSelecionadas: string[]) {
    const periciasIniciais = aplicarPericiasSelecionadas(periciasSelecionadas, 'Paladino');
    super(id, nome, nivel, raca, subRaca, atributosEscolhidos, classe = 'Paladino', periciasIniciais);
    this.hp = this.calcularHP();
    this.id = id;
    this.canalizarDivindade = this.getCanalizarDivindade(nivel);
    this.slotsDeMagia = this.getSlotsDeMagia(nivel);
    this.pericias = periciasIniciais;
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

  private getCanalizarDivindade(nivel: number): number {
    if (nivel <= 2) return 0;
    if (nivel <= 10) return 2;
    return 3;
  }

  private getSlotsDeMagia(nivel: number): CanalizarDivindade {
    const tabelaDeMagia: { [nivel: number]: { [key: number]: number } } = {
        1: { 1: 2 },
        2: { 1: 2 },
        3: { 1: 3 },
        4: { 1: 3 },
        5: { 1: 4, 2: 2 },
        6: { 1: 4, 2: 2 },
        7: { 1: 4, 2: 3 },
        8: { 1: 4, 2: 3 },
        9: { 1: 4, 2: 3, 3: 2 },
        10: { 1: 4, 2: 3, 3: 2 },
        11: { 1: 4, 2: 3, 3: 3 },
        12: { 1: 4, 2: 3, 3: 3 },
        13: { 1: 4, 2: 3, 3: 2, 4: 1 },
        14: { 1: 4, 2: 3, 3: 2, 4: 1 },
        15: { 1: 4, 2: 3, 3: 2, 4: 2 },
    };

    return tabelaDeMagia[nivel] || {};
  }
}
