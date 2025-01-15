// script.js

// Function to smoothly scroll to the redeem section
function scrollToRedeem() {
    document.getElementById('redeem-section').scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to verify the code entered by the user
function verifyCode() {
    const redeemCode = document.getElementById('redeem-code').value;
    const messageElement = document.getElementById('verification-message');
    
    // Check if the redeem code is exactly 12 digits
    if (redeemCode.length === 12 && /^[0-9]+$/.test(redeemCode)) {
        messageElement.textContent = "Code verified successfully. You may proceed to download Minecraft now.";
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = "Invalid code. Please enter a valid 12-digit Minecraft redeem code.";
        messageElement.style.color = 'red';
    }
}
