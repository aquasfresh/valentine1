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

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question');
const mainGif = document.getElementById('main-gif');

noBtn.addEventListener('click', () => {
    // 1. Change the text of the "No" button
    noBtn.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // 2. Increase the size of the "Yes" button
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.5) + 'px';
    yesBtn.style.padding = '20px 40px'; // Increase padding too
});

yesBtn.addEventListener('click', () => {
    // Change content for the "Yes" success state
    questionText.innerText = "Knew you would say yes! ❤️";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzhpYmZ4ZzR4ZzR4ZzR4ZzR4ZzR4ZzR4ZzR4ZzR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/L40p3p5ZpYFv8F0pYm/giphy.gif"; // Happy gif

    // Hide the No button
    noBtn.style.display = 'none';
});
<button id="yes-btn" onclick="handleYesClick()">Yes</button>
<button id="no-btn" onclick="handleNoClick()">No</button>
