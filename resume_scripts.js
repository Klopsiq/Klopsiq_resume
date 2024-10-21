// JavaScript code for dynamic effects on the resume website

// Function to toggle between dark and light modes
function toggleDarkMode() {
    const link = document.getElementById('theme-link');
    if (link.getAttribute('href') === 'styles_dark.css') {
        link.setAttribute('href', 'styles.css');
    } else {
        link.setAttribute('href', 'styles_dark.css');
    }
}

// Handle form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been sent successfully.`);

        // Clear the form
        contactForm.reset();
    });
}

// Animated typing effect for name
function typeWriterEffect(element, text, delay = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Applying typewriter effect to the name
window.onload = function() {
    const nameElement = document.querySelector('.animated-name');
    if (nameElement) {
        nameElement.innerHTML = ''; // Clear the initial content
        typeWriterEffect(nameElement, 'Aydar Shumbalov');
    }
};

// Random Effects Functions
function createRandomEffect() {
    const effects = [
        'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
        'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
        'https://media.giphy.com/media/xUPGcgtKxm3vA2U6hi/giphy.gif'
    ];
    const effect = document.createElement('img');
    effect.src = effects[Math.floor(Math.random() * effects.length)];
    effect.className = 'random-effect';
    document.body.appendChild(effect);
    setTimeout(() => {
        document.body.removeChild(effect);
    }, 5000);
}

function randomBackgroundChange() {
    const backgrounds = [
        'https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif',
        'https://media.giphy.com/media/26tPoyDhjiJ2g7rEs/giphy.gif',
        'https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif'
    ];
    document.body.style.background = `url('${backgrounds[Math.floor(Math.random() * backgrounds.length)]}') no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
}

function addGlitchEffect() {
    const glitchText = document.createElement('div');
    glitchText.innerText = "Welcome to Aydar's Resume!";
    glitchText.style.position = 'fixed';
    glitchText.style.top = Math.random() * window.innerHeight + 'px';
    glitchText.style.left = Math.random() * window.innerWidth + 'px';
    glitchText.style.fontSize = '2em';
    glitchText.style.color = '#ff6347';
    glitchText.style.zIndex = '10000';
    glitchText.style.animation = 'fadeOut 3s ease-out forwards';
    document.body.appendChild(glitchText);
    setTimeout(() => {
        document.body.removeChild(glitchText);
    }, 3000);
}
