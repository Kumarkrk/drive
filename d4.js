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

// Input data: keys with base and values (second test case)
let input = {
  "keys": {
    "n": 10,
    "k": 7
  },
  "1": { "base": "6", "value": "13444211440455345511" },
  "2": { "base": "15", "value": "aed7015a346d63" },
  "3": { "base": "15", "value": "6aeeb69631c227c" },
  "4": { "base": "16", "value": "e1b5e05623d881f" },
  "5": { "base": "8", "value": "316034514573652620673" },
  "6": { "base": "3", "value": "2122212201122002221120200210011020220200" },
  "7": { "base": "3", "value": "20120221122211000100210021102001201112121" },
  "8": { "base": "6", "value": "20220554335330240002224253" },
  "9": { "base": "12", "value": "45153788322a1255483" },
  "10": { "base": "7", "value": "1101613130313526312514143" }
};

// Converting base values to decimal for the first 7 points
let points = [
  { x: 1, y: convertToDecimal(input["1"].value, input["1"].base) },
  { x: 2, y: convertToDecimal(input["2"].value, input["2"].base) },
  { x: 3, y: convertToDecimal(input["3"].value, input["3"].base) },
  { x: 4, y: convertToDecimal(input["4"].value, input["4"].base) },
  { x: 5, y: convertToDecimal(input["5"].value, input["5"].base) },
  { x: 6, y: convertToDecimal(input["6"].value, input["6"].base) },
  { x: 7, y: convertToDecimal(input["7"].value, input["7"].base) }
];

// Calculate constant term c using Lagrange Interpolation
let constantTerm = lagrangeInterpolation(points);

console.log("Constant Term c: " + constantTerm);
