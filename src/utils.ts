import {KeyType} from './constants';

export const compute = (
  firstOperandArg: string,
  secondOperandArg: string,
  operation?: KeyType,
): string => {
  const firstOperand: number = parseFloat(firstOperandArg);
  const secondOperand: number = parseFloat(secondOperandArg);

  let result: number = 0;
  switch (operation) {
    case KeyType.add:
      result = firstOperand + secondOperand;
      break;
    case KeyType.substract:
      result = firstOperand - secondOperand;
      break;
    case KeyType.multiply:
      result = firstOperand * secondOperand;
      break;
    case KeyType.divide:
      result = firstOperand / secondOperand;
      break;
  }

  return result?.toLocaleString();
};
