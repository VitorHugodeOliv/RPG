export function getModifier(attributeValue: number): number {
  return Math.floor((attributeValue - 10) / 2);
}

export function calcularModificadores(attributes: {
  forca: number;
  destreza: number;
  constituicao: number;
  inteligencia: number;
  sabedoria: number;
  carisma: number;
}): {
  forca: number;
  destreza: number;
  constituicao: number;
  inteligencia: number;
  sabedoria: number;
  carisma: number;
} {
  return {
    forca: getModifier(attributes.forca),
    destreza: getModifier(attributes.destreza),
    constituicao: getModifier(attributes.constituicao),
    inteligencia: getModifier(attributes.inteligencia),
    sabedoria: getModifier(attributes.sabedoria),
    carisma: getModifier(attributes.carisma),
  };
}
