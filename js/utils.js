export function notANumber(value) {
    return isNaN(value);
}

// Quando a arrow function tem somente uma linha, as chaves {} são opcionais.
export function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}