// Function to convert the value from the given base to decimal
function convertToDecimal(value, base) {
    return parseInt(value, base);
}

// Lagrange interpolation function to find the constant term c
function lagrangeInterpolation(points) {
    let c = 0;
    
    // Loop through each point (xi, yi)
    for (let i = 0; i < points.length; i++) {
        let xi = points[i].x;
        let yi = points[i].y;
        
        let product = 1;
        
        // Calculate the Lagrange product for each xi
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let xj = points[j].x;
                product *= (0 - xj) / (xi - xj);
            }
        }
        
        c += yi * product;
    }

    return c;
}

// Input data: keys with base and values
let input = {
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
};

// Converting base values to decimal
let points = [
  { x: 1, y: convertToDecimal(input["1"].value, input["1"].base) },
  { x: 2, y: convertToDecimal(input["2"].value, input["2"].base) },
  { x: 3, y: convertToDecimal(input["3"].value, input["3"].base) },
  { x: 6, y: convertToDecimal(input["6"].value, input["6"].base) }
];

// Calculate constant term c using Lagrange Interpolation
let constantTerm = lagrangeInterpolation(points);

console.log("Constant Term c: " + constantTerm);
