import { Personagem } from '../Character';
import { Raca } from '../../types/RacaInterface';
import { SubRaca } from '../../types/RacaInterface';
import { Atributos } from '../../types/IAtributos';
import { PericiasStatus } from '../../types/IPericias';
import { aplicarPericiasSelecionadas } from '../../utils/PericiasDisponiveis';

interface SlotsDeMagia {
  [nivel: number]: number;
}

export class Patrulheiro extends Personagem {
  inimigosFavoritos: number;
  slotsDeMagia: SlotsDeMagia;
  pericias: PericiasStatus;

  constructor(id: string, nome: string, nivel: number = 1, raca: Raca, subRaca: SubRaca, atributosEscolhidos: Atributos, classe: string, periciasSelecionadas: string[]) {
    const periciasIniciais = aplicarPericiasSelecionadas(periciasSelecionadas,'Patrulheiro');
    super(id, nome, nivel, raca, subRaca, atributosEscolhidos, classe = 'Patrulheiro', periciasIniciais);
    this.hp = this.calcularHP();
    this.id = id;
    this.inimigosFavoritos = this.getInimigosConhecidos(nivel);
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

  private getInimigosConhecidos(nivel: number): number {
    if (nivel <= 4) return 2;
    if (nivel <= 8) return 3;
    if (nivel <= 12) return 4;
    if (nivel <= 16) return 5;
    return 6;
  }

  private getSlotsDeMagia(nivel: number): SlotsDeMagia {
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
        13: { 1: 4, 2: 3, 3: 3, 4: 1 },
        14: { 1: 4, 2: 3, 3: 3, 4: 1 },
        15: { 1: 4, 2: 3, 3: 3, 4: 2 },
    };

    return tabelaDeMagia[nivel] || {};
  }
}
