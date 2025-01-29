// Function to calculate the constant term of the polynomial using Lagrange interpolation
function lagrangeInterpolation(points) {
    let c = 0;
    
    // Lagrange interpolation formula: L(x) = Σ [y_i * L_i(x)]
    // where L_i(x) = Π [(x - x_j) / (x_i - x_j)] for all j ≠ i
    let n = points.length;

    for (let i = 0; i < n; i++) {
        let xi = points[i].x;
        let yi = points[i].y;
        
        let L = 1;  // Initialize L_i(x) to 1
        
        // Calculate the product part of L_i(x) for each j ≠ i
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                L *= -xi / (points[i].x - points[j].x);
            }
        }
        
        // Add the contribution of the current term to the final sum
        c += yi * L;
    }
    
    return c;
}

// Sample JSON input as test cases
const points = [
    {x: 1, y: 4}, // f(1) = 4
    {x: 2, y: 6}, // f(2) = 6
    {x: 3, y: 12} // f(3) = 12
];

// Find the constant term (f(0)) of the polynomial using the given points
const constantTerm = lagrangeInterpolation(points);

console.log(`The constant term c of the polynomial is: ${constantTerm}`);
