export abstract class Personagem {
  nome: string;
  nivel: number;
  atributos: {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
  }
  raca: string;
  hp: number;

  
  constructor(nome: string, nivel: number = 1, raca: string, atributosEscolhidos: { [key: string]: number }) {
    this.nome = nome;
    this.nivel = nivel;
    this.raca = raca;
    this.atributos = this.inicializadorDeAtributos(atributosEscolhidos);  
    this.hp = this.calcularHP();
    
  }

  protected inicializadorDeAtributos(atributosEscolhidos: { [key: string]: number }): {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
  } {
    const valoresDisponiveis = [8, 10, 12, 13, 14, 15];
    const atributosBase: { [key: string]: number } = {
      forca: 0,
      destreza: 0,
      constituicao: 0,
      inteligencia: 0,
      sabedoria: 0,
      carisma: 0,
    };
    const nomesAtributos = Object.keys(atributosBase);

    if (Object.keys(atributosEscolhidos).length !== nomesAtributos.length) {
      throw new Error('Você deve escolher um valor para cada atributo.');
    }

    const valoresUsados = new Set<number>();
    for (const atributo in atributosEscolhidos) {
      if (!nomesAtributos.includes(atributo)) {
        throw new Error(`O atributo ${atributo} não existe.`);
      }
      const valor = atributosEscolhidos[atributo];
      if (!valoresDisponiveis.includes(valor)) {
        throw new Error(`O valor ${valor} não é permitido.`);
      }
      if (valoresUsados.has(valor)) {
        throw new Error(`O valor ${valor} já foi usado.`);
      }
      valoresUsados.add(valor);
      atributosBase[atributo] = valor;
    }

    return atributosBase as {
      forca: number;
      destreza: number;
      constituicao: number;
      inteligencia: number;
      sabedoria: number;
      carisma: number;
    };
  }

  protected abstract calcularHpBase(): number;

  protected calcularHP(): number {
    const modificadorBase = 0;
    return this.calcularHpBase() + modificadorBase;
  }
}
