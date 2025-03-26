import { borrowerNames } from "./constants";

export const getRandomBorrower = (): string => {
  return borrowerNames[Math.floor(Math.random() * borrowerNames.length)];
};