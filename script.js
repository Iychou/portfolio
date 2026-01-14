document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

document.querySelectorAll('.big-card').forEach(bigCard => {
    bigCard.addEventListener('mouseenter', () => {
        bigCard.style.transform = 'translateY(-15px)';
    });
    bigCard.addEventListener('mouseleave', () => {
        bigCard.style.transform = 'translateY(0)';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // For now, just show an alert. In a real application, you'd send this to a server
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
        
        // Reset form
        this.reset();
        closePopup();
    });
}

const popup = document.getElementById("contactPopup");
const contactBtn = document.getElementById("contactBtn");
const contactIcon = document.getElementById("contactIcon");
const closeBtn = document.getElementById("closeContact");

function openPopup() {
    popup.classList.add("active");
}

function closePopup() {
    popup.classList.remove("active");
}

contactBtn.addEventListener("click", openPopup);
if (contactIcon) {
    contactIcon.addEventListener("click", openPopup);
}
closeBtn.addEventListener("click", closePopup);

// Close popup when clicking outside
popup.addEventListener("click", function(e) {
    if (e.target === popup) {
        closePopup();
    }
});

const cvPopup = document.getElementById("cvPopup");
const cvBtn = document.getElementById("cvBtn");
const closeCvBtn = document.getElementById("closeCv");

cvBtn.addEventListener("click", () => cvPopup.classList.add("active"));
closeCvBtn.addEventListener("click", () => cvPopup.classList.remove("active"));

// Close CV popup when clicking outside
cvPopup.addEventListener("click", function(e) {
    if (e.target === cvPopup) {
        closePopup();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Typing animation restart
function restartTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.style.animation = 'none';
        setTimeout(() => {
            typingText.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite';
        }, 100);
    }
}

// Restart typing animation every 10 seconds
setInterval(restartTypingAnimation, 10000);
