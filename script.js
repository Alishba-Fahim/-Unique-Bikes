
const sizeButtons = document.querySelectorAll('.size-btn');
const colorRadios = document.querySelectorAll('input[name="color"]');
const resultDiv = document.getElementById('result');
const priceDisplay = document.getElementById('price');
const weightDisplay = document.getElementById('weight');

let selectedSize = '';
let selectedColor = '';

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedSize = button.textContent; 
    });
});

colorRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        selectedColor = radio.value; 
    });
});

document.getElementById('cart-btn').addEventListener('click', () => {
    let price = '';
    let weight = '';

    if (selectedSize === 'SMALL') {
        price = '$2000';
        weight = '12.00kg';
    } else if (selectedSize === 'MEDIUM') {
        price = '$2500';
        weight = '14.18kg';
    } else if (selectedSize === 'LARGE') {
        price = '$3000';
        weight = '16.00kg';
    }

    if (selectedColor === 'white') {
        price = price; 
    } else if (selectedColor === 'grey') {
        price = price; 
    } else if (selectedColor === 'red') {
        price = price; 
    }

    priceDisplay.textContent = price;
    weightDisplay.textContent = weight;
    resultDiv.style.display = 'block'; 
});



const slides = document.querySelector('.slides');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + 1) % (totalSlides - 2); 
    const offset = currentIndex * -33.33; 
    slides.style.transform = `translateX(${offset}%)`;
});
