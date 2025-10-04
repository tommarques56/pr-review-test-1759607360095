// Test file with some issues
function calculateSum(a, b) {
    // Missing error handling
    return a + b;
}

function processData(data) {
    // Inconsistent variable naming
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(data[i] * 2);
    }
    return result;
}

// Unused variable
const unusedVar = "This is not used";

// Missing semicolon
console.log("Hello World")
