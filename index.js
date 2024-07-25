const captcha = document.getElementById('captcha');
const captchaInput = document.getElementById('captcha-input');
const verifyButton = document.getElementById('verify');
const result = document.getElementById('result');

// Generate CAPTCHA
function generateCaptcha() {
    const ctx = captcha.getContext('2d');
    captcha.width = 150;
    captcha.height = 50;

    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, captcha.width, captcha.height);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaValue = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captchaValue += characters.charAt(randomIndex);
    }

    ctx.font = '24px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText(captchaValue, 10, 30);

    // Optionally, add noise or lines for security

    return captchaValue;
}

// Initial generation of CAPTCHA
let currentCaptcha = generateCaptcha();

// Verify CAPTCHA
verifyButton.addEventListener('click', () => {
    const userInput = captchaInput.value.trim().toLowerCase();
    if (userInput === currentCaptcha.toLowerCase()) {
        alert('CAPTCHA verified successfully!');
        result.textContent = 'CAPTCHA verified!';
        // Generate new CAPTCHA
        currentCaptcha = generateCaptcha();
    } else {
        alert('CAPTCHA incorrect. Please try again.');
        result.textContent = 'CAPTCHA incorrect.';
        // Generate new CAPTCHA on incorrect attempt (optional)
        currentCaptcha = generateCaptcha();
    }
});
