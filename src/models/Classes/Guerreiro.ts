import { Personagem } from '../Character';
import { Raca } from '../../types/RacaInterface';
import { SubRaca } from '../../types/RacaInterface';
import { Atributos } from '../../types/IAtributos';
import { PericiasStatus } from '../../types/IPericias';
import { aplicarPericiasSelecionadas } from '../../utils/PericiasDisponiveis';

export class Guerreiro extends Personagem {
  recuperarFolego: number;
  maestriaDeArmas: number;
  pericias: PericiasStatus;

  constructor(id: string, nome: string, nivel: number = 1, raca: Raca, subRaca: SubRaca, atributosEscolhidos: Atributos, classe: string, periciasSelecionadas: string[]) {
    const periciasIniciais = aplicarPericiasSelecionadas(periciasSelecionadas, 'Guerreiro');
    super(id, nome, nivel, raca, subRaca, atributosEscolhidos, classe = 'Guerreiro', periciasIniciais);
    this.hp = this.calcularHP();
    this.id = id;
    this.recuperarFolego = this.getRecuperarFolego(nivel);
    this.maestriaDeArmas = this.getMaestriaDeArmas(nivel);
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
