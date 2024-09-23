// Matrix Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Making the canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Chinese characters
const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Converting the string into an array of characters
const charsArray = matrixChars.split('');

// Setting up the font size and columns
const fontSize = 16;
const columns = canvas.width / fontSize; // Number of columns for the rain
const drops = Array(Math.floor(columns)).fill(1); // One drop per column

// Drawing the characters
function drawMatrix() {
    // Give the background a slight opacity for fade-out effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00'; // Green text for matrix
    ctx.font = `${fontSize}px monospace`;

    // Looping over the drops
    for (let i = 0; i < drops.length; i++) {
        // Random character from the array
        const char = charsArray[Math.floor(Math.random() * charsArray.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top after it has crossed the screen
        // Randomizing the reset point to make the characters appear more fluid
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        // Incrementing Y coordinate for each drop
        drops[i]++;
    }
}

// Setting interval for drawing the characters
setInterval(drawMatrix, 33);

// Resize the canvas if the window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
