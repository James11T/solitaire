import seedrandom from "seedrandom";

const getSeededRandom = (input: string) => {
  const rng = seedrandom(input);
  return rng();
};

export { getSeededRandom };
