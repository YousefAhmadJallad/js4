function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    let result = 0;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid amount';
        return;
    }

    // Conversion rates
    const rates = {
        'USD': { 'NIS': 3.5, 'JOD': 3.5 / 5 },
        'JOD': { 'NIS': 5, 'USD': 5 / 3.5 },
        'NIS': { 'USD': 1 / 3.5, 'JOD': 1 / 5 }
    };

    if (fromCurrency === toCurrency) {
        result = amount;
    } else {
        result = amount * rates[fromCurrency][toCurrency];
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
}
