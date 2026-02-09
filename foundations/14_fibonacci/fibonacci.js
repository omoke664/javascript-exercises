const fibonacci = function(n) {
    // 1. Handle negative numbers if your tests require it
    if (n < 0) return "OOPS";
    
    // 2. Convert string input to number (just in case the test sends "6")
    const count = Number(n);
    if (count === 0) return 0;

    // 3. Set up the starting points: f(0) = 0, f(1) = 1
    let a = 0; // Previous number
    let b = 1; // Current number

    // 4. Loop up to the nth number
    for (let i = 1; i < count; i++) {
        const temp = b; // Remember the current number
        b = a + b;      // The new current is the sum of the last two
        a = temp;       // The old current becomes the new previous
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
