const OPERATIONS = {
    sum: '+',
    subtract: '-'
};

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calculate({ a, b, operation }) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
        case OPERATIONS.subtract:
            result = subtract(a, b);
            break;
        default:
            return 'unknown operation';
    }

    return result;
}