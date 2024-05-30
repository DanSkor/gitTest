const num1 = document.querySelector('.number-a');
const num2 = document.querySelector('.number-b');
const select = document.querySelector('.select');
const resultButton = document.querySelector('.result-btn');
const screen = document.querySelector('.screen');

resultButton.addEventListener('click', () => {
    const numA = Number(num1.value);
    const numB = Number(num2.value);
    const process = select.value;

    const result = calculate(numA, numB, process);

    screen.textContent = result;
})