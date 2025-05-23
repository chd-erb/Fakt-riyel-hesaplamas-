function calculateFactorial(n) {
    if (n < 0) {
        return "Please enter a non-negative integer.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

document.getElementById("calculate-btn").addEventListener("click", function() {
    const input = document.getElementById("number-input").value;
    const number = parseInt(input);
    const result = calculateFactorial(number);
    document.getElementById("result").innerText = `Factorial of ${number} is ${result}`;
});