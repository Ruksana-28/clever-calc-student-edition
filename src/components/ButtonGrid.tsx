
import Button from "./Button";

interface ButtonGridProps {
  onNumber: (num: string) => void;
  onOperation: (op: string) => void;
  onCalculate: () => void;
  onClear: () => void;
  onClearEntry: () => void;
  onScientific: (func: string) => void;
  onMemory: (op: string) => void;
  onDecimal: () => void;
  onToggleSign: () => void;
  onPercentage: () => void;
}

const ButtonGrid = ({
  onNumber,
  onOperation,
  onCalculate,
  onClear,
  onClearEntry,
  onScientific,
  onMemory,
  onDecimal,
  onToggleSign,
  onPercentage,
}: ButtonGridProps) => {
  return (
    <div className="grid gap-3">
      {/* Memory and Scientific Functions Row */}
      <div className="grid grid-cols-5 gap-2">
        <Button variant="memory" onClick={() => onMemory("MC")}>MC</Button>
        <Button variant="memory" onClick={() => onMemory("MR")}>MR</Button>
        <Button variant="memory" onClick={() => onMemory("M+")}>M+</Button>
        <Button variant="memory" onClick={() => onMemory("M-")}>M-</Button>
        <Button variant="clear" onClick={onClear}>C</Button>
      </div>

      {/* Scientific Functions Row 1 */}
      <div className="grid grid-cols-5 gap-2">
        <Button variant="scientific" onClick={() => onScientific("sin")}>sin</Button>
        <Button variant="scientific" onClick={() => onScientific("cos")}>cos</Button>
        <Button variant="scientific" onClick={() => onScientific("tan")}>tan</Button>
        <Button variant="scientific" onClick={() => onScientific("log")}>log</Button>
        <Button variant="scientific" onClick={() => onScientific("ln")}>ln</Button>
      </div>

      {/* Scientific Functions Row 2 */}
      <div className="grid grid-cols-5 gap-2">
        <Button variant="scientific" onClick={() => onScientific("sqrt")}>√</Button>
        <Button variant="scientific" onClick={() => onScientific("square")}>x²</Button>
        <Button variant="scientific" onClick={() => onScientific("cube")}>x³</Button>
        <Button variant="scientific" onClick={() => onScientific("pi")}>π</Button>
        <Button variant="scientific" onClick={() => onScientific("e")}>e</Button>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-4 gap-2">
        <Button variant="clear" onClick={onClearEntry}>CE</Button>
        <Button variant="operator" onClick={onToggleSign}>±</Button>
        <Button variant="operator" onClick={onPercentage}>%</Button>
        <Button variant="operator" onClick={() => onOperation("÷")}>÷</Button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button variant="number" onClick={() => onNumber("7")}>7</Button>
        <Button variant="number" onClick={() => onNumber("8")}>8</Button>
        <Button variant="number" onClick={() => onNumber("9")}>9</Button>
        <Button variant="operator" onClick={() => onOperation("×")}>×</Button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button variant="number" onClick={() => onNumber("4")}>4</Button>
        <Button variant="number" onClick={() => onNumber("5")}>5</Button>
        <Button variant="number" onClick={() => onNumber("6")}>6</Button>
        <Button variant="operator" onClick={() => onOperation("-")}>-</Button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button variant="number" onClick={() => onNumber("1")}>1</Button>
        <Button variant="number" onClick={() => onNumber("2")}>2</Button>
        <Button variant="number" onClick={() => onNumber("3")}>3</Button>
        <Button variant="operator" onClick={() => onOperation("+")}>+</Button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button variant="number" className="col-span-2" onClick={() => onNumber("0")}>0</Button>
        <Button variant="number" onClick={onDecimal}>.</Button>
        <Button variant="equals" onClick={onCalculate}>=</Button>
      </div>
    </div>
  );
};

export default ButtonGrid;
