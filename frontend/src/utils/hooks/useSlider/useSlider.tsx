import { useState } from 'react';

type Direction = 1 | -1;

/**
 *
 * @param limit -> maximum of entities per slide
 * @param arrayLength -> length of the array you are trying to "sliderize"
 * @param startingIndex -> your wished starting index
 */
export const useSlider = (limit: number, arrayLength: number, startingIndex: number = 0) => {
  if (startingIndex >= arrayLength) throw new Error('startingIndex cannot be bigger than arrayLength');

  const [start, setStart] = useState(startingIndex);

  const changeDirection = (direction: Direction) => {
    let newStart = start;
    newStart += direction;
    if (newStart < 0) newStart = 0;
    else if (newStart > arrayLength - limit) newStart = arrayLength - limit;
    setStart(newStart);
  };

  return {
    start,
    changeDirection,
  };
};
