
export const evaluateExpression = (expression: string): number => {
  try {
    // Replace display symbols with JavaScript operators
    const normalizedExpression = expression
      .replace(/×/g, "*")
      .replace(/÷/g, "/");
    
    // Use Function constructor for safe evaluation
    const result = new Function(`"use strict"; return (${normalizedExpression})`)();
    
    // Handle division by zero and invalid results
    if (!isFinite(result)) {
      throw new Error("Invalid calculation");
    }
    
    return result;
  } catch (error) {
    console.error("Calculation error:", error);
    return 0;
  }
};
