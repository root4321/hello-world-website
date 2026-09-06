function showMessage() {
    const messageElement = document.getElementById('message');
    const messages = [
        'Hello from JavaScript! 🎉',
        'You clicked the button! 🎊',
        'Welcome to web development! 💻',
        'Keep building amazing things! 🚀'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
}
