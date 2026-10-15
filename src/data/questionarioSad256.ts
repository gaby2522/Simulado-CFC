import { Question } from '../types/quiz';
import { questionsSadPart1 } from './questionarioSadPart1';
import { questionsSadPart2 } from './questionarioSadPart2';
import { questionsSadPart3 } from './questionarioSadPart3';
import { questionsSadPart4 } from './questionarioSadPart4';

export const questionarioSad256: Question[] = [
  ...questionsSadPart1,
  ...questionsSadPart2,
  ...questionsSadPart3,
  ...questionsSadPart4
];
