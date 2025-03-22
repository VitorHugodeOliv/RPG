type CharacterSheet = {
  savingThrows: {
    strength: boolean;
    dexterity: boolean;
    intelligence: boolean;
    constitution: boolean;
    wisdom: boolean;
    charisma: boolean;
    };
skills: {
    acrobatics: boolean;
    arcana: boolean;
    athletics: boolean;
    performance: boolean;
    deception: boolean;
    stealth: boolean;
    history: boolean;
    intimidation: boolean;
    insight: boolean;
    investigation: boolean;
    animalHandling: boolean;
    medicine: boolean;
    nature: boolean;
    perception: boolean;
    persuasion: boolean;
    sleightOfHand: boolean;
    religion: boolean;
    survival: boolean;
    };
};
  
export { CharacterSheet };