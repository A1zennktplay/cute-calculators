let display = document.getElementById('display');

// Function to append value to the display
function appendValue(value) {
    // If the display currently shows "0" or "Error", replace it
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Function to calculate the result
function calculate() {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (e) {
        // If there's an error in evaluation, show "Error"
        display.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '0'; // Reset to "0"
}
