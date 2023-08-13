const shuffle = <T>(array: Array<T> | ReadonlyArray<T>): T[] => {
  const mutableArray = [...array];

  let currentIndex = mutableArray.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [mutableArray[currentIndex], mutableArray[randomIndex]] = [
      mutableArray[randomIndex],
      mutableArray[currentIndex],
    ];
  }

  return mutableArray;
};

export default shuffle;
