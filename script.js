let messages = [
    "Are you positive?",
    "Think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, SAY YES PLEASE! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    
    // Change the "No" button text
    noBtn.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Make the "Yes" button grow
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.5) + 'px';
}

function handleYesClick() {
    // Redirect to a success page or change the content
    window.location.href = "yes_page.html"; 
}
