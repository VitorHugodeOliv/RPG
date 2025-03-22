export function getModifier(attributeValue: number): number {
  return Math.floor((attributeValue - 10) / 2);
}

export function calculateModifiers(attributes: Record<string, number>): Record<string, number> {
  return Object.keys(attributes).reduce((acc, attr) => {
    acc[attr] = getModifier(attributes[attr]);
    return acc;
  }, {} as Record<string, number>);
}
