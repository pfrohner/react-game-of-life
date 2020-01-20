import { useState, useEffect, useCallback } from 'react';

const randomCell = (): number => Math.round(Math.random());

const makeArray = (width: number, height: number, fill = randomCell): number[][] =>
  Array.from({ length: width }, () => Array.from({ length: height }, fill));

export default function useLife(width: number, height: number) {
  const [grid, setGrid] = useState<number[][]>([]);

  const get = (x: number, y: number, r = grid[x]) => r ? r[y] || 0 : 0;
  
  const countNeighbors = (x: number, y: number) => {
    return (
      get(x - 1, y - 1) +
      get(x - 1, y) +
      get(x - 1, y + 1) +
      get(x, y - 1) +
      get(x, y + 1) +
      get(x + 1, y - 1) +
      get(x + 1, y) +
      get(x + 1, y + 1)
    );
  }

  const step = () => {
    const newGrid: number[][] = [];

    for (let x = 0; x < width; x++) {
      const newRow: number[] = [];

      for (let y = 0; y < height; y++) {
        const neighbors = countNeighbors(x, y);

        if (get(x, y)) {
          if (neighbors < 2) {
            newRow.push(0);
          } else if (neighbors < 4) {
            newRow.push(1);
          } else {
            newRow.push(0);
          }
        } else if (neighbors === 3) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      }
      newGrid.push(newRow);
    }

    setGrid(newGrid);
  }

  const reset = useCallback(() => {
    setGrid(makeArray(width, height));
  }, [width, height])  

  useEffect(
    () => {
      reset();
    },
    [reset]
  );

  return { reset, grid, step };
}
