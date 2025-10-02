import { Domino } from "./DominoData";

export function sortLowToHigh(dominoes: Domino[]): Domino[] {
  const copy = [...dominoes];
  copy.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  return copy;
}

export function sortHighToLow(dominoes: Domino[]): Domino[] {
  const copy = [...dominoes];
  copy.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return b[1] - a[1];
    }
  });
  return copy;
}

export function flipDominoes(dominoes: Domino[]): Domino[] {
  const flipped: Domino[] = [];
  for (const [a, b] of dominoes) {
    flipped.push([b, a]);
  }
  return flipped;
}

export function removeDuplicates(dominoes: Domino[]): Domino[] {
  const seen = new Set<string>();
  const result: Domino[] = [];

  for (const [a, b] of dominoes) {
    const low = Math.min(a, b);
    const high = Math.max(a, b);
    const key = `${low}-${high}`;

    if (!seen.has(key)) {
      seen.add(key);
      result.push([a, b]);
    }
  }

  return result;
}