
import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import { evaluateExpression } from "@/utils/calculator";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = previousValue || "0";
      const result = evaluateExpression(`${currentValue} ${operation} ${display}`);
      
      setDisplay(String(result));
      setPreviousValue(String(result));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = () => {
    if (previousValue !== null && operation) {
      const result = evaluateExpression(`${previousValue} ${operation} ${display}`);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay("0");
  };

  const inputScientific = (func: string) => {
    const value = parseFloat(display);
    let result: number;

    switch (func) {
      case "sin":
        result = Math.sin(value * Math.PI / 180);
        break;
      case "cos":
        result = Math.cos(value * Math.PI / 180);
        break;
      case "tan":
        result = Math.tan(value * Math.PI / 180);
        break;
      case "log":
        result = Math.log10(value);
        break;
      case "ln":
        result = Math.log(value);
        break;
      case "sqrt":
        result = Math.sqrt(value);
        break;
      case "square":
        result = value * value;
        break;
      case "cube":
        result = value * value * value;
        break;
      case "reciprocal":
        result = 1 / value;
        break;
      case "factorial":
        result = factorial(value);
        break;
      case "pi":
        result = Math.PI;
        break;
      case "e":
        result = Math.E;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setWaitingForOperand(true);
  };

  const factorial = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };

  const memoryOperation = (operation: string) => {
    const value = parseFloat(display);
    
    switch (operation) {
      case "MC":
        setMemory(0);
        break;
      case "MR":
        setDisplay(String(memory));
        setWaitingForOperand(true);
        break;
      case "M+":
        setMemory(memory + value);
        break;
      case "M-":
        setMemory(memory - value);
        break;
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const toggleSign = () => {
    if (display !== "0") {
      setDisplay(display.charAt(0) === "-" ? display.slice(1) : "-" + display);
    }
  };

  const percentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
    setWaitingForOperand(true);
  };

  return (
    <div className="bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-700">
      <Display value={display} />
      <ButtonGrid
        onNumber={inputNumber}
        onOperation={inputOperation}
        onCalculate={calculate}
        onClear={clear}
        onClearEntry={clearEntry}
        onScientific={inputScientific}
        onMemory={memoryOperation}
        onDecimal={inputDecimal}
        onToggleSign={toggleSign}
        onPercentage={percentage}
      />
    </div>
  );
};

export default Calculator;
