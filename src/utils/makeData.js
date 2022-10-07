import namor from "namor";
import { v4 as uuidv4 } from "uuid";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    id: uuidv4(),
    caseId: Math.floor(Math.random() * 1000),
    studentName: namor.generate({ words: 1, numbers: 0, subset: "manly" }),
    loan: Math.floor(Math.random() * 10000),
    creditScore: Math.floor(Math.random() * 1000) + 200,
    fairRating: Math.floor(Math.random() * 100) + 20,
    day: Math.floor(Math.random() * 31),
    status:
      statusChance > 0.66
        ? "Loan Approved"
        : statusChance > 0.33
        ? "Under Review"
        : "Rejected",
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
