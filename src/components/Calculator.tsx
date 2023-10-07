import React, {useState} from 'react';
import Display from './Display';
import Keypad from './Keypad';
import {KeyType} from '../constants';
import {compute} from '../utils';
import {KeyData} from '../types';

const Calculator: React.FC = () => {
  const [previousValue, setPreviousValue] = useState<string>('');
  const [currentValue, setCurrentValue] = useState<string>('');
  const [currentOperator, setCurrentOperator] = useState<KeyType>();

  const handleDigit = (value?: string) => {
    if (typeof value === 'string') {
      if (currentValue === '') {
        setCurrentValue(value);
      } else {
        setCurrentValue(`${currentValue}${value}`);
      }
    }
  };

  const handleDot = () => {
    const hasDecimalAlready: boolean = currentValue?.includes('.');
    if (!hasDecimalAlready) {
      setCurrentValue(`${currentValue}.`);
    }
  };

  const handleSign = () => {
    const newValue =
      currentValue != ''
        ? `${parseFloat(currentValue) * -1}`
        : currentValue?.includes('-')
        ? '0'
        : '-0';
    setCurrentValue(newValue);
  };

  const handleOperator = (operator: KeyType) => {
    const hasBothOperands = currentValue != '' && previousValue != '';
    if (currentOperator && hasBothOperands) {
      const result = compute(previousValue, currentValue, currentOperator);
      setPreviousValue(result);
    } else if (previousValue == '' && currentValue) {
      setPreviousValue(currentValue);
    }
    setCurrentValue('');
    setCurrentOperator(operator);
  };

  const handlePercentage = () => {
    const isComputed = currentValue === ''
    const screenValue = isComputed ? previousValue : currentValue
    const result = `${parseFloat(screenValue) * 0.01}`;
    if(isComputed){
      setPreviousValue('')
    }
    setCurrentValue(result);
  };

  const handleEvaluate = () => {
    const isExpression =
      currentValue != '' && previousValue != '' && currentOperator;
    if (isExpression) {
      const result = compute(previousValue, currentValue, currentOperator);
      setPreviousValue(result);
      setCurrentValue('');
      setCurrentOperator(undefined);
    }
  };

  const handleClear = () => {
    setCurrentValue('');
    setPreviousValue('');
    setCurrentOperator(undefined);
  };

  console.log({currentValue, previousValue, currentOperator})

  const handleKeyPress = ({value, type}: KeyData) => {
    switch (type) {
      case KeyType.digit:
        handleDigit(value);
        break;
      case KeyType.dot:
        handleDot();
        break;
      case KeyType.sign:
        handleSign();
        break;
      case KeyType.add:
      case KeyType.substract:
      case KeyType.multiply:
      case KeyType.divide:
        handleOperator(type);
        break;
      case KeyType.percentage:
        handlePercentage();
        break;
      case KeyType.evaluate:
        handleEvaluate();
        break;
      case KeyType.clear:
        handleClear();
        break;
    }
  };

  const displayValue = currentValue === '' ? previousValue : currentValue;

  return (
    <>
      <Display value={displayValue} />
      <Keypad onPressKey={handleKeyPress} />
    </>
  );
};

export default Calculator;
