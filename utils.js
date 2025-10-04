// Updated utils.js with improvements
class DataProcessor {
    constructor() {
        this.data = null;
    }
    
    // Added proper validation
    process(input) {
        if (!Array.isArray(input)) {
            throw new Error('Input must be an array');
        }
        this.data = input;
        return this.data.map(x => x * 2);
    }
    
    // Added error handling
    save() {
        try {
            localStorage.setItem('data', JSON.stringify(this.data));
        } catch (error) {
            console.error('Failed to save data:', error);
        }
    }
}

// Moved to module scope instead of global
let moduleCounter = 0;

// Function with better naming
function incrementModuleCounter() {
    moduleCounter++;
    return moduleCounter;
}
