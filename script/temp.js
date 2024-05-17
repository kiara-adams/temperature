document.addEventListener('DOMContentLoaded', function() {
    const tempForm = document.getElementById('tempForm');
    const resultDiv = document.getElementById('result');

    tempForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const celsiusInput = document.getElementById('celsius');
      

        const celsius = parseFloat(celsiusInput.value);
        

        if (isNaN(celsius)) {
            resultDiv.textContent = 'Please enter valid temperatures.';
            return;
        }

        resultDiv.textContent = ''; 

        const fahrenheitResult = (celsius * 9/5) + 32;
        resultDiv.textContent += `Celsius to Fahrenheit: ${fahrenheitResult.toFixed(2)}°F`;

    });
});