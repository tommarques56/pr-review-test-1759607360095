// Utility functions with potential issues
class DataProcessor {
    constructor() {
        this.data = null;
    }
    
    // Method without proper validation
    process(input) {
        this.data = input;
        return this.data.map(x => x * 2);
    }
    
    // Missing error handling
    save() {
        localStorage.setItem('data', JSON.stringify(this.data));
    }
}

// Global variable (bad practice)
var globalCounter = 0;

// Function with side effects
function incrementCounter() {
    globalCounter++;
    return globalCounter;
}
