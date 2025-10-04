// Updated main.js with some changes
function calculateSum(a, b) {
    // Added basic validation
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input types');
    }
    return a + b;
}

function processData(data) {
    // Fixed variable naming and added validation
    let processedResults = [];
    if (!Array.isArray(data)) {
        throw new Error('Data must be an array');
    }
    for (let i = 0; i < data.length; i++) {
        processedResults.push(data[i] * 2);
    }
    return processedResults;
}

// Removed unused variable
console.log("Hello World"); // Added missing semicolon
