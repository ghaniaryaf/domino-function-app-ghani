"use client";

import React, { useState } from "react";
import {
  sortLowToHigh,
  sortHighToLow,
  flipDominoes,
  removeDuplicates,
} from "./DominoFunctions";
import { initialDominoes, Domino } from "./DominoData";

export default function DominoApp() {
  const [dominoes, setDominoes] = useState<Domino[]>(initialDominoes);

  function handleSortLow() {
    const sorted = sortLowToHigh(dominoes);
    setDominoes(sorted);
  }
  function handleSortHigh() {
    const sorted = sortHighToLow(dominoes);
    setDominoes(sorted);
  }
  function handleFlip() {
    const flipped = flipDominoes(dominoes);
    setDominoes(flipped);
  }
  function handleRemoveDuplicates() {
    const unique = removeDuplicates(dominoes);
    setDominoes(unique);
  }
  function handleReset() {
    setDominoes(initialDominoes);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={handleSortLow}
        >
          Sort Low → High
        </button>
        <button
          className="bg-blue-700 text-white px-3 py-1 rounded"
          onClick={handleSortHigh}
        >
          Sort High → Low
        </button>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={handleFlip}
        >
          Flip
        </button>
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded"
          onClick={handleRemoveDuplicates}
        >
          Remove Duplicates
        </button>
        <button
          className="bg-gray-500 text-white px-3 py-1 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {dominoes.map((domino, index) => {
          const left = domino[0];
          const right = domino[1];
          return (
            <div
              key={index}
              className="border p-2 text-center bg-white shadow rounded"
            >
              {left} | {right}
            </div>
          );
        })}
      </div>
    </div>
  );
}
