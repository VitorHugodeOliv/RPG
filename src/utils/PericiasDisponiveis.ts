import { PericiasStatus } from "../types/IPericias";

export function aplicarPericiasSelecionadas(periciasEscolhidas: string[], classe: string): PericiasStatus {
  const periciasStatus: PericiasStatus = {
    "Acrobacia": false,
    "Arcanismo": false,
    "Atletismo": false,
    "Atuação": false,
    "Blefar": false,
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

  if (classeLower === "bardo") {
    quantidadePermitida = 3;
    periciasPermitidas = Object.keys(periciasStatus); // pode escolher qualquer uma
  } else if (classeLower === "guerreiro") {
    quantidadePermitida = 2;
    periciasPermitidas = [
      "Acrobacia", "Lidar com Animais", "Atletismo", "História",
      "Intuição", "Intimidação", "Percepção", "Sobrevivência"
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