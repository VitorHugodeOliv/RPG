import { Personagem } from '../models/Character';
import { Artifice } from '../models/Classes/Artifice';
import { Barbaro } from '../models/Classes/Barbaro';
import { Bardo } from '../models/Classes/Bardo';
import { Bruxo } from '../models/Classes/Bruxo';
import { Clerigo } from '../models/Classes/Clerigo';
import { Druida } from '../models/Classes/Druida';
import { Feiticeiro } from '../models/Classes/Feiticeiro';
import { Guerreiro } from '../models/Classes/Guerreiro';
import { Ladino } from '../models/Classes/Ladino';
import { Mago } from '../models/Classes/Mago';
import { Monge } from '../models/Classes/Monge';
import { Paladino } from '../models/Classes/Paladino';
import { Patrulheiro } from '../models/Classes/Patrulheiro';

export const classesDisponiveis: Record<string, new(...args: any[]) => Personagem> = {
    artifice: Artifice,
    barbaro: Barbaro,
    bardo: Bardo,
    bruxo: Bruxo,
    clerigo: Clerigo,
    druida: Druida,
    feiticeiro: Feiticeiro,
    guerreiro: Guerreiro,
    ladino: Ladino,
    mago: Mago,
    monge: Monge,
    paladino: Paladino,
    patrulheiro: Patrulheiro,
};