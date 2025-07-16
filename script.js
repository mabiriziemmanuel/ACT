      //   section for bd of hero landing campaign-section
        
        const backgroundImage = document.querySelector('.background-image');
    const animatedText = document.querySelector('.animated-text');

    if (backgroundImage && animatedText) {
      const images = [
        './gallery/see.jpg' ,             
        './gallery/buykits.jpg',
        './gallery/wells.jpg',    
        './gallery/see.jpg'
      ];
      const texts = [
        'A COMMUNITY TRANSFORMED - ACT - MARATHON ',
        'To Contribute Buy Kits or Donate',
        'Become ACT Member to Change the World',
        'Welcome to our Website'
      ];
      let currentImageIndex = 0;

      setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        backgroundImage.style.backgroundImage = `url(${images[currentImageIndex]})`;
        animatedText.textContent = texts[currentImageIndex];
        animatedText.classList.remove('animated-text');
        animatedText.offsetWidth;                  
        animatedText.classList.add('animated-text');
      }, 5000);
    } else {
      console.error('Elements not found');
    }
    
    
    //Whatsapp
    
         const whatsappHomeIcon = document.getElementById('whatsapp-home-icon');
const whatsappPopup = document.getElementById('whatsapp-popup');
const closePopupButton = document.getElementById('close-popup');
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const typingEffect = document.getElementById('typing-effect');
const emojiPopup = document.getElementById('emoji-popup');
const emojiIcon = document.getElementById('emoji-icon');

// Show the chat pop-up
whatsappHomeIcon.addEventListener('click', () => {
    whatsappPopup.style.display = 'flex';
});

// Close the chat pop-up
closePopupButton.addEventListener('click', () => {
    whatsappPopup.style.display = 'none';
});

// Add message to the chat window and then redirect to WhatsApp API
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        // Display message in the chat window
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'sent');
        userMessage.innerHTML = `
            <div class="message-bubble">${message}</div>
            <span class="blue-tick">✔✔</span>
        `;
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message

        // Display automated reply thanking the user
        setTimeout(() => {
            const replyMessage = document.createElement('div');
            replyMessage.classList.add('message', 'received');
            replyMessage.innerHTML = `
                <img src="profile-pic.jpg" alt="Avatar">
                <div class="message-bubble">Thank you for your valuable feedback. Together, we can make a difference for Busiro East!</div>
            `;
            chatMessages.appendChild(replyMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        // Redirect to WhatsApp API
        const phoneNumber = '+256758296217'; // Updated WhatsApp number
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

        // Clear the input field
        messageInput.value = '';
    } else {
        alert('Please enter a message.');
    }
});

// Emoji popup toggle
emojiIcon.addEventListener('click', () => {
    emojiPopup.style.display = emojiPopup.style.display === 'block' ? 'none' : 'block';
});

// Append emoji to input field
emojiPopup.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        messageInput.value += event.target.textContent;
        emojiPopup.style.display = 'none'; // Close emoji popup after selection
    }
});

// Remove typing effect after animation
setTimeout(() => {
    typingEffect.classList.remove('typing');
}, 3000);
const whatsappIcon = document.querySelector('.whatsapp-home-icon');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Change "200" to the desired scroll height
        whatsappIcon.style.display = 'flex'; // Show the button
        whatsappIcon.style.animation = 'slideInFromRight 0.5s ease forwards'; // Trigger the animation
    } else {
        whatsappIcon.style.display = 'none'; // Hide the button
    }
});

// Initially hide the button
whatsappIcon.style.display = 'none';
 
 
 
   //To Top button function
var backBtn = document.querySelector(".back-btn");
window.addEventListener("scroll", function() {
if (this.pageYOffset > 100) {
backBtn.classList.add("active");
} else {
backBtn.classList.remove("active");
}
});
backBtn.addEventListener("click", function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
})
});