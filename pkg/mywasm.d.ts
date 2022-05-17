/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
*/
export enum Cell {
  Dead,
  Alive,
}
/**
*/
export class Universe {
  free(): void;
/**
*/
  tick(): void;
/**
* Return new Conway's Game of Life universe
* @param {number} width
* @param {number} height
* @returns {Universe}
*/
  static new(width: number, height: number): Universe;
/**
* @returns {string}
*/
  render(): string;
/**
* @returns {number}
*/
  width(): number;
/**
* @returns {number}
*/
  height(): number;
/**
* @returns {number}
*/
  cells(): number;
}
