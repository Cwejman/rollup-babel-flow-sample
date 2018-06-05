// @flow
import type { Mul, Div } from './types';

export const mul: Mul = (x, y) => x * y;
export const div: Div = (x, y) => x / y;

mul(2, 3); // ?
