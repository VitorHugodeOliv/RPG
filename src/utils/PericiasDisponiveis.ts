import { PericiasStatus } from "../types/IPericias";

export function aplicarPericiasSelecionadas(periciasEscolhidas: string[], classe: string): PericiasStatus {
  const periciasStatus: PericiasStatus = {
    "Acrobacia": false,
    "Arcanismo": false,
    "Atletismo": false,
    "Atuação": false,
    "Enganação": false,
    "Furtividade": false,
    "História": false,
    "Intimidação": false,
    "Intuição": false,
    "Investigação": false,
    "LidarComAnimais": false,
    "Medicina": false,
    "Natureza": false,
    "Percepção": false,
    "Persuasão": false,
    "Prestidigitação": false,
    "Religião": false,
    "Sobrevivência": false,
  };

  const classeLower = classe.toLowerCase();
  
  let quantidadePermitida = 0;
  let periciasPermitidas: string[] = [];
  
  // DEPOIS DE REFAZER AQUI, ESTÁ MUITO GRANDE
  if (classeLower === "bardo") {
    quantidadePermitida = 3;
    periciasPermitidas = Object.keys(periciasStatus); 
  } else if (classeLower === "guerreiro") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Acrobacia", "Lidar com Animais", "Atletismo", "História",
      "Intuição", "Intimidação", "Percepção", "Sobrevivência"
    ];
  } else if (classeLower === "artifice") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Arcanismo", "História", "Investigação", "Natureza",
      "Medicina", "Prestidigitação", "Percepção"
    ];
  } else if (classeLower === "bruxo") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Arcanismo", "Enganação", "História", "Intimidação", "Natureza",
      "Investigação", "Religião"
    ];
  } else if (classeLower === "clerigo") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "História", "Medicina", "Intuição",
      "Religião", "Persuasão"
    ];
  } else if (classeLower === "druida") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Arcanismo", "Lidar com Animais", "Intuição",
      "Medicina", "Natureza", "Percepção", "Religião", "Sobrevivência"
    ];
  } else if (classeLower === "feiticeiro") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Arcanismo", "Enganação", "Intuição", "Intimidação",
      "Persuasão", "Religião"
    ];
  } else if (classeLower === "ladino") {
    quantidadePermitida = 4;
    periciasPermitidas = [
      "Acrobacia", "Atletismo", "Atuação", "Enganação", "Furtividade",
      "Intimidação", "Intuição", "Investigação", "Prestidigitação",
      "Persuasão", "Percepção"
    ];
  } else if (classeLower === "mago") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Arcanismo", "História", "Investigação", "Intuição",
      "Religião", "Medicina"
    ];
  } else if (classeLower === "monge") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Acrobacia", "Atletismo", "Furtividade", "História",
      "Intuição", "Religião"
    ];
  } else if (classeLower === "paladino") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Atletismo", "Intimidação", "Intuição",
      "Religião", "Medicina", "Persuasão"
    ];
  } else if (classeLower === "patrulheiro") {
    quantidadePermitida = 3;
    periciasPermitidas = [
      "Lidar com Animais", "Atletismo", "Furtividade", "Intuição",
      "Investigação", "Natureza", "Percepção", "Sobrevivência"
    ];
  } else {
    throw new Error(`Classe "${classe}" ainda não configurada para perícias.`);
  }

  if (periciasEscolhidas.length !== quantidadePermitida) {
    throw new Error(`A classe ${classe} deve escolher exatamente ${quantidadePermitida} perícia(s).`);
  }

  periciasEscolhidas.forEach(pericia => {
    if (!periciasPermitidas.includes(pericia)) {
      throw new Error(`A perícia "${pericia}" não é permitida para a classe ${classe}.`);
    }
    periciasStatus[pericia as keyof PericiasStatus] = true;
  });

  return periciasStatus;
}